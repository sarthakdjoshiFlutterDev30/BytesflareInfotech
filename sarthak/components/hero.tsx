'use client';

import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering{' '}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into cutting-edge digital solutions. We craft exceptional web applications, 
            mobile experiences, and enterprise systems that drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
              onClick={() => window.open(
                "https://calendar.google.com/calendar/u/0/r/eventedit?text=Free+Consultation&details=Schedule+your+free+consultation+with+BytesFlare+Infotech.&add=bytesflareinfotechsales@gmail.com&sf=true&output=xml",
                "_blank"
              )}
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/20 text-black hover:bg-white/10 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
            onClick={() => {
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Our Work
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-teal-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 border-2 border-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}