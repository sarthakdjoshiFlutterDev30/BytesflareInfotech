'use client';

import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "College Management System",
    category: "ERP Solution",
    description: "Comprehensive management system for educational institutions with separate portals for students, teachers, and administrators. Features include attendance tracking, grade management, and real-time communication.",
    technologies: ["Flutter", "Firebase", "Node.js", "React.js"],
    features: ["Student Portal", "Teacher Dashboard", "Admin Panel", "Real-time Analytics"],
    status: "Live Project",
    client: "EduTech Solutions",
    challenge: "Multiple disconnected portals, manual attendance, and grade tracking inefficiencies.",
    solution: "Developed a unified management system with separate student, teacher, and admin portals using Flutter and Firebase.",
    results: [
      "Streamlined attendance and grade management",
      "Real-time notifications for teachers and students",
      "Centralized data storage reducing errors"
    ],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Flutter", "Firebase", "Node.js", "React.js"]
  },
  {
    title: "E-commerce Mobile App",
    category: "Mobile Application",
    description: "Full-featured e-commerce platform with user and admin applications. Includes product catalog, shopping cart, payment integration, and order management system.",
    technologies: ["Flutter", "Firebase", "Stripe API", "Admin Web Portal"],
    features: ["Shopping Cart", "Payment Gateway", "Order Tracking", "Admin Dashboard"],
    status: "Recently Delivered",
    client: "RetailTech Solutions",
    challenge: "Legacy system causing 40% cart abandonment, slow load times, and poor mobile experience.",
    solution: "Built modern React-based platform with Next.js, integrated payment systems, and mobile-first design.",
    results: [
      "65% reduction in cart abandonment",
      "3x faster page load times",
      "250% increase in mobile conversions"
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Next.js", "E-commerce", "Mobile-First"]
  },
  {
    title: "Real-time Chat Application",
    category: "Communication Platform",
    description: "Modern chat application with real-time messaging, video calls, file sharing, and group chat functionality. Built for seamless communication across devices.",
    technologies: ["React Native", "Node.js", "Socket.io", "WebRTC"],
    features: ["Real-time Messaging", "Video Calls", "File Sharing", "Group Chats"],
    status: "In Development",
    client: "ChatCorp Solutions",
    challenge: "Outdated messaging system with poor user engagement and lack of multimedia support.",
    solution: "Developed a real-time chat app with video calls, file sharing, and group chats using React Native and Socket.io.",
    results: [
      "Seamless cross-device messaging",
      "Improved user engagement by 200%",
      "Added video call and file sharing features"
    ],
    image: "https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["React Native", "Node.js", "Socket.io", "WebRTC"]
  },
  {
    title: "Business Analytics Dashboard",
    category: "Web Application",
    description: "Comprehensive analytics dashboard providing real-time business insights, KPI tracking, and data visualization for informed decision-making.",
    technologies: ["React.js", "D3.js", "Node.js", "MongoDB"],
    features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Export Tools"],
    status: "Completed",
    client: "BizInsights Ltd.",
    challenge: "Manual report generation, lack of real-time insights, and fragmented data sources.",
    solution: "Built a React.js dashboard with D3.js visualizations, integrating multiple data sources for real-time insights.",
    results: [
      "Real-time analytics for faster decision making",
      "Automated report generation saving hours of manual work",
      "Interactive data visualizations"
    ],
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["React.js", "D3.js", "Node.js", "MongoDB"]
  },
  {
    title: "Restaurant Management System",
    category: "POS Solution",
    description: "Complete restaurant management solution with POS system, inventory management, and customer relationship management features.",
    technologies: ["Flutter", "Firebase", "Payment APIs", "Web Portal"],
    features: ["POS System", "Inventory Management", "Customer Management", "Sales Analytics"],
    status: "Live Project",
    client: "Foodies Tech",
    challenge: "Manual order processing, inventory tracking errors, and poor customer management.",
    solution: "Developed an integrated POS system with inventory and customer management modules using Flutter and Firebase.",
    results: [
      "Reduced order processing time by 50%",
      "Accurate inventory tracking",
      "Enhanced customer relationship management"
    ],
    image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Flutter", "Firebase", "POS", "Inventory Management"]
  },
  {
    title: "Healthcare Management App",
    category: "Healthcare Solution",
    description: "Digital healthcare platform connecting patients with healthcare providers, featuring appointment scheduling, medical records, and telemedicine capabilities.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Video Call API"],
    features: ["Appointment Booking", "Medical Records", "Telemedicine", "Prescription Management"],
    status: "Recently Delivered",
    client: "HealthConnect",
    challenge: "Inefficient appointment management, fragmented medical records, and limited telemedicine support.",
    solution: "Developed a Flutter-based healthcare app connecting patients and doctors with telemedicine and record management.",
    results: [
      "Simplified appointment scheduling",
      "Centralized medical records",
      "Enabled telemedicine consultations"
    ],
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Flutter", "Node.js", "MongoDB", "Telemedicine"]
  },
  {
    title: "Fintech Mobile Wallet",
    category: "Finance Solution",
    description: "Secure digital wallet for transactions, bill payments, and peer-to-peer transfers with KYC integration.",
    technologies: ["Flutter", "Firebase", "Razorpay", "Node.js"],
    features: ["Wallet Recharge", "KYC Verification", "Bill Payments", "Transaction History"],
    status: "In Development",
    client: "FinanceFirst Bank",
    challenge: "Outdated mobile app with poor UX, security concerns, and limited functionality.",
    solution: "Complete mobile app redesign with biometric security, AI-powered insights, and seamless UX.",
    results: [
      "400% increase in mobile usage",
      "95% user satisfaction score",
      "Zero security incidents post-launch"
    ],
    image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Flutter", "Firebase", "Razorpay", "Security"]
  },
  {
    title: "Travel Booking Platform",
    category: "Travel & Hospitality",
    description: "End-to-end travel booking system with flight, hotel, and activity reservations integrated into one platform.",
    technologies: ["React.js", "MongoDB", "Node.js", "Stripe API"],
    features: ["Flight Booking", "Hotel Reservations", "Activity Packages", "Payment Gateway"],
    status: "Completed",
    client: "TravelMate Inc.",
    challenge: "Fragmented travel booking process causing poor user experience and missed bookings.",
    solution: "Developed an integrated travel platform for flights, hotels, and activities with payment gateway integration.",
    results: [
      "Unified booking experience",
      "Increased bookings by 70%",
      "Seamless payment integration"
    ],
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["React.js", "MongoDB", "Node.js", "Stripe API"]
  },
  {
    title: "Online Learning Platform",
    category: "EdTech Solution",
    description: "Interactive e-learning platform with live classes, recorded lectures, quizzes, and progress tracking for students.",
    technologies: ["Flutter", "Firebase", "Node.js", "WebRTC"],
    features: ["Live Classes", "Recorded Lectures", "Quizzes & Exams", "Student Progress Dashboard"],
    status: "Recently Delivered",
    client: "EduLearn",
    challenge: "Limited interactivity, poor engagement, and lack of performance tracking in existing e-learning systems.",
    solution: "Developed a Flutter platform with live classes, quizzes, and progress tracking to enhance learning experience.",
    results: [
      "Improved student engagement",
      "Real-time progress tracking",
      "Interactive learning experience"
    ],
    image: "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    tags: ["Flutter", "Firebase", "Node.js", "WebRTC"]
  }
];


export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Success <span className="text-teal-500">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital landscape
            and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-teal-600 font-semibold mb-4">
                  {project.client}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Challenge:</h4>
                    <p className="text-slate-600 text-sm">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Solution:</h4>
                    <p className="text-slate-600 text-sm">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-center">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></span>
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