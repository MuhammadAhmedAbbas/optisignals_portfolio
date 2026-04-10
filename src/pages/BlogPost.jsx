import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { Clock, Tag, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  
  // Minimal fallback data
  return (
    <div className="pt-24 min-h-screen bg-[#020617]">
      <Section className="!pt-8">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium mb-12 group transition-colors">
          <ArrowLeft size={18} className="transform transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>
        
        <div className="max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">
            <span className="flex items-center gap-1 text-blue-400"><Tag size={16} />Concept</span>
            <span className="flex items-center gap-1"><Clock size={16} />April 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Building The Next Generation of Digital Experiences
          </h1>
          
          <div className="rounded-[2.5rem] overflow-hidden aspect-video bg-slate-800/50 mb-12 border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
              alt="Blog Header" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="text-lg text-slate-300 leading-relaxed space-y-6">
            <p className="text-xl text-white font-medium mb-8">
              Explore the upcoming trends and technologies shaping the future of engineering in 2026 and beyond. This is an era of unparalleled innovation where performance and scalable architecture take absolute priority.
            </p>
            <p>
              In the fast-paced world of technology, staying ahead means constantly evolving. As artificial intelligence integrates deeper into our developer toolchains, we are seeing a dramatic shift in how software engineering teams collaborate and ship products to market.
            </p>
            <h3 className="text-2xl text-white font-bold mt-12 mb-4">Embracing the Future</h3>
            <p>
              Autonomous coding practices are rapidly optimizing day-to-day operations. Instead of writing boilerplate code, developers are transitioning into product engineers—architects who design systems while intelligent assistants handle the heavy lifting.
            </p>
            <p>
              Furthermore, the demand for lightning-fast, highly responsive web interfaces continues to rise. Users expect instantaneous feedback and seamless transitions. Building applications that meet these expectations requires a solid foundation in both frontend methodologies and robust backend infrastructure.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
