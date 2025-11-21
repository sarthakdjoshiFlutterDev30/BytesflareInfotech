import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showSentAnimation, setShowSentAnimation] = useState(false);
  const [showConfirmationAnimation, setShowConfirmationAnimation] = useState(false);
  const sentAnimationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confirmationAnimationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setShowSentAnimation(false);
    if (sentAnimationTimeout.current) {
      clearTimeout(sentAnimationTimeout.current);
      sentAnimationTimeout.current = null;
    }

    try {
      const response = await fetch("https://bytesflareinfotech-backend.onrender.com/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSentAnimation(true);
        sentAnimationTimeout.current = setTimeout(() => {
          setShowSentAnimation(false);
          setSubmitted(true);
        }, 1500);
        setStatusMessage("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(`❌ Failed: ${errorData.message || "Please try again."}`);
        console.log(errorData)
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Failed to send. Please try again.");
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 150);
    }
  }

  useEffect(() => {
    return () => {
      if (sentAnimationTimeout.current) {
        clearTimeout(sentAnimationTimeout.current);
      }
      if (confirmationAnimationTimeout.current) {
        clearTimeout(confirmationAnimationTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (submitted) {
      setShowConfirmationAnimation(true);
      if (confirmationAnimationTimeout.current) {
        clearTimeout(confirmationAnimationTimeout.current);
      }
      confirmationAnimationTimeout.current = setTimeout(() => {
        setShowConfirmationAnimation(false);
      }, 2800);
    }
  }, [submitted]);

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
            Ready to transform your business? Let&rsquo;s discuss your project and create something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info cards */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let&rsquo;s Start a Conversation</h2>

            <div className="space-y-4 mb-10">
              <div className="group p-6 bg-slate-900/70 rounded-xl border border-white/10 shadow-lg flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 opacity-60 blur-md group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative h-12 w-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Mail className="h-6 w-6 text-cyan-200" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">Email</p>
                  <a
                    href="mailto:bytesflareinfotechsales@gmail.com"
                    className="text-white font-medium hover:text-cyan-200 transition-colors"
                  >
                    bytesflareinfotechsales@gmail.com
                  </a>
                  <p className="text-slate-400 text-sm">Send us your project requirements</p>
                </div>
              </div>

              <div className="group p-6 bg-slate-900/70 rounded-xl border border-white/10 shadow-lg flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500 opacity-60 blur-md group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative h-12 w-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Phone className="h-6 w-6 text-amber-200" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">Let&rsquo;s Connect</p>
                  <p className="text-white font-medium">Ready to discuss your project?</p>
                  <p className="text-slate-400 text-sm">
                    Call or WhatsApp us at{' '}
                    <a
                      href="tel:+918799196162"
                      className="text-white font-semibold hover:text-amber-200 transition-colors"
                    >
                      +91-8799196162
                    </a>
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-slate-900/70 rounded-xl border border-white/10 shadow-lg flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400 via-indigo-400 to-blue-500 opacity-60 blur-md group-hover:opacity-80 transition-opacity"></div>
                  <div className="relative h-12 w-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <Clock className="h-6 w-6 text-indigo-200" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">Business Hours</p>
                  <p className="text-white font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-400 text-sm">We&rsquo;re here to help you succeed</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why Work With Us?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-sm bg-amber-500" />Free consultation and project analysis</li>
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-sm bg-amber-500" />Transparent pricing and timeline</li>
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-sm bg-amber-500" />Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Send Us a Message</h3>
            {submitted ? (
              <div className="relative overflow-hidden p-6 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 rounded-2xl border border-white/10 shadow-lg shadow-teal-900/40">
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-teal-500/30 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-12 -left-6 h-20 w-20 rounded-full bg-cyan-500/30 blur-3xl animate-pulse delay-150"></div>
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex items-center justify-center">
                      {showConfirmationAnimation && (
                        <>
                          <span className="absolute inset-0 rounded-full border border-teal-200/50 animate-ping"></span>
                          <span className="absolute inset-1 rounded-full border border-cyan-200/40 animate-pulse"></span>
                        </>
                      )}
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-800/40">
                        <CheckCircle2 className="h-8 w-8 text-white animate-[pop_0.5s_ease-out]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                      <p className="text-slate-300">We received your details and will get back shortly.</p>
                    </div>
                  </div>
                  {showConfirmationAnimation && (
                    <div className="mt-6 flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-300 animate-bounce"></span>
                      <span className="h-2 w-2 rounded-full bg-cyan-300 animate-bounce delay-100"></span>
                      <span className="h-2 w-2 rounded-full bg-blue-300 animate-bounce delay-200"></span>
                      <span className="h-2 w-2 rounded-full bg-teal-300 animate-bounce delay-300"></span>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 bg-slate-900/70 rounded-xl border border-white/10 shadow-lg space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number (Optional)</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email Address *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Project Type</label>
                    <Select value={formData.projectType} onValueChange={(v) => setFormData((p) => ({ ...p, projectType: v }))}>
                      <SelectTrigger className="bg-slate-950 border-white/10 text-white">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mobile App Development">Mobile App</SelectItem>
                        <SelectItem value="Web Development">Web App / Website</SelectItem>
                        <SelectItem value="ERP Solution">ERP / Internal Tools</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Project Budget</label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData((p) => ({ ...p, budget: v }))}>
                      <SelectTrigger className="bg-slate-950 border-white/10 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</SelectItem>
                        <SelectItem value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</SelectItem>
                        <SelectItem value="₹30,000 - ₹40,000">₹30,000 - ₹40,000</SelectItem>
                        <SelectItem value="₹40,000 - ₹50,000">₹40,000 - ₹50,000</SelectItem>
                        <SelectItem value="₹50,000+">₹50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Project Description *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project requirements..." required rows={6} className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500" />
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    disabled={isSubmitting || showSentAnimation}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending…' : (
                      <span className="inline-flex items-center gap-2"><Send className="h-4 w-4" /> Send Message</span>
                    )}
                  </Button>
                  {showSentAnimation && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-12 w-12 rounded-full border border-teal-200/40 animate-ping"></span>
                        <span className="absolute inline-flex h-16 w-16 rounded-full border border-cyan-200/30 animate-pulse"></span>
                        <Send className="relative h-6 w-6 text-white animate-bounce" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-teal-100 tracking-wide animate-pulse">Message Sent!</p>
                    </div>
                  )}
                </div>
                {statusMessage && <p className="text-center text-sm mt-2 text-slate-200">{statusMessage}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
