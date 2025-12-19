'use client';

import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "BytesAttend Platform",
    category: "Attendance & Verification SaaS",
    description:
      "A cloud-based attendance and verification platform designed to eliminate proxy attendance and manual tracking through digital-first workflows.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Dashboard UI"],
    features: [
      "QR-based attendance",
      "Session verification",
      "Real-time reports",
      "Role-based access",
    ],
    status: "Live Platform",
    challenge:
      "Manual attendance systems causing inaccuracies, proxy entries, and lack of centralized records.",
    solution:
      "Developed a secure QR-based attendance platform with real-time verification and centralized cloud reporting.",
    results: [
      "Near-zero proxy attendance",
      "Real-time attendance visibility",
      "Centralized and auditable records",
    ],
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["BytesAttend", "SaaS", "Attendance"],
  },
  {
    title: "Digital Operations Platform",
    category: "Enterprise Automation",
    description:
      "A backend-driven operations platform built to manage users, roles, workflows, and data securely at scale.",
    technologies: ["Node.js", "MongoDB", "Cloud APIs"],
    features: [
      "Role-based access",
      "Workflow automation",
      "Secure data storage",
      "Scalable architecture",
    ],
    status: "Active Deployment",
    challenge:
      "Fragmented systems and manual workflows leading to operational inefficiencies.",
    solution:
      "Designed a centralized operations platform with automated workflows and secure access controls.",
    results: [
      "Improved operational efficiency",
      "Reduced manual intervention",
      "Scalable system architecture",
    ],
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Automation", "Cloud", "Scalable"],
  },
  {
    title: "Real-Time Communication Module",
    category: "Platform Capability",
    description:
      "A real-time communication layer enabling instant notifications, messaging, and activity tracking across platforms.",
    technologies: ["WebSockets", "Firebase", "Cloud Messaging"],
    features: [
      "Instant notifications",
      "Activity logs",
      "Live updates",
      "Scalable messaging",
    ],
    status: "Integrated Module",
    challenge:
      "Delayed communication and lack of real-time system feedback.",
    solution:
      "Implemented a real-time messaging and notification layer integrated directly into the platform.",
    results: [
      "Instant system updates",
      "Improved user responsiveness",
      "Higher engagement levels",
    ],
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Realtime", "Messaging", "Cloud"],
  },
  {
    title: "Analytics & Reporting Engine",
    category: "Data & Insights",
    description:
      "A built-in analytics engine providing real-time insights, usage metrics, and operational performance data.",
    technologies: ["Charts", "Cloud Analytics", "Dashboard UI"],
    features: [
      "Live dashboards",
      "Exportable reports",
      "Usage analytics",
      "Performance metrics",
    ],
    status: "Live Feature",
    challenge:
      "Lack of visibility into system usage and operational performance.",
    solution:
      "Built an analytics layer with real-time dashboards and automated reporting.",
    results: [
      "Data-driven decision making",
      "Operational transparency",
      "Faster insights",
    ],
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Analytics", "Insights", "Reports"],
  },
  {
    title: "Security & Identity Layer",
    category: "Platform Security",
    description:
      "A security-first identity and access layer ensuring data protection, authentication, and controlled access.",
    technologies: ["Auth Systems", "Encryption", "Cloud Security"],
    features: [
      "Secure authentication",
      "Role-based permissions",
      "Encrypted data",
      "Audit logs",
    ],
    status: "Core Infrastructure",
    challenge:
      "Unauthorized access risks and lack of traceability.",
    solution:
      "Implemented a robust identity and access management system with full audit logging.",
    results: [
      "Improved platform security",
      "Controlled access",
      "Full traceability",
    ],
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Security", "IAM", "Compliance"],
  },
  {
    title: "Scalable SaaS Infrastructure",
    category: "Cloud Architecture",
    description:
      "A cloud-native infrastructure designed to scale seamlessly with growing users and data.",
    technologies: ["Cloud Hosting", "Serverless", "Monitoring"],
    features: [
      "High availability",
      "Auto-scaling",
      "Monitoring & logs",
      "Disaster recovery",
    ],
    status: "Production Ready",
    challenge:
      "Handling growth without compromising performance or reliability.",
    solution:
      "Designed a cloud-native, scalable SaaS infrastructure with continuous monitoring.",
    results: [
      "99.9% uptime",
      "Reliable performance",
      "Scalable growth",
    ],
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Cloud", "SaaS", "Scalable"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500">Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A growing portfolio of SaaS platforms, core modules, and system capabilities built for
            scale, security, and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-cyan-500/30 transition-all duration-500 border border-white/10 bg-slate-900/70 overflow-hidden backdrop-blur"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2 shadow shadow-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-teal-300 font-semibold mb-4">
                  {project.category}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">Challenge:</h4>
                    <p className="text-slate-300 text-sm">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">Outcome:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="text-slate-300 text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
