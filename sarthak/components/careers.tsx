import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Heart, Zap, Users, Trophy, IndianRupee, Timer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { JobApplicationForm } from './form';

const jobOpenings = [
  {
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Bhavnagar, Gujarat / Remote',
    type: 'Full-time',
    salary: '2 LPA - 4 LPA + Incentives',
    experience: '0-2 years',
    description: 'Drive business growth by generating leads, building client relationships, and expanding our market presence.',
    requirements: [
      'Excellent communication and negotiation skills',
      'Lead generation and client acquisition',
      'CRM management and reporting',
      'Target-driven mindset'
    ]
  },
  {
    title: 'Flutter Developer',
    department: 'Engineering',
    location: 'Bhavnagar, Gujarat / Remote',
    type: 'Full-time',
    salary: '3 LPA - 6 LPA',
    experience: '1-3 years',
    description: 'Join our mobile development team to build innovative cross-platform applications using Flutter and Firebase.',
    requirements: [
      'Flutter/Dart proficiency',
      'Firebase integration',
      'UI/UX implementation',
      'Problem-solving skills'
    ]
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Bhavnagar, Gujarat / Remote',
    type: 'Full-time',
    salary: '4 LPA - 8 LPA',
    experience: '2-4 years',
    description: 'Work on end-to-end solutions including frontend, backend, and database integration for our ERP and business solutions.',
    requirements: [
      'MERN/MEAN stack',
      'Database design',
      'API development',
      'ERP system knowledge'
    ]
  },
  {
    title: 'Digital Marketing',
    department: 'Marketing',
    location: 'Bhavnagar, Gujarat',
    type: 'Full Time',
    salary: '15k - 20k ',
    experience: '2-3 years',
    description: 'Learn and contribute to our digital marketing efforts including SEO, social media, and content marketing.',
    requirements: [
      'Digital marketing basics',
      'Content creation',
      'Social media knowledge',
      'Analytical mindset'
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance plus wellness programs'
  },
  {
    icon: Zap,
    title: 'Growth & Learning',
    description: 'Professional development budget, conference attendance, and skill-building opportunities'
  },
  {
    icon: Users,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote work options, and generous PTO policy'
  },
  {
    icon: Trophy,
    title: 'Competitive Package',
    description: 'Competitive salary, equity options, and performance-based bonuses'
  }
];

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <section id="careers" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500">Team</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Be part of a dynamic team that&rsquo;s shaping the future of technology. We&rsquo;re looking
            for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-teal-500 to-indigo-600 p-12 rounded-3xl text-white text-center mb-12 shadow-lg shadow-teal-500/30">
            <h3 className="text-3xl font-bold mb-6">Why Work With Us?</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              At Bytesflare Infotech, we believe in fostering innovation, collaboration, and personal growth. 
              Join a team where your ideas matter and your career can flourish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-slate-900/70 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow shadow-cyan-500/30">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Current Openings</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-cyan-500/30 transition-all duration-300 border border-white/10 bg-slate-900/70">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                      <span className="bg-white/10 text-teal-200 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{job.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Timer className="w-4 h-4 mr-2" />
                      {job.experience}
                    </div>
                     <div className="flex items-center text-sm text-slate-400">
                      <IndianRupee className="w-4 h-4 mr-2" />
                      {job.salary}
                    </div>
                  
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-slate-200 mb-2">Key Requirements:</h5>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white group"
                    onClick={() => setSelectedJob(job.title)}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/70 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Don&rsquo;t See the Right Role?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              We&rsquo;re always looking for talented individuals to join our team. Send us your resume
              and let us know how you&rsquo;d like to contribute to our mission.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => window.open("mailto:byteflare.hr@gmail.com")}
            >
              Send Your Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm 
          jobTitle={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </section>
  );
}
