'use client';

import Image from 'next/image';
import { Calendar, User, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to progressive web apps and the rise of edge computing.',
    author: 'Sarah Johnson',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    featured: true
  },
  {
    title: 'Building Scalable ERP Solutions: Best Practices',
    excerpt: 'Learn how to design and implement ERP systems that grow with your business while maintaining performance and reliability.',
    author: 'Michael Chen',
    date: '2024-12-10',
    readTime: '12 min read',
    category: 'ERP Solutions',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    title: 'Mobile App Security: Protecting User Data in 2025',
    excerpt: 'Essential security practices for mobile app development, including encryption, authentication, and data protection strategies.',
    author: 'Emily Rodriguez',
    date: '2024-12-05',
    readTime: '10 min read',
    category: 'Mobile Development',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    title: 'API Integration Strategies for Modern Businesses',
    excerpt: 'How to effectively integrate third-party APIs while maintaining system reliability and performance.',
    author: 'David Park',
    date: '2024-11-28',
    readTime: '6 min read',
    category: 'API Integration', 
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    title: 'Cloud Migration: A Complete Guide for Enterprises',
    excerpt: 'Step-by-step approach to migrating your enterprise applications to the cloud with minimal downtime.',
    author: 'Lisa Wang',
    date: '2024-11-20',
    readTime: '15 min read',
    category: 'Cloud Solutions',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  },
  {
    title: 'UX/UI Design Principles for Better Conversions',
    excerpt: 'Design strategies that not only look great but also drive user engagement and business results.',
    author: 'Alex Thompson',
    date: '2024-11-15',
    readTime: '9 min read',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
  }
];

export function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Blog</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital transformation.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-cyan-500/30 transition-all duration-300 border border-white/10 bg-slate-900/60 backdrop-blur">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto min-h-[16rem]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow shadow-cyan-500/30">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-slate-300 mb-4">
                    <span className="bg-white/10 text-teal-200 px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-300 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-slate-200 mr-2" />
                      <span className="text-slate-200 font-medium">{featuredPost.author}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.slice(0, 6).map((post, index) => (
            <Card key={index} className="group hover:shadow-cyan-500/30 transition-all duration-300 border border-white/10 bg-slate-900/70 overflow-hidden backdrop-blur">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/80 text-slate-100 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-xs text-slate-300 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-slate-200 mr-1" />
                    <span className="text-slate-200 text-sm">{post.author}</span>
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