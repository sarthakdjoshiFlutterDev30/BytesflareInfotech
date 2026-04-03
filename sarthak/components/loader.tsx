'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

/* ─── Sequence ─────────────────────────────────────────────── */
const SEQ = [
  { t: 0.00, label: 'Initialising biometric engine', sub: 'Loading neural weights…' },
  { t: 0.14, label: 'Mapping facial geometry', sub: 'Building 3D depth map…' },
  { t: 0.28, label: 'Detecting 468 landmarks', sub: 'Triangulating mesh nodes…' },
  { t: 0.44, label: 'Running liveness detection', sub: 'Anti-spoofing check active…' },
  { t: 0.58, label: 'Identity verified', sub: 'Confidence: 99.8% · Match found' },
  { t: 0.70, label: 'Encrypting biometric payload', sub: 'AES-256-GCM · TLS 1.3 tunnel…' },
  { t: 0.82, label: 'Syncing attendance record', sub: 'Writing to cloud ledger…' },
  { t: 0.93, label: 'Dashboard ready', sub: 'All systems operational' },
];
const TOTAL = 7000;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const c01 = (v: number) => Math.max(0, Math.min(1, v));
const iL = (a: number, b: number, v: number) => c01((v - a) / (b - a));
const easeO = (t: number) => 1 - Math.pow(1 - t, 3);
const easeIO = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/* ─── Face landmark positions (normalised -1..1) ─────────── */
const FACE_LANDMARKS = (() => {
  const pts: { x: number; y: number; group: number }[] = [];
  // Left eye (0)
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    pts.push({ x: -0.30 + Math.cos(a) * 0.13, y: 0.20 + Math.sin(a) * 0.065, group: 0 });
  }
  // Right eye (1)
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    pts.push({ x: 0.30 + Math.cos(a) * 0.13, y: 0.20 + Math.sin(a) * 0.065, group: 1 });
  }
  // Left eyebrow (2)
  for (let i = 0; i < 8; i++) {
    pts.push({ x: lerp(-0.44, -0.16, i / 7), y: 0.36 + Math.sin((i / 7) * Math.PI) * 0.04, group: 2 });
  }
  // Right eyebrow (3)
  for (let i = 0; i < 8; i++) {
    pts.push({ x: lerp(0.16, 0.44, i / 7), y: 0.36 + Math.sin((i / 7) * Math.PI) * 0.04, group: 3 });
  }
  // Nose bridge (4)
  for (let i = 0; i < 6; i++) {
    pts.push({ x: (Math.random() - 0.5) * 0.08, y: lerp(0.14, -0.08, i / 5), group: 4 });
  }
  // Nose tip (5)
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    pts.push({ x: Math.cos(a) * 0.08, y: -0.08 + Math.sin(a) * 0.045, group: 5 });
  }
  // Mouth outer (6)
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    pts.push({ x: Math.cos(a) * 0.22, y: -0.30 + Math.sin(a) * 0.085, group: 6 });
  }
  // Mouth inner (7)
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    pts.push({ x: Math.cos(a) * 0.13, y: -0.30 + Math.sin(a) * 0.05, group: 7 });
  }
  // Jawline (8)
  for (let i = 0; i < 24; i++) {
    const a = lerp(-0.62, Math.PI + 0.62, i / 23);
    pts.push({ x: Math.cos(a) * 0.62, y: -0.42 + Math.sin(a) * 0.30, group: 8 });
  }
  // Forehead (9)
  for (let i = 0; i < 14; i++) {
    pts.push({ x: lerp(-0.46, 0.46, i / 13), y: 0.56 + Math.random() * 0.16, group: 9 });
  }
  // Cheeks (10)
  for (let i = 0; i < 10; i++) {
    const s = i < 5 ? -1 : 1;
    pts.push({ x: s * (0.42 + Math.random() * 0.08), y: -0.02 + Math.random() * 0.18, group: 10 });
  }
  return pts;
})();

/* ─── Connection pairs ─────────────────────────────────────── */
const CONNECTIONS: [number, number][] = (() => {
  const pairs: [number, number][] = [];
  const addLoop = (start: number, count: number) => {
    for (let i = 0; i < count; i++) pairs.push([start + i, start + (i + 1) % count]);
  };
  const addLine = (start: number, count: number) => {
    for (let i = 0; i < count - 1; i++) pairs.push([start + i, start + i + 1]);
  };
  addLoop(0, 16);   // left eye
  addLoop(16, 16);  // right eye
  addLine(32, 8);   // left brow
  addLine(40, 8);   // right brow
  addLine(48, 6);   // nose bridge
  addLoop(54, 8);   // nose tip
  addLoop(62, 20);  // mouth outer
  addLoop(82, 12);  // mouth inner
  addLine(94, 24);  // jawline
  addLine(118, 14); // forehead
  return pairs;
})();

/* ─── Canvas renderer ──────────────────────────────────────── */
function useCanvasRenderer(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  progressRef: React.RefObject<number>,
  verifiedRef: React.RefObject<boolean>,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    const t0 = performance.now();

    // Particle system
    const PARTS = 180;
    const px = new Float32Array(PARTS), py = new Float32Array(PARTS);
    const pvx = new Float32Array(PARTS), pvy = new Float32Array(PARTS);
    const palpha = new Float32Array(PARTS);
    for (let i = 0; i < PARTS; i++) {
      px[i] = Math.random();
      py[i] = Math.random();
      pvx[i] = (Math.random() - 0.5) * 0.0004;
      pvy[i] = -(0.0006 + Math.random() * 0.0008);
      palpha[i] = Math.random();
    }

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      raf = requestAnimationFrame(draw);
      const elapsed = performance.now() - t0;
      const t = c01(elapsed / TOTAL);
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const scale = Math.min(W, H) * 0.38;
      const prog = progressRef.current ?? 0;
      const verified = verifiedRef.current ?? false;

      ctx.clearRect(0, 0, W, H);

      /* ── Background radial glow ── */
      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 1.8);
      bgGrad.addColorStop(0, `rgba(79,70,229,${0.06 + Math.sin(elapsed / 1200) * 0.02})`);
      bgGrad.addColorStop(0.5, 'rgba(124,58,237,0.02)');
      bgGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      /* ── Floating particles ── */
      const partT = iL(0.62, 0.92, t);
      if (partT > 0) {
        for (let i = 0; i < PARTS; i++) {
          px[i] += pvx[i]; py[i] += pvy[i]; palpha[i] -= 0.003;
          if (py[i] < -0.05 || palpha[i] <= 0) {
            px[i] = 0.3 + Math.random() * 0.4; py[i] = 0.6 + Math.random() * 0.3;
            pvx[i] = (Math.random() - 0.5) * 0.0004; pvy[i] = -(0.0006 + Math.random() * 0.0008);
            palpha[i] = 0.4 + Math.random() * 0.5;
          }
          const a = palpha[i] * partT * 0.7;
          if (a <= 0) continue;
          const col = i % 3 === 0 ? `rgba(129,140,248,${a})` : i % 3 === 1 ? `rgba(167,139,250,${a})` : `rgba(56,189,248,${a})`;
          ctx.beginPath();
          ctx.arc(px[i] * W, py[i] * H, (i % 4 === 0 ? 1.5 : 0.8) * window.devicePixelRatio, 0, Math.PI * 2);
          ctx.fillStyle = col;
          ctx.fill();
        }
      }

      /* ── Outer tick ring ── */
      const ringAlpha = easeO(iL(0, 0.10, t));
      if (ringAlpha > 0) {
        for (let i = 0; i < 60; i++) {
          const a = (i / 60) * Math.PI * 2 + elapsed * 0.00008;
          const isMaj = i % 5 === 0, isMed = i % 2 === 0;
          const r0 = scale * 1.52, r1 = r0 + (isMaj ? 14 : isMed ? 8 : 5) * window.devicePixelRatio;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
          ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
          ctx.strokeStyle = `rgba(${isMaj ? '129,140,248' : '79,70,229'},${ringAlpha * (isMaj ? 0.7 : 0.3)})`;
          ctx.lineWidth = (isMaj ? 1.5 : 0.8) * window.devicePixelRatio;
          ctx.stroke();
        }
        // Outer circle
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.52, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79,70,229,${ringAlpha * 0.18})`;
        ctx.lineWidth = 0.8 * window.devicePixelRatio;
        ctx.stroke();
      }

      /* ── Rotating arcs ── */
      const arcAlpha = easeO(iL(0.06, 0.20, t)) * (1 - iL(0.88, 0.98, t));
      if (arcAlpha > 0) {
        // Arc 1
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.30, elapsed * 0.00055, elapsed * 0.00055 + Math.PI * 1.65);
        ctx.strokeStyle = `rgba(129,140,248,${arcAlpha * 0.55})`;
        ctx.lineWidth = 1.5 * window.devicePixelRatio;
        ctx.stroke();
        // Arc 2 (counter)
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.42, -elapsed * 0.00038, -elapsed * 0.00038 + Math.PI * 0.85);
        ctx.strokeStyle = `rgba(167,139,250,${arcAlpha * 0.35})`;
        ctx.lineWidth = 1 * window.devicePixelRatio;
        ctx.stroke();
        // Arc 3 (inner fast)
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.18, elapsed * 0.0009, elapsed * 0.0009 + Math.PI * 0.55);
        ctx.strokeStyle = `rgba(56,189,248,${arcAlpha * 0.25})`;
        ctx.lineWidth = 0.8 * window.devicePixelRatio;
        ctx.stroke();
      }

      /* ── Concentric rings ── */
      [1.28, 1.10, 0.92].forEach((r, i) => {
        const a = easeO(iL(0.02 + i * 0.03, 0.14 + i * 0.03, t)) * (1 - iL(0.88, 0.98, t));
        if (a <= 0) return;
        ctx.beginPath();
        ctx.arc(cx, cy, scale * r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${['79,70,229', '99,102,241', '124,58,237'][i]},${a * (0.22 - i * 0.04)})`;
        ctx.lineWidth = (1.2 - i * 0.2) * window.devicePixelRatio;
        ctx.stroke();
      });

      /* ── Corner brackets ── */
      const bAlpha = easeO(iL(0, 0.10, t));
      if (bAlpha > 0) {
        const bx = scale * 1.08, by = scale * 1.22, bL = scale * 0.28;
        const corners = [[-1, -1], [1, -1], [-1, 1], [1, 1]] as const;
        corners.forEach(([sx, sy]) => {
          const ox = cx + sx * bx, oy = cy + sy * by;
          ctx.beginPath();
          ctx.moveTo(ox, oy + sy * bL);
          ctx.lineTo(ox, oy);
          ctx.lineTo(ox - sx * bL, oy);
          ctx.strokeStyle = `rgba(129,140,248,${bAlpha * 0.75})`;
          ctx.lineWidth = 1.5 * window.devicePixelRatio;
          ctx.lineJoin = 'miter';
          ctx.stroke();
        });
        // Corner dots
        corners.forEach(([sx, sy]) => {
          ctx.beginPath();
          ctx.arc(cx + sx * bx, cy + sy * by, 2.5 * window.devicePixelRatio, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(129,140,248,${bAlpha * 0.9})`;
          ctx.fill();
        });
      }

      /* ── Face oval ── */
      const faceAlpha = easeO(iL(0.04, 0.18, t));
      if (faceAlpha > 0) {
        // Solid fill
        const fGrad = ctx.createRadialGradient(cx, cy - scale * 0.05, 0, cx, cy, scale * 0.95);
        fGrad.addColorStop(0, `rgba(8,10,28,${faceAlpha * 0.92})`);
        fGrad.addColorStop(0.7, `rgba(4,6,18,${faceAlpha * 0.96})`);
        fGrad.addColorStop(1, `rgba(2,3,12,${faceAlpha * 0.98})`);
        ctx.save();
        ctx.scale(0.76, 1.0);
        ctx.beginPath();
        ctx.arc(cx / 0.76, cy, scale * 0.95, 0, Math.PI * 2);
        ctx.fillStyle = fGrad;
        ctx.fill();
        ctx.restore();

        // Wireframe ellipse
        ctx.save();
        ctx.scale(0.76, 1.0);
        ctx.beginPath();
        ctx.arc(cx / 0.76, cy, scale * 0.95, 0, Math.PI * 2);
        const wireCol = verified ? `rgba(52,211,153,${faceAlpha * 0.30})` : `rgba(79,70,229,${faceAlpha * 0.22})`;
        ctx.strokeStyle = wireCol;
        ctx.lineWidth = 1 * window.devicePixelRatio;
        ctx.stroke();
        ctx.restore();

        // Specular highlight
        const specGrad = ctx.createRadialGradient(cx - scale * 0.18, cy - scale * 0.28, 0, cx - scale * 0.18, cy - scale * 0.28, scale * 0.55);
        specGrad.addColorStop(0, `rgba(129,140,248,${faceAlpha * 0.08})`);
        specGrad.addColorStop(1, 'transparent');
        ctx.save();
        ctx.scale(0.76, 1.0);
        ctx.beginPath();
        ctx.arc(cx / 0.76, cy, scale * 0.95, 0, Math.PI * 2);
        ctx.clip();
        ctx.fillStyle = specGrad;
        ctx.fillRect(0, 0, W / 0.76, H);
        ctx.restore();
      }

      /* ── Scan beam ── */
      const scanT = iL(0.12, 0.56, t);
      if (scanT > 0 && scanT < 1) {
        const sy = cy + lerp(-scale * 1.05, scale * 1.05, scanT);
        const scanFade = iL(0.54, 0.62, t);

        // Glow below
        const glowH = scale * 0.55;
        const glowGrad = ctx.createLinearGradient(0, sy, 0, sy + glowH);
        glowGrad.addColorStop(0, `rgba(99,102,241,${(1 - scanFade) * 0.10})`);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(cx - scale * 1.1, sy, scale * 2.2, glowH);

        // Main line
        const lineGrad = ctx.createLinearGradient(cx - scale * 1.1, 0, cx + scale * 1.1, 0);
        lineGrad.addColorStop(0, 'transparent');
        lineGrad.addColorStop(0.15, `rgba(129,140,248,${(1 - scanFade) * 0.9})`);
        lineGrad.addColorStop(0.5, `rgba(224,231,255,${(1 - scanFade) * 1.0})`);
        lineGrad.addColorStop(0.85, `rgba(129,140,248,${(1 - scanFade) * 0.9})`);
        lineGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = lineGrad;
        ctx.fillRect(cx - scale * 1.1, sy - 1 * window.devicePixelRatio, scale * 2.2, 2 * window.devicePixelRatio);

        // Bright leading edge
        ctx.fillStyle = `rgba(240,244,255,${(1 - scanFade) * 0.6})`;
        ctx.fillRect(cx - scale * 1.1, sy - 0.5 * window.devicePixelRatio, scale * 2.2, 0.5 * window.devicePixelRatio);

        // Scan light on face
        const scanLightGrad = ctx.createRadialGradient(cx, sy, 0, cx, sy, scale * 0.8);
        scanLightGrad.addColorStop(0, `rgba(129,140,248,${(1 - scanFade) * 0.12})`);
        scanLightGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = scanLightGrad;
        ctx.fillRect(cx - scale * 1.1, sy - scale * 0.8, scale * 2.2, scale * 1.6);
      }

      /* ── Landmarks ── */
      const lmT = easeO(iL(0.12, 0.56, t));
      if (lmT > 0) {
        const scanY = lerp(-scale * 1.05, scale * 1.05, iL(0.12, 0.56, t));
        const verGreen = verified;

        FACE_LANDMARKS.forEach((p, idx) => {
          const px2 = cx + p.x * scale * 0.88;
          const py2 = cy - p.y * scale * 0.88;
          const relY = py2 - cy;
          const revealT = c01((scanY - relY + scale * 0.15) / (scale * 0.3));
          const alpha = lmT * revealT;
          if (alpha <= 0) return;

          const dotCol = verGreen
            ? `rgba(110,231,183,${alpha * 0.95})`
            : `rgba(199,210,254,${alpha * 0.90})`;
          ctx.beginPath();
          ctx.arc(px2, py2, 1.8 * window.devicePixelRatio, 0, Math.PI * 2);
          ctx.fillStyle = dotCol;
          ctx.fill();

          // Glow on key points
          if (idx % 8 === 0) {
            ctx.beginPath();
            ctx.arc(px2, py2, 5 * window.devicePixelRatio, 0, Math.PI * 2);
            ctx.fillStyle = verGreen ? `rgba(52,211,153,${alpha * 0.15})` : `rgba(99,102,241,${alpha * 0.15})`;
            ctx.fill();
          }
        });

        /* Connection lines */
        const connAlpha = easeO(iL(0.28, 0.56, t)) * lmT;
        if (connAlpha > 0) {
          ctx.lineWidth = 0.6 * window.devicePixelRatio;
          CONNECTIONS.forEach(([a, b]) => {
            const pa = FACE_LANDMARKS[a], pb = FACE_LANDMARKS[b];
            if (!pa || !pb) return;
            const ax = cx + pa.x * scale * 0.88, ay = cy - pa.y * scale * 0.88;
            const bx2 = cx + pb.x * scale * 0.88, by2 = cy - pb.y * scale * 0.88;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx2, by2);
            ctx.strokeStyle = verGreen
              ? `rgba(52,211,153,${connAlpha * 0.45})`
              : `rgba(99,102,241,${connAlpha * 0.40})`;
            ctx.stroke();
          });
        }
      }

      /* ── Verify flash ── */
      const verT = iL(0.56, 0.66, t);
      if (verT > 0) {
        const pulse = Math.sin(verT * Math.PI);
        const flashGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 1.2);
        flashGrad.addColorStop(0, `rgba(52,211,153,${pulse * 0.18})`);
        flashGrad.addColorStop(0.5, `rgba(52,211,153,${pulse * 0.06})`);
        flashGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = flashGrad;
        ctx.fillRect(0, 0, W, H);

        // Verified ring pulse
        ctx.beginPath();
        ctx.arc(cx, cy, scale * (0.98 + pulse * 0.08), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(52,211,153,${pulse * 0.6})`;
        ctx.lineWidth = (1.5 + pulse * 2) * window.devicePixelRatio;
        ctx.stroke();
      }

      /* ── Dashboard bars ── */
      const dashT = easeO(iL(0.86, 1.0, t));
      if (dashT > 0) {
        const barData = [0.52, 0.78, 0.35, 0.94, 0.61, 0.83, 0.44, 0.90, 0.68, 0.76];
        const bW = scale * 0.10, gap = scale * 0.055;
        const totalW = barData.length * (bW + gap) - gap;
        const startX = cx - totalW / 2;
        const baseY = cy + scale * 1.05;
        const maxH = scale * 0.55;

        barData.forEach((h, i) => {
          const bt = easeO(c01((dashT - i * 0.06) * 2.5));
          const barH = h * maxH * bt;
          const x = startX + i * (bW + gap);
          const colors = ['rgba(99,102,241', 'rgba(124,58,237', 'rgba(129,140,248', 'rgba(167,139,250', 'rgba(79,70,229'];
          const col = colors[i % colors.length];

          // Bar glow
          const barGrad = ctx.createLinearGradient(0, baseY - barH, 0, baseY);
          barGrad.addColorStop(0, `${col},${bt * 0.9})`);
          barGrad.addColorStop(1, `${col},${bt * 0.3})`);
          ctx.fillStyle = barGrad;
          ctx.fillRect(x, baseY - barH, bW, barH);

          // Top cap glow
          if (barH > 2) {
            ctx.fillStyle = `${col},${bt * 0.6})`;
            ctx.fillRect(x, baseY - barH - 1.5 * window.devicePixelRatio, bW, 1.5 * window.devicePixelRatio);
          }
        });

        // Base line
        ctx.fillStyle = `rgba(79,70,229,${dashT * 0.3})`;
        ctx.fillRect(startX - 4, baseY, totalW + 8, 1 * window.devicePixelRatio);

        // Fade face
        const fadeGrad = ctx.createRadialGradient(cx, cy, scale * 0.3, cx, cy, scale * 0.95);
        fadeGrad.addColorStop(0, `rgba(1,3,11,${dashT * 0.7})`);
        fadeGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = fadeGrad;
        ctx.fillRect(0, 0, W, H);
      }
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [canvasRef, progressRef, verifiedRef]);
}

/* ─── Component ────────────────────────────────────────────── */
export function Loader({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const verifiedRef = useRef(false);

  const [phaseIdx, setPhaseIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [verified, setVerified] = useState(false);
  const [exiting, setExiting] = useState(false);
  const doneRef = useRef(false);

  // Keep refs in sync for canvas renderer
  progressRef.current = progress;
  verifiedRef.current = verified;

  useCanvasRenderer(canvasRef, progressRef, verifiedRef);

  useEffect(() => {
    const t0 = performance.now();
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = c01((performance.now() - t0) / TOTAL);
      const pct = t * 100;
      setProgress(pct);

      let pi = SEQ.length - 1;
      for (let i = 0; i < SEQ.length - 1; i++) {
        if (t < SEQ[i + 1].t) { pi = i; break; }
      }
      setPhaseIdx(pi);
      if (pi >= 4) setVerified(true);

      if (t >= 1 && !doneRef.current) {
        doneRef.current = true;
        cancelAnimationFrame(raf);
        setTimeout(() => { setExiting(true); setTimeout(onDone, 900); }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const phase = SEQ[phaseIdx];
  const conf = verified ? '99.8' : `${Math.min(99, Math.round(progress * 1.42))}`;
  const nodes = Math.round(lerp(0, 468, c01(progress / 48)));
  const lat = Math.max(8, Math.round(lerp(140, 8, c01(progress / 58))));

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] overflow-hidden select-none"
          style={{ background: 'radial-gradient(ellipse 120% 100% at 50% 0%, #06082a 0%, #01030b 55%, #000208 100%)' }}
        >

          {/* ── Dot grid ── */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

          {/* ── Vignette ── */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,2,8,0.88) 100%)' }} />

          {/* ── Horizontal scan lines (subtle CRT) ── */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)', backgroundSize: '100% 3px' }} />

          {/* ══════════════════════════════════════════
              TOP BAR
          ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-5 sm:px-8 border-b border-white/[0.05] z-30"
            style={{ background: 'rgba(1,3,11,0.6)', backdropFilter: 'blur(12px)' }}
          >
            {/* Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#6366f1,#7c3aed)', boxShadow: '0 0 14px rgba(99,102,241,0.55)' }}>
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <span className="text-[11px] font-bold text-white tracking-tight">
                Bytesflare <span style={{ background: 'linear-gradient(90deg,#818cf8,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Infotech</span>
              </span>
              <div className="hidden sm:block w-px h-3.5 bg-white/10 mx-1" />
              <span className="hidden sm:block text-[9px] text-slate-600 font-mono tracking-widest">BytesAttend · v2.4.1</span>
            </div>

            {/* Right: live status */}
            <div className="flex items-center gap-4 font-mono">
              <div className="hidden sm:flex items-center gap-3 text-[8px] text-slate-600 tracking-widest">
                <span>TLS 1.3</span>
                <span className="w-px h-3 bg-white/10" />
                <span>AES-256-GCM</span>
                <span className="w-px h-3 bg-white/10" />
                <span>IN-WEST-1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <motion.div
                  animate={{ opacity: verified ? 1 : [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: verified ? 0 : Infinity }}
                  className={`w-1.5 h-1.5 rounded-full ${verified ? 'bg-emerald-400' : 'bg-indigo-400'}`}
                  style={verified ? { boxShadow: '0 0 6px rgba(52,211,153,0.8)' } : {}}
                />
                <span className={`text-[9px] tracking-[0.15em] uppercase ${verified ? 'text-emerald-400' : 'text-indigo-400/80'}`}>
                  {verified ? 'Verified' : 'Scanning'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════
              MAIN AREA
          ══════════════════════════════════════════ */}
          <div className="absolute inset-0 flex items-center justify-center pt-12 pb-28">
            <div className="flex items-center gap-4 lg:gap-8 w-full max-w-5xl px-4">

              {/* ── Left panel ── */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex flex-col gap-0 w-44 flex-shrink-0"
                style={{ fontFamily: "'Space Mono', 'Courier New', monospace" }}
              >
                {/* Section header */}
                <div className="text-[8px] text-slate-700 tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
                  <div className="w-3 h-px bg-indigo-500/40" />
                  BIOMETRIC CHECKS
                </div>

                {[
                  { label: 'DEPTH MAP', threshold: 14 },
                  { label: 'MESH BUILD', threshold: 28 },
                  { label: 'LANDMARKS', threshold: 44 },
                  { label: 'LIVENESS', threshold: 58 },
                  { label: 'ANTI-SPOOF', threshold: 63 },
                  { label: 'ENCRYPT', threshold: 70 },
                  { label: 'CLOUD SYNC', threshold: 82 },
                  { label: 'LEDGER WRITE', threshold: 93 },
                ].map(({ label, threshold }, i) => {
                  const done = progress > threshold;
                  const active = progress > threshold - 14 && !done;
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="flex items-center gap-2 py-1.5 border-b border-white/[0.03]"
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 transition-all duration-500 ${done ? 'bg-emerald-500/20 border border-emerald-500/50' :
                          active ? 'bg-indigo-500/15 border border-indigo-500/40' :
                            'bg-white/[0.02] border border-white/[0.06]'
                        }`}>
                        {done
                          ? <svg viewBox="0 0 10 10" className="w-2 h-2"><polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#34d399" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          : active
                            ? <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 h-1 rounded-full bg-indigo-400" />
                            : null
                        }
                      </div>
                      <span className={`text-[8px] tracking-[0.12em] transition-colors duration-500 ${done ? 'text-slate-400' : active ? 'text-indigo-400/70' : 'text-slate-700'}`}>
                        {label}
                      </span>
                      {done && <div className="ml-auto w-1 h-1 rounded-full bg-emerald-500/60" />}
                    </motion.div>
                  );
                })}

                {/* Divider */}
                <div className="h-px bg-white/[0.04] my-3" />

                {/* Live metrics */}
                <div className="text-[8px] text-slate-700 tracking-[0.25em] uppercase mb-2 flex items-center gap-2">
                  <div className="w-3 h-px bg-indigo-500/40" />
                  LIVE METRICS
                </div>
                {[
                  { k: 'CONFIDENCE', v: `${conf}%`, hi: verified },
                  { k: 'NODES', v: `${nodes}`, hi: false },
                  { k: 'LATENCY', v: `${lat}ms`, hi: false },
                  { k: 'MATCH SCORE', v: verified ? '0.998' : '—', hi: verified },
                ].map(({ k, v, hi }) => (
                  <div key={k} className="flex justify-between items-baseline py-1 border-b border-white/[0.03]">
                    <span className="text-[7.5px] text-slate-700 tracking-widest">{k}</span>
                    <span className={`text-[9px] tabular-nums ${hi ? 'text-emerald-400' : 'text-indigo-400/70'}`}>{v}</span>
                  </div>
                ))}
              </motion.div>

              {/* ── Canvas ── */}
              <div className="relative flex-1 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px]"
                  style={{ display: 'block' }}
                />

                {/* Canvas HUD overlays */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px]"
                    style={{ fontFamily: "'Space Mono','Courier New',monospace" }}>

                    {/* Top-left */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                      className="absolute top-1 left-2 space-y-0.5">
                      <div className="text-[7px] text-indigo-400/40 tracking-[0.2em] uppercase">FACE_ID · SCAN</div>
                      <div className="text-[7px] text-slate-700 tracking-widest">{Math.round(progress).toString().padStart(3, '0')}% COMPLETE</div>
                    </motion.div>

                    {/* Top-right */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                      className="absolute top-1 right-2 text-right space-y-0.5">
                      <div className={`text-[7px] tracking-[0.18em] uppercase ${verified ? 'text-emerald-400' : 'text-indigo-400/50 animate-pulse'}`}>
                        {verified ? '● MATCH FOUND' : '◌ PROCESSING'}
                      </div>
                      <div className="text-[7px] text-slate-700 tracking-widest">CONF {conf}%</div>
                    </motion.div>

                    {/* Bottom center */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-2">
                      <div className="w-8 h-px bg-indigo-500/20" />
                      <span className="text-[6.5px] text-slate-700 tracking-[0.22em] uppercase whitespace-nowrap">
                        {verified ? 'Attendance Logged · Session Active' : 'Biometric Analysis In Progress'}
                      </span>
                      <div className="w-8 h-px bg-indigo-500/20" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* ── Right panel ── */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex flex-col gap-0 w-44 flex-shrink-0"
                style={{ fontFamily: "'Space Mono','Courier New',monospace" }}
              >
                {/* Confidence ring */}
                <div className="text-[8px] text-slate-700 tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
                  <div className="w-3 h-px bg-indigo-500/40" />
                  CONFIDENCE
                </div>
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="4" />
                      <circle cx="40" cy="40" r="32" fill="none"
                        stroke={verified ? '#34d399' : '#6366f1'}
                        strokeWidth="4" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 32}`}
                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - c01(progress / 100))}`}
                        style={{ transition: 'stroke-dashoffset 0.08s linear, stroke 0.7s' }}
                      />
                      {/* Inner ring */}
                      <circle cx="40" cy="40" r="24" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-sm font-bold tabular-nums ${verified ? 'text-emerald-400' : 'text-indigo-400'}`}>{conf}%</span>
                      <span className="text-[6px] text-slate-700 tracking-widest mt-0.5">CONF</span>
                    </div>
                  </div>
                </div>

                {/* Signal waveform */}
                <div className="text-[8px] text-slate-700 tracking-[0.25em] uppercase mb-2 flex items-center gap-2">
                  <div className="w-3 h-px bg-indigo-500/40" />
                  SIGNAL
                </div>
                <div className="flex items-end gap-0.5 h-10 mb-4">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const active = progress > i * 5;
                    const h = [35, 55, 28, 72, 45, 88, 38, 65, 50, 80, 42, 70, 32, 60, 48, 85, 40, 68, 55, 78][i];
                    return (
                      <div key={i} className="flex-1 rounded-sm transition-all duration-500"
                        style={{
                          height: `${active ? h : 8}%`,
                          background: active
                            ? `rgba(${i % 3 === 0 ? '99,102,241' : i % 3 === 1 ? '124,58,237' : '129,140,248'},${active ? 0.75 : 0.15})`
                            : 'rgba(255,255,255,0.04)',
                        }}
                      />
                    );
                  })}
                </div>

                {/* Session info */}
                <div className="text-[8px] text-slate-700 tracking-[0.25em] uppercase mb-2 flex items-center gap-2">
                  <div className="w-3 h-px bg-indigo-500/40" />
                  SESSION
                </div>
                {[
                  { k: 'PROTOCOL', v: 'TLS 1.3' },
                  { k: 'CIPHER', v: 'AES-256' },
                  { k: 'REGION', v: 'IN-WEST' },
                  { k: 'SESSION', v: 'LIVE' },
                  { k: 'STATUS', v: verified ? 'PASS ✓' : 'PROC…', hi: verified },
                ].map(({ k, v, hi }) => (
                  <div key={k} className="flex justify-between items-baseline py-1 border-b border-white/[0.03]">
                    <span className="text-[7.5px] text-slate-700 tracking-widest">{k}</span>
                    <span className={`text-[9px] ${hi ? 'text-emerald-400' : 'text-indigo-400/70'}`}>{v}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              BOTTOM BAR
          ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.05]"
            style={{ background: 'rgba(1,3,11,0.7)', backdropFilter: 'blur(16px)' }}
          >
            <div className="max-w-2xl mx-auto px-5 sm:px-8 py-4">
              {/* Phase row */}
              <div className="flex items-start justify-between mb-3 gap-4">
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div key={phaseIdx}
                      initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`text-xs font-semibold tracking-wide truncate ${verified ? 'text-emerald-400' : 'text-white'}`}>
                        {phase.label}
                      </div>
                      <div className="text-[9px] text-slate-600 mt-0.5 tracking-wide truncate"
                        style={{ fontFamily: "'Space Mono','Courier New',monospace" }}>
                        {phase.sub}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex-shrink-0 text-right" style={{ fontFamily: "'Space Mono','Courier New',monospace" }}>
                  <div className={`text-sm font-bold tabular-nums ${verified ? 'text-emerald-400' : 'text-indigo-400'}`}>
                    {Math.round(progress).toString().padStart(3, '0')}
                    <span className="text-[10px] text-slate-600">%</span>
                  </div>
                </div>
              </div>

              {/* Progress track */}
              <div className="relative h-[2px] rounded-full overflow-hidden mb-2.5"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: verified
                      ? 'linear-gradient(90deg,#059669,#34d399,#6ee7b7)'
                      : 'linear-gradient(90deg,#4338ca,#6366f1,#818cf8,#a78bfa)',
                    transition: 'width 0.06s linear, background 0.8s',
                    boxShadow: verified ? '0 0 8px rgba(52,211,153,0.5)' : '0 0 8px rgba(99,102,241,0.5)',
                  }}
                />
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.10] to-transparent animate-[shimmer_2.2s_infinite]" />
              </div>

              {/* Phase dots + labels */}
              <div className="flex justify-between">
                {SEQ.map((s, i) => {
                  const done = progress >= s.t * 100;
                  const active = phaseIdx === i;
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className={`rounded-full transition-all duration-500 ${done && i >= 4
                          ? 'w-2 h-2 bg-emerald-400' + (active ? ' shadow-[0_0_8px_rgba(52,211,153,0.9)]' : '')
                          : done
                            ? 'w-1.5 h-1.5 bg-indigo-400'
                            : active
                              ? 'w-1.5 h-1.5 bg-indigo-400/50 animate-pulse'
                              : 'w-1 h-1 bg-white/[0.08]'
                        }`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Ambient particles ── */}
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: i % 5 === 0 ? 2 : 1, height: i % 5 === 0 ? 2 : 1,
                left: `${4 + (i * 5.8) % 92}%`, top: `${6 + (i * 6.1) % 88}%`,
                background: ['rgba(99,102,241,0.35)', 'rgba(167,139,250,0.28)', 'rgba(56,189,248,0.22)'][i % 3],
              }}
              animate={{ y: [0, -18, 0], opacity: [0.06, 0.45, 0.06] }}
              transition={{ duration: 3 + (i % 7) * 0.5, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
