'use client';

import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Platform Revolution',
    client: 'RetailTech Solutions',
    challenge: 'Legacy system causing 40% cart abandonment, slow load times, and poor mobile experience.',
    solution: 'Built modern React-based platform with Next.js, integrated payment systems, and mobile-first design.',
    results: [
      '65% reduction in cart abandonment',
      '3x faster page load times',
      '250% increase in mobile conversions'
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    tags: ['Next.js', 'E-commerce', 'Mobile-First']
  },
  {
    title: 'Enterprise ERP Transformation',
    client: 'ManufacturingPro Inc.',
    challenge: 'Disconnected systems, manual processes, and lack of real-time visibility across operations.',
    solution: 'Custom ERP solution with real-time analytics, automated workflows, and integrated modules.',
    results: [
      '80% reduction in manual processes',
      '45% improvement in efficiency',
      'Real-time visibility across all operations'
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    tags: ['ERP', 'Enterprise', 'Automation']
  },
  {
    title: 'Mobile Banking Revolution',
    client: 'FinanceFirst Bank',
    challenge: 'Outdated mobile app with poor UX, security concerns, and limited functionality.',
    solution: 'Complete mobile app redesign with biometric security, AI-powered insights, and seamless UX.',
    results: [
      '400% increase in mobile usage',
      '95% user satisfaction score',
      'Zero security incidents post-launch'
    ],
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    tags: ['Mobile App', 'FinTech', 'Security']
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

                <Button 
                  variant="ghost" 
                  className="mt-6 p-0 text-teal-500 hover:text-teal-600 group-hover:translate-x-1 transition-all duration-200"
                >
                  View Case Study
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}