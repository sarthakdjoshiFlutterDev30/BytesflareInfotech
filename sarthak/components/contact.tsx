import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, Clock, Send } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

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

    try {
      const response = await fetch("https://bytesflareinfotech-backend.onrender.com/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
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
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Get In <span className="text-slate-900 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info cards */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Let's Start a Conversation</h2>

            <div className="space-y-4 mb-10">
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-slate-900 font-medium">bytesflareinfotechsales@gmail.com</p>
                  <p className="text-slate-600 text-sm">Send us your project requirements</p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Let's Connect</p>
                  <p className="text-slate-900 font-medium">Ready to discuss your project?</p>
                  <p className="text-slate-600 text-sm">Contact us through email or form</p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Business Hours</p>
                  <p className="text-slate-900 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600 text-sm">We're here to help you succeed</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Work With Us?</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-sm bg-amber-500" />Free consultation and project analysis</li>
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-sm bg-amber-500" />Transparent pricing and timeline</li>
                <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-sm bg-amber-500" />Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Send Us a Message</h3>
            {submitted ? (
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-semibold text-teal-600 mb-2">Thanks!</h4>
                <p className="text-slate-600">We received your message and will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number (Optional)</label>
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                    <Select value={formData.projectType} onValueChange={(v) => setFormData((p) => ({ ...p, projectType: v }))}>
                      <SelectTrigger>
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Project Budget</label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData((p) => ({ ...p, budget: v }))}>
                      <SelectTrigger>
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
                  <label className="block text-sm font-medium text-slate-700 mb-1">Project Description *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project requirements..." required rows={6} />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  {isSubmitting ? 'Sending…' : (
                    <span className="inline-flex items-center gap-2"><Send className="h-4 w-4" /> Send Message</span>
                  )}
                </Button>
                {statusMessage && <p className="text-center text-sm mt-2">{statusMessage}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
