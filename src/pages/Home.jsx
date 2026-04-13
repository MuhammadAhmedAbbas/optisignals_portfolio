import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Shield, Globe, Monitor, ShoppingCart, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Component as Hero } from '../components/ui/horizon-hero-section';

// Industry background images
import imgHealthcare from '../assets/industries/healthcare.jpg';
import imgRealestate from '../assets/industries/realestate.jpg';
import imgEcommerce from '../assets/industries/ecommerce.jpg';
import imgEducation from '../assets/industries/education.jpg';
import imgFintech from '../assets/industries/fintech.jpg';
import imgSaas from '../assets/industries/saas.jpg';
import imgTravel from '../assets/industries/travel.jpg';
import imgLogistics from '../assets/industries/logistics.jpg';
function useScrollArrows(ref, count) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    // Determine active card by closest centre
    const children = Array.from(el.children);
    if (!children.length) return;
    const elCentre = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const childCentre = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCentre - elCentre);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ref, update]);

  const scrollBy = useCallback((dir) => {
    ref.current?.scrollBy({ left: dir * 380, behavior: 'smooth' });
  }, [ref]);

  const scrollToIndex = useCallback((i) => {
    const el = ref.current;
    if (!el) return;
    const child = el.children[i];
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior: 'smooth' });
  }, [ref]);

  return { canScrollLeft, canScrollRight, scrollBy, activeIndex, scrollToIndex };
}

export default function Home() {
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const servicesScroll = useScrollArrows(servicesRef, 6);
  const industriesScroll = useScrollArrows(industriesRef, 8);

  const services = [
    { icon: <Globe className="text-blue-400" size={32} />, title: 'Web Development', desc: 'Fast, responsive websites built to scale effortlessly without compromising speed.' },
    { icon: <Smartphone className="text-emerald-400" size={32} />, title: 'App Development', desc: 'Fluid mobile and web apps with seamless, native-feeling user experiences.' },
    { icon: <Monitor className="text-purple-400" size={32} />, title: 'WordPress Systems', desc: 'Customizable and scalable WP setups for maximum speed and SEO dominance.' },
    { icon: <ShoppingCart className="text-orange-400" size={32} />, title: 'Shopify Engines', desc: 'High-converting e-commerce stores with blazing-fast checkout flows.' },
    { icon: <Shield className="text-red-400" size={32} />, title: 'Cybersecurity', desc: 'Ironclad protection with encryption, zero-trust models, and threat monitoring.' },
    { icon: <Cpu className="text-teal-400" size={32} />, title: 'Full Stack Arch', desc: 'End-to-end engineering from database clusters to cloud deployment.' },
  ];

  const industries = [
    { id: 'healthcare', title: 'Healthcare', desc: 'Secure patient data, telehealth platforms, and smart diagnostic dashboards.', span: 'md:col-span-2 md:row-span-2', image: imgHealthcare },
    { id: 'realestate', title: 'Real Estate', desc: 'Virtual tours, predictive property portals, and deep CRM integration.', span: 'md:col-span-1 md:row-span-1', image: imgRealestate },
    { id: 'ecommerce', title: 'E-commerce', desc: 'High-conversion stores with lightning-fast checkout architectures.', span: 'md:col-span-1 md:row-span-1', image: imgEcommerce },
    { id: 'education', title: 'Education', desc: 'Interactive e-learning portals and student performance management.', span: 'md:col-span-2 md:row-span-1', image: imgEducation },
    { id: 'fintech', title: 'FinTech', desc: 'Bank-grade security ledgers, trading platforms, and seamless analytics.', span: 'md:col-span-1 md:row-span-2', image: imgFintech },
    { id: 'logistics', title: 'Logistics', desc: 'Real-time supply chain tracking, automated routing, and fleet insights.', span: 'md:col-span-2 md:row-span-2', image: imgLogistics },
    { id: 'saas', title: 'SaaS', desc: 'Scalable multi-tenant cloud architecture built for hyper-growth startups.', span: 'md:col-span-1 md:row-span-1', image: imgSaas },
    { id: 'travel', title: 'Travel', desc: 'Global booking pipelines and immersive interactive destination previews.', span: 'md:col-span-1 md:row-span-1', image: imgTravel },
  ];

  return (
    <div className="w-full">
      <Hero />


      {/* Services Preview */}
      <div className="relative">
        {/* Soft blend from Hero's solid black background */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />

        {/* Ambient glow decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

        <Section
          title="Our Expertise"
          subtitle="Comprehensive digital solutions tailored for your scale."
          darker
          align="left"
          className="relative z-10 pt-8"
        >
          <div className="flex items-center gap-3 w-full">
            {/* Left Arrow — sits outside the scroll track */}
            <button
              onClick={() => servicesScroll.scrollBy(-1)}
              aria-label="Scroll services left"
              disabled={!servicesScroll.canScrollLeft}
              className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border text-white shadow-lg transition-all duration-300
                ${
                  servicesScroll.canScrollLeft
                    ? 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-blue-500/30 hover:border-blue-400/50 cursor-pointer'
                    : 'opacity-0 pointer-events-none border-transparent'
                }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable cards */}
            <div
              ref={servicesRef}
              className="flex-1 flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar overflow-y-hidden"
            >
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  delay={idx * 0.1}
                  to="/contact"
                  interactiveGlow={true}
                  className="w-[75vw] md:w-[380px] max-w-[380px] h-[280px] shrink-0 snap-center group overflow-hidden"
                >
                  <div className="h-full w-full flex flex-col justify-center group/content">

                    {/* Icon + Heading row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                      <div className="shrink-0 bg-[#0F172A] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-inner border border-white/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] group-hover:scale-105 transition-all duration-500">
                        {React.cloneElement(service.icon, { size: 28 })}
                      </div>
                      {/* Heading */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white origin-left transform transition-all duration-500 group-hover:scale-95 group-hover:text-blue-400 break-words max-w-full">
                        {service.title}
                      </h3>
                    </div>

                    {/* Preview text */}
                    <p className="text-slate-400 text-base leading-relaxed transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:text-slate-300 transform translate-y-2 group-hover:translate-y-0">
                      {service.desc}
                    </p>

                  </div>
                </Card>
              ))}
            </div>

            {/* Right Arrow — sits outside the scroll track */}
            <button
              onClick={() => servicesScroll.scrollBy(1)}
              aria-label="Scroll services right"
              disabled={!servicesScroll.canScrollRight}
              className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border text-white shadow-lg transition-all duration-300
                ${
                  servicesScroll.canScrollRight
                    ? 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-blue-500/30 hover:border-blue-400/50 cursor-pointer'
                    : 'opacity-0 pointer-events-none border-transparent'
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot indicators — services */}
          <div className="flex justify-center items-center gap-2 mt-5 mb-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                onClick={() => servicesScroll.scrollToIndex(i)}
                aria-label={`Go to service ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  servicesScroll.activeIndex === i
                    ? 'w-6 h-2 bg-blue-400'
                    : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4 pb-8 relative z-10 w-full">
            <Button to="/contact" variant="primary" className="px-8 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
              Get in Touch
            </Button>
          </div>
        </Section>
      </div>

      {/* Industries Section */}
      <Section
        title="Industries We Serve"
        subtitle="Pioneering digital transformation and scaling architectures across global sectors."
        align="left"
      >
        <div className="flex items-center gap-3 w-full md:block">
          {/* Left Arrow — mobile only, outside cards */}
          <button
            onClick={() => industriesScroll.scrollBy(-1)}
            aria-label="Scroll industries left"
            disabled={!industriesScroll.canScrollLeft}
            className={`shrink-0 md:hidden flex items-center justify-center w-10 h-10 rounded-full border text-white shadow-lg transition-all duration-300
              ${
                industriesScroll.canScrollLeft
                  ? 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-blue-500/30 hover:border-blue-400/50 cursor-pointer'
                  : 'opacity-0 pointer-events-none border-transparent'
              }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={industriesRef}
            className="flex-1 flex overflow-x-auto gap-4 pb-8 md:grid md:grid-cols-4 md:auto-rows-[220px] snap-x snap-mandatory hide-scrollbar overflow-y-hidden">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden group border border-white/10 shadow-2xl shrink-0 w-[85vw] h-[300px] md:w-auto md:h-auto snap-center ${ind.span}`}
            >
              {/* Fallback pattern while waiting for images */}
              <div className="absolute inset-0 bg-[#0c1322] flex items-center justify-center">
                <span className="text-slate-800 font-bold text-6xl opacity-20">Opti</span>
              </div>

              {/* User Image Layer */}
              <img
                src={ind.image}
                alt={ind.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} // hides broken image icon if image is missing
              />


              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:via-black/70" />

              {/* Text Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-2 transition-transform duration-500 ease-out group-hover:translate-y-[-8px]">
                  {ind.title}
                </h4>
                {/* Description slides up and fades in on hover */}
                <div className="overflow-hidden">
                  <p className="text-slate-300 text-sm leading-relaxed translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Right Arrow — mobile only, outside cards */}
          <button
            onClick={() => industriesScroll.scrollBy(1)}
            aria-label="Scroll industries right"
            disabled={!industriesScroll.canScrollRight}
            className={`shrink-0 md:hidden flex items-center justify-center w-10 h-10 rounded-full border text-white shadow-lg transition-all duration-300
              ${
                industriesScroll.canScrollRight
                  ? 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-blue-500/30 hover:border-blue-400/50 cursor-pointer'
                  : 'opacity-0 pointer-events-none border-transparent'
              }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators — industries (mobile only) */}
        <div className="flex justify-center items-center gap-2 mt-5 mb-2 md:hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <button
              key={i}
              onClick={() => industriesScroll.scrollToIndex(i)}
              aria-label={`Go to industry ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                industriesScroll.activeIndex === i
                  ? 'w-6 h-2 bg-blue-400'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button to="/contact" variant="primary" className="px-8 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Get in Touch
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section darker>
        <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] transition-transform duration-1000 group-hover:scale-150 pointer-events-none" />

          {/* Left Side: Heading */}
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4">
              Ready to transform your business?
            </h2>
          </div>

          {/* Right Side: Text & Button */}
          <div className="md:w-1/2 relative z-10 flex flex-col items-start md:pl-16 md:border-l border-white/10 pt-8 md:pt-0">
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              We specialize in turning complex challenges into elegant, scalable digital engines. Whether you're looking to modernize legacy systems, launch a groundbreaking new platform, or aggressively accelerate your global growth trajectory, our elite engineering team is ready to build something extraordinary together.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-10 py-5 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 w-full md:w-auto text-center">
              Let's Talk
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
