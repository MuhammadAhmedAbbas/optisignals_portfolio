import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Clock, Tag } from 'lucide-react';

export default function Blogs() {
  const blogs = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Explore the upcoming trends and technologies shaping the future of web development in 2026 and beyond.',
      date: 'April 10, 2026',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Mastering React Performance',
      excerpt: 'A comprehensive guide to optimizing your React applications for speed and seamless user experiences.',
      date: 'April 5, 2026',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Building Scalable Architectures',
      excerpt: 'Learn the core principles for designing backend architectures that handle immense user growth effortlessly.',
      date: 'March 28, 2026',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#020617]">
      <Section title="Our Blog" subtitle="Insights, engineering deep dives, and company updates.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Card key={idx} to={`/blog/${idx}`} delay={idx * 0.1} interactiveGlow={true} className="h-full flex flex-col p-6 cursor-pointer">
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-800/50 mb-6 relative group">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                <span className="flex items-center gap-1 text-blue-400"><Tag size={14} />{blog.category}</span>
                <span className="flex items-center gap-1"><Clock size={14} />{blog.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{blog.title}</h3>
              <p className="text-slate-400 leading-relaxed flex-grow">{blog.excerpt}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
