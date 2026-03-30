import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      <Section title="Get in Touch" subtitle="We're ready to help you scale your business.">
        <div className="max-w-6xl mx-auto">
          
          {/* Contact Info container */}
          <div className="glass rounded-[3rem] p-10 md:p-14 lg:p-20 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            
            {/* Left side: Heading and intro text */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight">Contact Information</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you have technical questions about our enterprise architectures, need specific pricing details, or want to explore an extraordinary digital partnership, our engineering team is standing by to assist you.
              </p>
            </div>
            
            {/* Right side: Contact grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 w-full lg:border-l border-white/10 lg:pl-16 justify-items-center lg:justify-items-start">
              
              {/* Email */}
              <div className="flex flex-col items-start gap-4 text-left group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:-translate-y-2 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Email Us</p>
                  <p className="text-lg font-semibold mt-2 text-slate-200 group-hover:text-white transition-colors">info@optisignal.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start gap-4 text-left group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-emerald-400 group-hover:-translate-y-2 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Call Us</p>
                  <p className="text-lg font-semibold mt-2 text-slate-200 group-hover:text-white transition-colors">+92 XXX XXX XXX</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-start gap-4 text-left group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-emerald-500 group-hover:-translate-y-2 transition-transform duration-300">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium tracking-wide uppercase mb-3">WhatsApp</p>
                  <Button variant="outline" className="!py-2 !px-8 text-sm text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/10 shadow-lg shadow-emerald-900/20">
                    Chat Now
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
