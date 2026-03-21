'use client';

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock, Send, CheckCircle2, Loader2, MapPin } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [showSentAnimation, setShowSentAnimation] = useState(false);
  const [showConfirmAnim, setShowConfirmAnim] = useState(false);

  const sentTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confirmTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');
    setShowSentAnimation(false);
    if (sentTimeout.current) clearTimeout(sentTimeout.current);

    if (Object.values(form).some((v) => !v.trim())) {
      setStatusMessage('❌ Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://bytesflareinfotech-backend.onrender.com/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setShowSentAnimation(true);
        sentTimeout.current = setTimeout(() => {
          setShowSentAnimation(false);
          setSubmitted(true);
          setForm({ name: '', email: '', phone: '', message: '' });
        }, 1500);
        setStatusMessage('✅ Message sent successfully!');
      } else {
        let msg = 'Please try again.';
        try { const d = await res.json(); msg = d.message || msg; } catch {}
        setStatusMessage(`❌ Failed: ${msg}`);
      }
    } catch {
      setStatusMessage('❌ Network error. Please check your connection.');
    } finally {
      setTimeout(() => setIsSubmitting(false), 150);
    }
  }

  useEffect(() => () => {
    if (sentTimeout.current) clearTimeout(sentTimeout.current);
    if (confirmTimeout.current) clearTimeout(confirmTimeout.current);
  }, []);

  useEffect(() => {
    if (submitted) {
      setShowConfirmAnim(true);
      if (confirmTimeout.current) clearTimeout(confirmTimeout.current);
      confirmTimeout.current = setTimeout(() => setShowConfirmAnim(false), 2800);
    }
  }, [submitted]);

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's talk about{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              BytesAttend
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Request a demo, ask about pricing, or discuss how BytesAttend fits your institution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'bytesflareinfotechsales@gmail.com',
                href: 'mailto:bytesflareinfotechsales@gmail.com',
                sub: 'Send us your requirements',
                color: 'text-teal-400',
              },
              {
                icon: Phone,
                label: 'Phone / WhatsApp',
                value: '+91-8799196162',
                href: 'tel:+918799196162',
                sub: 'Call or WhatsApp us',
                color: 'text-cyan-400',
              },
              {
                icon: Clock,
                label: 'Business Hours',
                value: 'Mon – Fri: 9:00 AM – 6:00 PM',
                href: null,
                sub: 'IST (India Standard Time)',
                color: 'text-blue-400',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Gujarat, India',
                href: null,
                sub: 'Bhavnagar, Gujarat',
                color: 'text-violet-400',
              },
            ].map(({ icon: Icon, label, value, href, sub, color }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-slate-900/60 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
              >
                <div className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-white font-medium hover:text-teal-400 transition-colors text-sm break-all">
                      {value}
                    </a>
                  ) : (
                    <div className="text-white font-medium text-sm">{value}</div>
                  )}
                  <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="relative overflow-hidden p-8 bg-slate-900/60 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                    {showConfirmAnim && (
                      <span className="absolute inset-0 rounded-full border border-teal-400/40 animate-ping" />
                    )}
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">Message Sent</h4>
                    <p className="text-slate-400 text-sm">We'll get back to you shortly.</p>
                  </div>
                </div>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="border border-white/10 bg-transparent text-slate-400 hover:text-white hover:bg-white/5 text-sm"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">Full Name *</label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-slate-950 border-white/10 text-white placeholder:text-slate-600 focus:border-teal-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">Phone *</label>
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="bg-slate-950 border-white/10 text-white placeholder:text-slate-600 focus:border-teal-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-slate-950 border-white/10 text-white placeholder:text-slate-600 focus:border-teal-500/50"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Message *</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your institution and what you need..."
                    required
                    rows={5}
                    className="bg-slate-950 border-white/10 text-white placeholder:text-slate-600 focus:border-teal-500/50 resize-none"
                  />
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    disabled={isSubmitting || showSentAnimation}
                    className="w-full h-12 bg-teal-500 hover:bg-teal-400 text-white font-semibold disabled:opacity-60 transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
                    )}
                  </Button>
                  {showSentAnimation && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 rounded-md backdrop-blur-sm">
                      <Send className="w-6 h-6 text-teal-400 animate-bounce" />
                    </div>
                  )}
                </div>

                {statusMessage && (
                  <div className={`p-3 rounded-lg text-center text-sm font-medium ${statusMessage.includes('❌') ? 'bg-red-500/10 text-red-300 border border-red-500/20' : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'}`}>
                    {statusMessage}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
