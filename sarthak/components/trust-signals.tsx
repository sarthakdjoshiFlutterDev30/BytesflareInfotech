'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const clientLogos = [
  { name: 'TechCorp', url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  { name: 'InnovateLabs', url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  { name: 'GlobalTech', url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  { name: 'DigitalFlow', url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  { name: 'CloudSphere', url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
  { name: 'DataSync', url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
];

const testimonials = [
  {
    quote: "Bytesflare transformed our digital presence completely. Their technical expertise and attention to detail exceeded all expectations.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
    rating: 5,
  },
  {
    quote: "The ERP solution they built for us has revolutionized our operations. Incredible team with exceptional problem-solving skills.",
    author: "Michael Chen",
    position: "CEO, InnovateLabs",
    rating: 5,
  },
  {
    quote: "Outstanding mobile app development. They delivered exactly what we envisioned, on time and within budget.",
    author: "Emily Rodriguez",
    position: "Product Manager, GlobalTech",
    rating: 5,
  },
];

export function TrustSignals() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-center text-slate-600 text-lg font-semibold mb-12">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-24 h-12 bg-slate-200 rounded flex items-center justify-center">
                  <span className="text-slate-500 text-sm font-semibold">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-16">
            What Our <span className="text-teal-500">Clients Say</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div>
                <div className="font-bold text-slate-800 text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-slate-500">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full p-0 border-slate-300 hover:border-teal-500 hover:text-teal-500"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full p-0 border-slate-300 hover:border-teal-500 hover:text-teal-500"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-teal-500' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}