"use client";

import { Shield, Lock, Eye, MapPin, Database, Users, FileText, Clock, Globe, CheckCircle2, XCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContentItem {
  subtitle?: string;
  description?: string;
  items?: string[];
  important?: string[];
  notUsed?: string[];
  note?: string;
}

interface Section {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: ContentItem[];
}

export default function BytesAttendPrivacyPolicy() {
  const sections: Section[] = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "1.1 Personal Information",
          items: [
            "Full Name",
            "Enrollment Number / Employee ID",
            "Course / Department / Semester",
            "Institutional Email (if applicable)",
            "Role (Student / Teacher / HOD / Admin / Super Admin)"
          ]
        },
        {
          subtitle: "1.2 Attendance Information",
          items: [
            "Date & time of attendance marking",
            "Attendance status (Present / Absent / Late)",
            "Session or subject details"
          ]
        },
        {
          subtitle: "1.3 Camera & Face Verification Data",
          description: "BytesAttend may access the device camera to:",
          items: [
            "Capture a facial image during attendance marking",
            "Verify user identity to prevent proxy attendance"
          ],
          important: [
            "Facial images are used strictly for attendance authentication.",
            "No facial data is used for advertising, profiling, or AI training.",
            "Facial data is not sold or shared with third parties."
          ]
        },
        {
          subtitle: "1.4 Location Data",
          description: "BytesAttend may collect GPS location data only at the time of attendance marking to:",
          items: [
            "Verify that the user is within the authorized institutional premises."
          ],
          important: [
            "Location is not tracked continuously.",
            "No background tracking is performed.",
            "Location data is not used for marketing."
          ]
        },
        {
          subtitle: "1.5 Device & Technical Information",
          items: [
            "Device model",
            "Operating system version",
            "App version",
            "IP address (for security and fraud prevention)"
          ]
        }
      ]
    },
    {
      icon: FileText,
      title: "2. How We Use Information",
      content: [
        {
          description: "We use collected information strictly for:",
          items: [
            "Attendance authentication",
            "Identity verification",
            "Preventing proxy attendance",
            "Geo-fencing validation",
            "Generating institutional attendance reports",
            "Academic compliance (e.g., audits, NAAC requirements)",
            "Security monitoring and fraud prevention"
          ],
          notUsed: [
            "Sell personal data",
            "Use data for advertising",
            "Share data with data brokers"
          ]
        }
      ]
    },
    {
      icon: Users,
      title: "3. Data Sharing",
      content: [
        {
          description: "We may share data only:",
          items: [
            "With the registered educational institution using BytesAttend",
            "If required by applicable law or legal authority"
          ],
          note: "We do not share user data with third-party advertisers."
        }
      ]
    },
    {
      icon: Lock,
      title: "4. Data Storage & Security",
      content: [
        {
          description: "BytesAttend uses secure cloud infrastructure and implements:",
          items: [
            "Encrypted data transmission (HTTPS/SSL)",
            "Role-Based Access Control (RBAC)",
            "Secure authentication mechanisms",
            "Access logging and monitoring"
          ],
          note: "Only authorized institutional administrators can access relevant attendance records."
        }
      ]
    },
    {
      icon: Clock,
      title: "5. Data Retention",
      content: [
        {
          description: "Attendance and related records are retained:",
          items: [
            "For the duration of the institution's active subscription",
            "As required by academic or regulatory compliance"
          ],
          note: "Data may be securely deleted upon institutional request."
        }
      ]
    },
    {
      icon: Eye,
      title: "6. User Rights",
      content: [
        {
          description: "Users may:",
          items: [
            "Request access to their attendance records",
            "Request correction of inaccurate information",
            "Request deletion (subject to institutional policy)"
          ],
          note: "Requests should be made through the institution's administrator."
        }
      ]
    },
    {
      icon: Users,
      title: "7. Children's Privacy",
      content: [
        {
          description: "BytesAttend is designed for institutional use. If users are minors, data is processed under the authority and consent of their educational institution."
        }
      ]
    },
    {
      icon: Globe,
      title: "8. International Use",
      content: [
        {
          description: "If BytesAttend is used outside India, data processing will comply with applicable local laws and regulations."
        }
      ]
    },
    {
      icon: FileText,
      title: "9. Changes to This Policy",
      content: [
        {
          description: "We may update this Privacy Policy from time to time. Updated versions will be published on the official website."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-950" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-teal-500/5 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/10 to-fuchsia-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-t from-teal-500/5 to-transparent blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative border-b border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/bytesattend">
            <Button variant="ghost" className="mb-6 text-slate-300 hover:text-white hover:bg-slate-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to BytesAttend
            </Button>
          </Link>
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
              <Shield className="w-10 h-10 text-teal-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">BytesAttend</h2>
            <p className="text-lg text-slate-400">Institutional Digital Attendance System</p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700">
              <Clock className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-slate-300">Effective Date: 01/01/2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Card className="mb-12 border border-teal-500/30 bg-slate-900/60 backdrop-blur-sm shadow-[0_0_40px_rgba(20,184,166,0.15)]">
          <CardContent className="p-8 md:p-10">
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                BytesAttend is a secure digital attendance management system developed and operated by{" "}
                <span className="font-semibold text-teal-300">Bytesflare Infotech (OPC) Private Limited</span>, 
                Bhavnagar, Gujarat, India.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect information when institutions, 
                students, and faculty use the BytesAttend mobile or web application.
              </p>
            </div>
            <div className="mt-6 p-5 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-l-4 border-teal-400 rounded-lg">
              <p className="text-slate-200 font-medium flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>By using BytesAttend, you agree to this Privacy Policy.</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <Card 
              key={idx} 
              className="border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]"
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30 flex-shrink-0">
                    <section.icon className="w-7 h-7 text-teal-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">{section.title}</h3>
                </div>

                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx} className="ml-0 md:ml-18 mt-6 space-y-4">
                    {item.subtitle && (
                      <h4 className="text-xl font-semibold text-teal-300 mb-3">{item.subtitle}</h4>
                    )}
                    
                    {item.description && (
                      <p className="text-slate-300 text-lg">{item.description}</p>
                    )}

                    {item.items && (
                      <ul className="space-y-3">
                        {item.items.map((listItem, listIdx) => (
                          <li key={listIdx} className="flex items-start gap-3 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 flex-shrink-0" />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.important && (
                      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 p-5 rounded-xl mt-4">
                        <div className="flex items-start gap-3 mb-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="font-semibold text-green-300">Important:</p>
                        </div>
                        <ul className="space-y-2 ml-8">
                          {item.important.map((imp, impIdx) => (
                            <li key={impIdx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-green-400 flex-shrink-0">✓</span>
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.notUsed && (
                      <div className="bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30 p-5 rounded-xl mt-4">
                        <div className="flex items-start gap-3 mb-3">
                          <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="font-semibold text-red-300">We do NOT:</p>
                        </div>
                        <ul className="space-y-2 ml-8">
                          {item.notUsed.map((notUse, notUseIdx) => (
                            <li key={notUseIdx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-red-400 flex-shrink-0">✗</span>
                              <span>{notUse}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.note && (
                      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-5 rounded-xl mt-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 italic">{item.note}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <Card className="mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.2)]">
          <CardContent className="p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30 mx-auto mb-6">
              <Shield className="w-8 h-8 text-teal-300" />
            </div>
            <h3 className="text-3xl font-bold mb-3 text-slate-100">Your Privacy Matters</h3>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              BytesAttend is committed to protecting your data and ensuring transparency in our operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/bytesattend">
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(20,184,166,0.35)] transition-transform hover:scale-105">
                  Back to BytesAttend
                </Button>
              </Link>
              <a href="mailto:bytesflareinfotechsales@gmail.com">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 rounded-xl">
                  Contact Us
                </Button>
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-8 pt-6 border-t border-white/10">
              © 2026 Bytesflare Infotech (OPC) Private Limited. All rights reserved.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
