import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PlansPage() {
  const plans = [
    {
      type: "Monthly Plan",
      duration: "1 month",
      cost: 3000,
      includes: [
        "Bug fixing",
        "Minor updates",
        "Guidance",
        "Maintenance",
        "Priority response within 4–6 hours",
      ],
    },
    {
      type: "Quarterly Plan",
      duration: "3 months",
      cost: 8000,
      includes: [
        "Same as monthly plan",
        "Slightly discounted rate",
      ],
    },
    {
      type: "Yearly Plan",
      duration: "12 months",
      cost: 30000,
      includes: [
        "Full support for 1 year",
        "Bug fixing, minor updates, guidance, maintenance",
        "Priority response",
      ],
    },
    {
        type: "2-Year Plan",
        duration: "24 months",
        cost: 55000,
        includes: [
        "Full support for 2 years",
        "Bug fixing, minor updates, guidance, maintenance",
        "Priority response and early feature access",
        ],
        },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 p-6 sm:p-12">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-3xl font-extrabold text-center text-indigo-600"
        >
          Support Plans
        </motion.h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.type} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-neutral-800">{plan.type}</h2>
              <p className="mt-1 text-sm text-neutral-600">Duration: {plan.duration}</p>
              <p className="mt-1 text-sm font-semibold text-indigo-600">Cost: ₹{plan.cost}</p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {plan.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-1 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="mailto:bytesflareinfotechsales@gmail.com"
                className="mt-4 inline-block rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700"
              >
                Contact Sales
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}