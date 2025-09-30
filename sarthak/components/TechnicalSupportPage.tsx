"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MessageCircle, Clock, CheckCircle, XCircle, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export default function TechnicalSupportPage() {
  return (
    <main className="min-h-screen bg-neutral-50 p-6 sm:p-12">
      <div className="mx-auto max-w-5xl">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Technical Support — <span className="text-indigo-600">Bytesflare Infotech</span></h1>
            <p className="mt-2 text-sm text-neutral-600">Clear, simple support plans to keep your app or website running smoothly.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <a href="mailto:bytesflareinfotechsales@gmail.com" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm">
              <Mail size={16} /> Email Us
            </a>
             </div>
        </motion.header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-indigo-50 p-3">
                <Clock size={20} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Free Support — 1 Year</h3>
                <p className="mt-1 text-sm text-neutral-600">Included after delivery — we'll keep things stable and help you use the product.</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                Fix bugs & errors.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                Usage guidance & walkthroughs.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                Small text / image / content updates.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                Regular maintenance to keep systems running.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-amber-50 p-3">
                <Sparkle size={20} className="text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Paid Support — After 1 Year</h3>
                <p className="mt-1 text-sm text-neutral-600">Continue with monthly or yearly plans. Includes everything in free support plus feature discussions and upgrades.</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                Bug fixes, guidance, and updates (same as free).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                New features, upgrades & priority discussions.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-green-500" />
                Optional SLA & dedicated support hours (on request).
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-rose-50 p-3">
                <XCircle size={20} className="text-rose-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Not Covered (but available)</h3>
                <p className="mt-1 text-sm text-neutral-600">Certain work is outside free support, but we can deliver it at a reasonable cost.</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 text-rose-500" /> New features or modules.
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 text-rose-500" /> Major design overhauls.
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={16} className="mt-1 text-rose-500" /> Third-party integrations (payment gateways, new APIs) — available as paid work.
              </li>
            </ul>
          </article>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">How to Reach Us</h3>
            <p className="mt-2 text-sm text-neutral-600">Email, WhatsApp, or Call — whichever you prefer. Every request is tracked in our ticket system so you can follow progress.</p>

            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:bytesflareinfotechsales@gmail.com" className="inline-flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-2 text-sm">
                <Mail size={18} /> bytesflareinfotechsales@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Response & Resolution</h3>
            <p className="mt-2 text-sm text-neutral-600">We aim to be fast, clear, and realistic about timelines.</p>

            <dl className="mt-4 space-y-3 text-sm text-neutral-700">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-indigo-600" />
                <div>
                  <dt className="font-medium">First reply</dt>
                  <dd>Within 4–6 hours.</dd>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Sparkle size={18} className="text-amber-600" />
                <div>
                  <dt className="font-medium">Issue resolved</dt>
                  <dd>Normally within 24–48 hours (depends on complexity).</dd>
                </div>
              </div>
            </dl>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Support Covers</h3>
          <p className="mt-2 text-sm text-neutral-600">We take care of the essential items needed to keep your product healthy.</p>

          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm text-neutral-700">
            <li className="flex items-start gap-3"><CheckCircle size={16} className="mt-1 text-green-500" /> Bug fixing & troubleshooting</li>
            <li className="flex items-start gap-3"><CheckCircle size={16} className="mt-1 text-green-500" /> Usage guidance</li>
            <li className="flex items-start gap-3"><CheckCircle size={16} className="mt-1 text-green-500" /> Minor content updates</li>
            <li className="flex items-start gap-3"><CheckCircle size={16} className="mt-1 text-green-500" /> Regular maintenance</li>
            <li className="flex items-start gap-3"><CheckCircle size={16} className="mt-1 text-green-500" /> Ticket tracking & status updates</li>
            <li className="flex items-start gap-3"><CheckCircle size={16} className="mt-1 text-green-500" /> Priority for paid plans</li>
          </ul>
        </section>

        <section className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-neutral-600">In short: We provide 1 year of free support to make sure your project is stable. After that, choose a paid plan for ongoing improvements and priority handling.</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700">Contact Support</Link>
          </div>
        </section>

        <footer id="contact" className="mt-12 rounded-2xl border border-neutral-100 bg-white p-6 text-sm shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <strong>Bytesflare Infotech</strong>
              <div className="mt-1 text-neutral-600">Support tracked in our ticket system — you’ll get a ticket ID and status updates for every request.</div>
            </div>

            <div className="flex gap-3">
              <a href="mailto:bytesflareinfotechsales@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-neutral-100 px-4 py-2 text-sm"> <Mail size={16} /> Email</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
