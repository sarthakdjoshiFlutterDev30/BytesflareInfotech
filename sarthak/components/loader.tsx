'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

/* ─── Timing ───────────────────────────────────────────────── */
const PHASES = [
  { label: 'Initialising biometric engine…',  pct: 0.00 },
  { label: 'Mapping facial geometry…',         pct: 0.18 },
  { label: 'Detecting 468 landmarks…',         pct: 0.36 },
  { label: 'Running liveness detection…',      pct: 0.52 },
  { label: 'Identity verified  ✓',             pct: 0.64 },
  { label: 'Encrypting & uploading to cloud…', pct: 0.74 },
  { label: 'Syncing attendance record…',       pct: 0.86 },
  { label: 'Dashboard ready.',                 pct: 0.95 },
];
const TOTAL_MS = 7200;

/* ─── Helpers ──────────────────────────────────────────────── */
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function clamp01(v: number) { return Math.max(0, Math.min(1, v)); }
function invlerp(a: number, b: number, v: number) { return clamp01((v - a) / (b - a)); }

/* ─── Build the Three.js scene ─────────────────────────────── */
function buildScene(canvas: HTMLCanvasElement) {
  const W = canvas.clientWidth  || window.innerWidth;
  const H = canvas.clientHeight || window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H, false);
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, W / H, 0.1, 200);
  camera.position.set(0, 0.1, 5.2);

  /* ── Lights ── */
  scene.add(new THREE.AmbientLight(0x1a1040, 1.2));

  const keyLight = new THREE.PointLight(0x818cf8, 4, 18);
  keyLight.position.set(0, 2.5, 4);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0xa78bfa, 2, 14);
  fillLight.position.set(-3, 0, 2);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0x38bdf8, 1.5, 12);
  rimLight.position.set(3, -1, 1);
  scene.add(rimLight);

  const verifyLight = new THREE.PointLight(0x34d399, 0, 14);
  verifyLight.position.set(0, 0, 3.5);
  scene.add(verifyLight);

  /* ── Face mesh — higher-res ellipsoid ── */
  const faceGeo = new THREE.SphereGeometry(1.18, 48, 36);
  faceGeo.scale(0.78, 1.08, 0.68);

  // Solid dark face
  const solidMat = new THREE.MeshPhongMaterial({
    color: 0x060818,
    emissive: 0x0a0d2a,
    transparent: true,
    opacity: 0.92,
    shininess: 80,
    specular: 0x4f46e5,
  });
  const solidMesh = new THREE.Mesh(faceGeo.clone(), solidMat);
  solidMesh.scale.set(0.97, 0.97, 0.97);
  scene.add(solidMesh);

  // Wireframe overlay
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x4f46e5,
    wireframe: true,
    transparent: true,
    opacity: 0.0,
  });
  const wireMesh = new THREE.Mesh(faceGeo.clone(), wireMat);
  scene.add(wireMesh);

  /* ── Scan plane (sweeps top→bottom with gradient glow) ── */
  // Main line
  const scanLineMat = new THREE.MeshBasicMaterial({
    color: 0x818cf8,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  const scanLine = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.006), scanLineMat);
  scanLine.position.set(0, 1.35, 0.72);
  scene.add(scanLine);

  // Wide soft glow below line
  const scanGlowMat = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  const scanGlow = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.55), scanGlowMat);
  scanGlow.position.copy(scanLine.position);
  scene.add(scanGlow);

  // Thin bright leading edge
  const scanEdgeMat = new THREE.MeshBasicMaterial({
    color: 0xe0e7ff,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  const scanEdge = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.002), scanEdgeMat);
  scanEdge.position.copy(scanLine.position);
  scene.add(scanEdge);

  /* ── Landmark dots — anatomically clustered ── */
  const landmarkGroups = [
    // Eyes (more dense)
    ...Array.from({ length: 28 }, (_, i) => {
      const side = i < 14 ? -1 : 1;
      const a = (i % 14) / 14 * Math.PI * 2;
      return { x: side * 0.38 + Math.cos(a) * 0.18, y: 0.22 + Math.sin(a) * 0.09, z: 0.88 };
    }),
    // Nose bridge
    ...Array.from({ length: 8 }, (_, i) => ({
      x: (Math.random() - 0.5) * 0.18,
      y: lerp(0.18, -0.18, i / 7),
      z: 0.9 + Math.random() * 0.08,
    })),
    // Mouth
    ...Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2;
      return { x: Math.cos(a) * 0.28, y: -0.38 + Math.sin(a) * 0.1, z: 0.86 };
    }),
    // Jawline
    ...Array.from({ length: 20 }, (_, i) => {
      const a = lerp(-0.7, Math.PI + 0.7, i / 19);
      return { x: Math.cos(a) * 0.82, y: -0.55 + Math.sin(a) * 0.35, z: 0.55 };
    }),
    // Forehead
    ...Array.from({ length: 12 }, (_, i) => ({
      x: lerp(-0.55, 0.55, i / 11),
      y: 0.72 + Math.random() * 0.2,
      z: 0.72 + Math.random() * 0.1,
    })),
    // Cheeks
    ...Array.from({ length: 10 }, (_, i) => {
      const side = i < 5 ? -1 : 1;
      return { x: side * (0.55 + Math.random() * 0.1), y: -0.05 + Math.random() * 0.2, z: 0.7 };
    }),
  ];

  const lmPositions = new Float32Array(landmarkGroups.length * 3);
  landmarkGroups.forEach((p, i) => {
    lmPositions[i * 3]     = p.x;
    lmPositions[i * 3 + 1] = p.y;
    lmPositions[i * 3 + 2] = p.z;
  });
  const lmGeo = new THREE.BufferGeometry();
  lmGeo.setAttribute('position', new THREE.BufferAttribute(lmPositions, 3));
  const lmMat = new THREE.PointsMaterial({
    color: 0xc7d2fe,
    size: 0.028,
    transparent: true,
    opacity: 0,
    sizeAttenuation: true,
  });
  const landmarks = new THREE.Points(lmGeo, lmMat);
  scene.add(landmarks);

  /* ── Landmark connection lines ── */
  const connPts: THREE.Vector3[] = [];
  // Eye outlines
  for (let e = 0; e < 2; e++) {
    const base = e * 14;
    for (let i = 0; i < 14; i++) {
      const a = landmarkGroups[base + i];
      const b = landmarkGroups[base + (i + 1) % 14];
      connPts.push(new THREE.Vector3(a.x, a.y, a.z));
      connPts.push(new THREE.Vector3(b.x, b.y, b.z));
    }
  }
  // Mouth outline
  for (let i = 28 + 8; i < 28 + 8 + 16; i++) {
    const a = landmarkGroups[i];
    const b = landmarkGroups[28 + 8 + (i - 28 - 8 + 1) % 16];
    connPts.push(new THREE.Vector3(a.x, a.y, a.z));
    connPts.push(new THREE.Vector3(b.x, b.y, b.z));
  }
  // Jawline
  for (let i = 28 + 8 + 16; i < 28 + 8 + 16 + 19; i++) {
    const a = landmarkGroups[i];
    const b = landmarkGroups[i + 1];
    connPts.push(new THREE.Vector3(a.x, a.y, a.z));
    connPts.push(new THREE.Vector3(b.x, b.y, b.z));
  }
  const connGeo = new THREE.BufferGeometry().setFromPoints(connPts);
  const connMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0 });
  const connLines = new THREE.LineSegments(connGeo, connMat);
  scene.add(connLines);

  /* ── Depth rings (concentric, tilted) ── */
  const rings: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial }[] = [];
  const ringRadii = [1.42, 1.62, 1.85, 2.12];
  const ringTilts = [0, 0.18, -0.12, 0.28];
  ringRadii.forEach((r, i) => {
    const mat = new THREE.MeshBasicMaterial({ color: i < 2 ? 0x6366f1 : 0xa78bfa, transparent: true, opacity: 0 });
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, 0.006 - i * 0.001, 6, 100), mat);
    mesh.rotation.x = ringTilts[i];
    mesh.rotation.y = i * 0.15;
    scene.add(mesh);
    rings.push({ mesh, mat });
  });

  /* ── Rotating arc (biometric scan indicator) ── */
  const arcCurve = new THREE.EllipseCurve(0, 0, 1.52, 1.52, 0, Math.PI * 1.6, false, 0);
  const arcPts = arcCurve.getPoints(80);
  const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPts.map(p => new THREE.Vector3(p.x, p.y, 0)));
  const arcMat = new THREE.LineBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0 });
  const arcLine = new THREE.Line(arcGeo, arcMat);
  scene.add(arcLine);

  /* ── Corner brackets (HUD) ── */
  const bracketMat = new THREE.LineBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0 });
  function makeBracket(x: number, y: number, sx: number, sy: number, z = 0.95) {
    const L = 0.38;
    const pts = [
      new THREE.Vector3(x, y - sy * L, z),
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x + sx * L, y, z),
    ];
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), bracketMat);
  }
  const brackets = [
    makeBracket(-1.32,  1.45,  1, -1),
    makeBracket( 1.32,  1.45, -1, -1),
    makeBracket(-1.32, -1.45,  1,  1),
    makeBracket( 1.32, -1.45, -1,  1),
  ];
  brackets.forEach(b => scene.add(b));

  /* ── Tick marks on outer ring ── */
  const tickMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0 });
  const tickLines: THREE.Line[] = [];
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    const r0 = 1.88, r1 = i % 3 === 0 ? 1.98 : 1.93;
    const pts = [
      new THREE.Vector3(Math.cos(a) * r0, Math.sin(a) * r0, 0),
      new THREE.Vector3(Math.cos(a) * r1, Math.sin(a) * r1, 0),
    ];
    const tl = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), tickMat);
    scene.add(tl);
    tickLines.push(tl);
  }

  /* ── Data stream particles (fly upward to cloud) ── */
  const PART = 180;
  const partPos  = new Float32Array(PART * 3);
  const partVel  = new Float32Array(PART * 3);
  const partLife = new Float32Array(PART);
  for (let i = 0; i < PART; i++) {
    partPos[i * 3]     = (Math.random() - 0.5) * 2.2;
    partPos[i * 3 + 1] = lerp(-1.6, 1.6, Math.random());
    partPos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    partVel[i * 3]     = (Math.random() - 0.5) * 0.006;
    partVel[i * 3 + 1] = 0.016 + Math.random() * 0.022;
    partVel[i * 3 + 2] = 0;
    partLife[i]        = Math.random();
  }
  const partGeo = new THREE.BufferGeometry();
  partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
  const partMat = new THREE.PointsMaterial({ color: 0x818cf8, size: 0.022, transparent: true, opacity: 0, sizeAttenuation: true });
  const partMesh = new THREE.Points(partGeo, partMat);
  scene.add(partMesh);

  /* ── Dashboard bars (appear at end) ── */
  const barGroup = new THREE.Group();
  barGroup.position.set(0, -1.9, 0.2);
  const barData = [0.55, 0.82, 0.38, 0.91, 0.67, 0.74, 0.48, 0.88];
  const barMeshes: { mesh: THREE.Mesh; mat: THREE.MeshPhongMaterial; targetH: number }[] = [];
  barData.forEach((h, i) => {
    const mat = new THREE.MeshPhongMaterial({
      color: i % 2 === 0 ? 0x6366f1 : 0xa78bfa,
      emissive: i % 2 === 0 ? 0x312e81 : 0x4c1d95,
      transparent: true,
      opacity: 0,
      shininess: 60,
    });
    const geo = new THREE.BoxGeometry(0.12, 0.001, 0.08);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(lerp(-0.7, 0.7, i / 7), 0, 0);
    barGroup.add(mesh);
    barMeshes.push({ mesh, mat, targetH: h * 0.6 });
  });
  scene.add(barGroup);

  return {
    renderer, scene, camera,
    solidMesh, solidMat,
    wireMesh, wireMat,
    scanLine, scanLineMat,
    scanGlow, scanGlowMat,
    scanEdge, scanEdgeMat,
    landmarks, lmMat,
    connLines, connMat,
    rings,
    arcLine, arcMat,
    brackets, bracketMat,
    tickLines, tickMat,
    partMesh, partMat, partPos, partVel, partLife,
    barMeshes, barGroup,
    keyLight, fillLight, rimLight, verifyLight,
  };
}

/* ─── Loader Component ─────────────────────────────────────── */
export function Loader({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phaseIdx, setPhaseIdx]   = useState(0);
  const [progress, setProgress]   = useState(0);
  const [verified, setVerified]   = useState(false);
  const [exiting,  setExiting]    = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = buildScene(canvas);
    const {
      renderer, scene, camera,
      solidMat, wireMat,
      scanLine, scanLineMat,
      scanGlow, scanGlowMat,
      scanEdge, scanEdgeMat,
      lmMat, connMat,
      rings, arcLine, arcMat,
      bracketMat, tickMat,
      partMesh, partMat, partPos, partVel, partLife,
      barMeshes, barGroup,
      keyLight, verifyLight,
    } = ctx;

    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
    onResize();

    let raf = 0;
    const startTime = performance.now();
    let elapsed = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      elapsed = performance.now() - startTime;
      const t = clamp01(elapsed / TOTAL_MS);
      setProgress(t * 100);

      // Phase
      let pi = PHASES.length - 1;
      for (let i = 0; i < PHASES.length - 1; i++) {
        if (t < PHASES[i + 1].pct) { pi = i; break; }
      }
      setPhaseIdx(pi);
      if (pi >= 4) setVerified(true);

      /* ── 1. INTRO: brackets + rings fade in (t 0→0.12) ── */
      const introT = invlerp(0, 0.12, t);
      bracketMat.opacity = lerp(0, 0.75, introT);
      tickMat.opacity    = lerp(0, 0.45, introT);
      rings.forEach(({ mat }, i) => {
        mat.opacity = lerp(0, 0.18 - i * 0.03, introT);
      });

      /* ── 2. WIREFRAME fade in (t 0.05→0.22) ── */
      wireMat.opacity = lerp(0, 0.22, invlerp(0.05, 0.22, t));

      /* ── 3. SCAN LINE sweeps (t 0.10→0.52) ── */
      const scanT = invlerp(0.10, 0.52, t);
      if (scanT > 0 && scanT < 1) {
        const y = lerp(1.35, -1.35, scanT);
        scanLine.position.y = y;
        scanGlow.position.y = y - 0.18;
        scanEdge.position.y = y + 0.003;
        scanLineMat.opacity  = 0.95;
        scanGlowMat.opacity  = lerp(0, 0.09, Math.min(scanT * 4, 1));
        scanEdgeMat.opacity  = 0.6;
        // Landmarks appear as scan passes them
        lmMat.opacity  = lerp(0, 0.95, scanT);
        connMat.opacity = lerp(0, 0.55, Math.max(0, scanT - 0.3) / 0.7);
      } else if (scanT >= 1) {
        scanLineMat.opacity = lerp(0.95, 0, invlerp(0.52, 0.60, t));
        scanGlowMat.opacity = lerp(0.09, 0, invlerp(0.52, 0.60, t));
        scanEdgeMat.opacity = lerp(0.6,  0, invlerp(0.52, 0.60, t));
      }

      /* ── 4. VERIFY flash (t 0.60→0.68) ── */
      const verT = invlerp(0.60, 0.68, t);
      if (verT > 0) {
        const pulse = Math.sin(verT * Math.PI);
        verifyLight.intensity = pulse * 5;
        wireMat.color.setHex(verT > 0.5 ? 0x34d399 : 0x4f46e5);
        wireMat.opacity = lerp(0.22, 0.38, pulse);
        lmMat.color.setHex(verT > 0.5 ? 0x6ee7b7 : 0xc7d2fe);
        connMat.color.setHex(verT > 0.5 ? 0x34d399 : 0x6366f1);
        rings[0].mat.color.setHex(verT > 0.5 ? 0x34d399 : 0x6366f1);
        rings[0].mat.opacity = lerp(0.18, 0.45, pulse);
        keyLight.color.setHex(verT > 0.5 ? 0x34d399 : 0x818cf8);
      }

      /* ── 5. PARTICLES stream up (t 0.65→0.88) ── */
      const partT = invlerp(0.65, 0.88, t);
      if (partT > 0) {
        partMat.opacity = lerp(0, 0.8, Math.min(partT * 4, 1));
        const pos = partMesh.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < 180; i++) {
          partPos[i * 3]     += partVel[i * 3];
          partPos[i * 3 + 1] += partVel[i * 3 + 1];
          partLife[i] += 0.008;
          if (partPos[i * 3 + 1] > 2.8 || partLife[i] > 1) {
            partPos[i * 3]     = (Math.random() - 0.5) * 2.0;
            partPos[i * 3 + 1] = -1.6;
            partPos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
            partLife[i] = 0;
          }
        }
        pos.set(partPos);
        pos.needsUpdate = true;
      }
      if (t > 0.88) partMat.opacity = lerp(0.8, 0, invlerp(0.88, 0.96, t));

      /* ── 6. DASHBOARD bars grow (t 0.84→1.0) ── */
      const dashT = invlerp(0.84, 1.0, t);
      if (dashT > 0) {
        barMeshes.forEach(({ mesh, mat, targetH }, i) => {
          const bt = clamp01((dashT - i * 0.06) * 2.5);
          const h = lerp(0.001, targetH, bt);
          mesh.scale.y = h / 0.001;
          mesh.position.y = h / 2;
          mat.opacity = lerp(0, 0.85, bt);
        });
        // Fade face out
        solidMat.opacity = lerp(0.92, 0.15, dashT);
        wireMat.opacity  = lerp(wireMat.opacity, 0, dashT * 0.05);
        lmMat.opacity    = lerp(lmMat.opacity, 0, dashT * 0.06);
        connMat.opacity  = lerp(connMat.opacity, 0, dashT * 0.07);
      }

      /* ── Continuous: arc rotation ── */
      arcLine.rotation.z += 0.022;
      arcMat.opacity = lerp(0, 0.55, invlerp(0.08, 0.25, t)) * (1 - invlerp(0.82, 0.96, t));

      /* ── Continuous: ring rotation ── */
      rings.forEach(({ mesh }, i) => {
        mesh.rotation.z += (i % 2 === 0 ? 0.003 : -0.002) * (1 + i * 0.3);
        mesh.rotation.y += 0.001 * (i + 1);
      });

      /* ── Continuous: subtle face sway ── */
      const sway = elapsed / 1000;
      ctx.wireMesh.rotation.y = Math.sin(sway * 0.3) * 0.12;
      ctx.solidMesh.rotation.y = ctx.wireMesh.rotation.y;
      ctx.wireMesh.rotation.x = Math.sin(sway * 0.2) * 0.04;
      ctx.solidMesh.rotation.x = ctx.wireMesh.rotation.x;

      /* ── Dashboard group subtle float ── */
      barGroup.position.y = -1.9 + Math.sin(sway * 0.5) * 0.015;

      renderer.render(scene, camera);

      if (t >= 1 && !doneRef.current) {
        doneRef.current = true;
        setTimeout(() => { setExiting(true); setTimeout(onDone, 800); }, 400);
      }
    };

    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, [onDone]);

  const phase = PHASES[phaseIdx];

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#02040e] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* ── Deep background ── */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/20 rounded-full blur-[160px]" />
            <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-violet-900/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-blue-900/10 rounded-full blur-[100px]" />
            {/* Fine grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_40%,rgba(2,4,14,0.85)_100%)]" />
          </div>

          {/* ── Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-[0_0_24px_rgba(99,102,241,0.55)]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="font-bold text-white tracking-tight text-sm">
              Bytesflare{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Infotech</span>
            </span>
          </motion.div>

          {/* ── Three.js canvas ── */}
          <div className="relative w-full max-w-[560px] flex-shrink-0">
            <canvas
              ref={canvasRef}
              className="w-full h-[320px] sm:h-[400px] block"
            />

            {/* ── HUD overlay ── */}
            <div className="absolute inset-0 pointer-events-none font-mono">
              {/* Top-left */}
              <motion.div
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-3 left-4 space-y-1"
              >
                <div className="text-[9px] text-indigo-400/50 tracking-[0.2em] uppercase">BytesAttend · v2.4</div>
                <div className="text-[9px] text-slate-600 tracking-widest">BIOMETRIC ENGINE</div>
              </motion.div>

              {/* Top-right status */}
              <motion.div
                initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-3 right-4 text-right space-y-1"
              >
                <div className="text-[9px] tracking-[0.2em] uppercase">
                  {verified
                    ? <span className="text-emerald-400">● IDENTITY VERIFIED</span>
                    : <span className="text-indigo-400/70 animate-pulse">◌ SCANNING</span>
                  }
                </div>
                <div className="text-[9px] text-slate-600 tracking-widest">FACE_ID · {Math.round(progress)}%</div>
              </motion.div>

              {/* Left side data readout */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute left-2 top-1/2 -translate-y-1/2 space-y-2"
              >
                {['DEPTH', 'MESH', 'LIVENESS', 'ENCRYPT'].map((label, i) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className={`w-1 h-1 rounded-full ${progress > (i + 1) * 18 ? 'bg-emerald-400' : 'bg-indigo-500/40'}`} />
                    <span className={`text-[8px] tracking-widest ${progress > (i + 1) * 18 ? 'text-slate-500' : 'text-slate-700'}`}>{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Right side metrics */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 space-y-2 text-right"
              >
                {[
                  { label: 'CONF', value: verified ? '99.8%' : `${Math.min(99, Math.round(progress * 1.4))}%` },
                  { label: 'LATENCY', value: '12ms' },
                  { label: 'NODES', value: '468' },
                  { label: 'SECURE', value: 'AES-256' },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-0.5">
                    <div className="text-[8px] text-slate-700 tracking-widest">{label}</div>
                    <div className="text-[9px] text-indigo-400/70">{value}</div>
                  </div>
                ))}
              </motion.div>

              {/* Bottom scan line indicator */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3"
              >
                <div className="w-16 h-px bg-indigo-500/20" />
                <span className="text-[8px] text-slate-700 tracking-[0.25em] uppercase">
                  {verified ? 'Attendance Logged' : 'Analysing…'}
                </span>
                <div className="w-16 h-px bg-indigo-500/20" />
              </motion.div>
            </div>
          </div>

          {/* ── Status label + progress ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-3 w-full max-w-[360px] px-4 z-20"
          >
            {/* Phase label */}
            <div className="flex items-center justify-between mb-2.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phaseIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`text-xs font-medium tracking-wide ${verified ? 'text-emerald-400' : 'text-slate-400'}`}
                >
                  {phase.label}
                </motion.span>
              </AnimatePresence>
              <span className="text-[10px] font-mono text-slate-600">{Math.round(progress)}%</span>
            </div>

            {/* Progress bar — segmented */}
            <div className="relative w-full h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full transition-colors duration-700 ${verified
                  ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400'
                  : 'bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500'
                }`}
                style={{ width: `${progress}%` }}
              />
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.8s_infinite]" />
            </div>

            {/* Step dots */}
            <div className="flex justify-between mt-2.5 px-0.5">
              {PHASES.map((p, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-full transition-all duration-500 ${
                    progress >= p.pct * 100
                      ? i >= 4 ? 'bg-emerald-400 scale-125' : 'bg-indigo-400'
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Ambient floating dots ── */}
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width:  i % 3 === 0 ? 2 : 1,
                height: i % 3 === 0 ? 2 : 1,
                left: `${6 + (i * 6.8) % 88}%`,
                top:  `${8 + (i * 5.9) % 84}%`,
                background: i % 2 === 0 ? 'rgba(129,140,248,0.3)' : 'rgba(167,139,250,0.25)',
              }}
              animate={{ y: [0, -14, 0], opacity: [0.1, 0.45, 0.1] }}
              transition={{ duration: 3.5 + (i % 5) * 0.7, delay: i * 0.22, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
