"use client";

import { Shield, Lock, Users, FileText, Clock, Scale, AlertTriangle, CheckCircle2, XCircle, AlertCircle, ArrowLeft, UserCheck, MapPin, Database, Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContentItem {
  description?: string;
  items?: string[];
  important?: string[];
  prohibited?: string[];
  note?: string;
}

interface Section {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: ContentItem[];
}

export default function BytesAttendTermsOfUse() {
  const sections: Section[] = [
    {
      icon: FileText,
      title: "1. Purpose of the Service",
      content: [
        {
          description: "BytesAttend is designed exclusively for:",
          items: [
            "Educational institutions",
            "Universities and colleges",
            "Schools",
            "Authorized academic administrators"
          ],
          note: "The system is intended only for attendance management and institutional record keeping."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "2. Eligibility",
      content: [
        {
          description: "Users must:",
          items: [
            "Be authorized by a registered institution",
            "Use credentials issued by the institution",
            "Use the application only for official academic purposes"
          ],
          important: [
            "Unauthorized access or misuse is strictly prohibited."
          ]
        }
      ]
    },
    {
      icon: Users,
      title: "3. User Responsibilities",
      content: [
        {
          description: "Users agree to:",
          items: [
            "Provide accurate information",
            "Not attempt proxy attendance",
            "Not misuse face verification features",
            "Not share login credentials",
            "Not attempt to hack, reverse engineer, or disrupt the system"
          ],
          note: "Institutions are responsible for managing role-based access (Student / Teacher / HOD / Admin / Super Admin)."
        }
      ]
    },
    {
      icon: Shield,
      title: "4. Face Verification Terms",
      content: [
        {
          items: [
            "The camera will be used only for identity verification during attendance marking",
            "Users must provide real-time, authentic facial input",
            "Attempting spoofing or fraudulent attendance is prohibited",
            "Facial data is used only for attendance authentication"
          ]
        }
      ]
    },
    {
      icon: MapPin,
      title: "5. Geo-Fencing Terms",
      content: [
        {
          items: [
            "Location access is used only during attendance marking",
            "Continuous tracking is not performed",
            "Users must be physically present in the authorized institutional area to mark attendance"
          ]
        }
      ]
    },
    {
      icon: Database,
      title: "6. Data Ownership",
      content: [
        {
          items: [
            "Attendance data belongs to the registered institution",
            "BytesAttend acts as a service provider and data processor",
            "Users cannot claim ownership of institutional attendance records"
          ]
        }
      ]
    },
    {
      icon: Clock,
      title: "7. Subscription & Termination",
      content: [
        {
          description: "Institutions may:",
          items: [
            "Subscribe under agreed pricing plans",
            "Terminate service as per agreement terms"
          ]
        },
        {
          description: "BytesAttend reserves the right to suspend or terminate access if:",
          prohibited: [
            "Terms are violated",
            "Fraudulent activities are detected",
            "Payment obligations are not met"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "8. Intellectual Property",
      content: [
        {
          description: "All rights, title, and interest in BytesAttend, including:",
          items: [
            "Software",
            "Design",
            "Branding",
            "Source code",
            "Features"
          ],
          note: "remain the exclusive property of Bytesflare Infotech (OPC) Private Limited."
        },
        {
          important: [
            "Unauthorized copying, resale, or duplication is prohibited."
          ]
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "9. Limitation of Liability",
      content: [
        {
          description: "BytesAttend provides the service on an \"as-is\" and \"as-available\" basis.",
        },
        {
          description: "We are not liable for:",
          items: [
            "Internet connectivity issues",
            "Device compatibility issues",
            "Institutional misuse of data",
            "Indirect or incidental damages"
          ],
          note: "Our liability shall not exceed the subscription amount paid by the institution."
        }
      ]
    },
    {
      icon: Scale,
      title: "10. Compliance with Laws",
      content: [
        {
          description: "Users and institutions agree to comply with:",
          items: [
            "Applicable educational regulations",
            "Data protection laws",
            "Institutional academic policies"
          ]
        }
      ]
    },
    {
      icon: FileText,
      title: "11. Modifications to Service",
      content: [
        {
          description: "BytesAttend may:",
          items: [
            "Add or remove features",
            "Improve security",
            "Update system functionality"
          ],
          note: "Updates may be required for continued use."
        }
      ]
    },
    {
      icon: Gavel,
      title: "12. Governing Law",
      content: [
        {
          description: "These Terms shall be governed by the laws of India. Any disputes shall be subject to jurisdiction in Gujarat, India."
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 flex items-center justify-center border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <Scale className="w-10 h-10 text-indigo-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Terms of Use
          </h1>
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">BytesAttend</h2>
            <p className="text-lg text-slate-400">Institutional Digital Attendance System</p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-slate-300">Effective Date: 01/01/2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Card className="mb-12 border border-indigo-500/30 bg-slate-900/60 backdrop-blur-sm shadow-[0_0_40px_rgba(99,102,241,0.15)]">
          <CardContent className="p-8 md:p-10">
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                These Terms of Use ("Terms") govern access to and use of the BytesAttend mobile application, 
                web application, and related services ("Service").
              </p>
              <p>
                BytesAttend is developed and operated by{" "}
                <span className="font-semibold text-indigo-300">Bytesflare Infotech (OPC) Private Limited</span>, 
                Bhavnagar, Gujarat, India.
              </p>
            </div>
            <div className="mt-6 p-5 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border-l-4 border-indigo-400 rounded-lg">
              <p className="text-slate-200 font-medium flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>By accessing or using BytesAttend, you agree to these Terms.</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <Card 
              key={idx} 
              className="border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 flex items-center justify-center border border-indigo-500/30 flex-shrink-0">
                    <section.icon className="w-7 h-7 text-indigo-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mt-2">{section.title}</h3>
                </div>

                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx} className="ml-0 md:ml-18 mt-6 space-y-4">
                    {item.description && (
                      <p className="text-slate-300 text-lg">{item.description}</p>
                    )}

                    {item.items && (
                      <ul className="space-y-3">
                        {item.items.map((listItem, listIdx) => (
                          <li key={listIdx} className="flex items-start gap-3 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.important && (
                      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-5 rounded-xl mt-4">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <p className="font-semibold text-amber-300">Important:</p>
                        </div>
                        <ul className="space-y-2 ml-8">
                          {item.important.map((imp, impIdx) => (
                            <li key={impIdx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-amber-400 flex-shrink-0">⚠</span>
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.prohibited && (
                      <div className="bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30 p-5 rounded-xl mt-4">
                        <div className="flex items-start gap-3 mb-3">
                          <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="font-semibold text-red-300">Prohibited Actions:</p>
                        </div>
                        <ul className="space-y-2 ml-8">
                          {item.prohibited.map((prohib, prohibIdx) => (
                            <li key={prohibIdx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-red-400 flex-shrink-0">✗</span>
                              <span>{prohib}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.note && (
                      <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 p-5 rounded-xl mt-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
        <Card className="mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
          <CardContent className="p-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 flex items-center justify-center border border-indigo-500/30 mx-auto mb-6">
              <Scale className="w-8 h-8 text-indigo-300" />
            </div>
            <h3 className="text-3xl font-bold mb-3 text-slate-100">Questions About Terms?</h3>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              Contact us for clarification or support regarding these Terms of Use.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/bytesattend">
                <Button className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 text-white font-semibold px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-transform hover:scale-105">
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
