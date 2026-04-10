import React from 'react';
import { Globe, Smartphone, Monitor, ShoppingCart, Shield, Cpu } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Services() {
  const services = [
    { icon: <Globe size={32} className="text-blue-400" />, title: 'Web Development', desc: 'Fast, responsive, modern websites optimized for performance and SEO.' },
    { icon: <Smartphone size={32} className="text-emerald-400" />, title: 'App Development', desc: 'Scalable mobile and web applications built with modern frameworks.' },
    { icon: <Monitor size={32} className="text-purple-400" />, title: 'WordPress Development', desc: 'Easy-to-manage, customizable, and scalable WordPress websites.' },
    { icon: <ShoppingCart size={32} className="text-orange-400" />, title: 'Shopify Development', desc: 'High-converting custom e-commerce stores that scale with your brand.' },
    { icon: <Shield size={32} className="text-red-400" />, title: 'Cybersecurity', desc: 'Comprehensive system and data protection to keep your business secure.' },
    { icon: <Cpu size={32} className="text-teal-400" />, title: 'Full Stack Development', desc: 'End-to-end custom software solutions architecture and development.' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <Section title="Our Services" subtitle="Cutting-edge digital solutions tailored to elevate your business.">
        <div className="flex justify-center mb-12">
          <Button to="/contact" variant="primary" className="px-8 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Get in Touch
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} delay={idx * 0.1} to="/contact" className="h-full">
              <div className="mb-6 bg-[#0F172A] w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner border border-white/5">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
