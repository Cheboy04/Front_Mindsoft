'use client';

import { GridMotionBackground } from "@/components/bits/GridMotion";
import { Users, ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export function HeroSection() {
  const heroData = {
    titleA: 'Transformamos',
    titleAccent: 'ideas innovadoras',
    titleB: 'en soluciones digitales',
    subtitle:
      'Somos un equipo apasionado por la tecnología y el diseño.\nCreamos experiencias digitales que impulsan tu negocio al siguiente nivel.',
    cta: {
      team: 'Conoce al equipo',
      projects: 'Ver proyectos',
      contact: 'Trabaja con nosotros',
    },
  };

  const backgroundItems = useMemo(
    () => [
      'Item 1',
      <div key="jsx-1" className="text-white/20">Custom Content</div>,
      'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop',
      'Item 2',
      <div key="jsx-2" className="text-white/20">Custom Content</div>,
      'Item 4',
      <div key="jsx-3" className="text-white/20">Custom Content</div>,
      'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop',
      'Item 5',
      <div key="jsx-4" className="text-white/20">Custom Content</div>,
      'Item 7',
      <div key="jsx-5" className="text-white/20">Custom Content</div>,
      'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop',
      'Item 8',
      <div key="jsx-6" className="text-white/20">Custom Content</div>,
      'Item 10',
      <div key="jsx-7" className="text-white/20">Custom Content</div>,
      'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop',
    ],
    []
  );

  const handleScrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden text-white/92"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 opacity-30">
        <GridMotionBackground items={backgroundItems} gradientColor="black" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h1 className="font-extrabold text-[42px] sm:text-5xl md:text-7xl leading-[1.03] tracking-tight mb-8">
            {heroData.titleA}{' '}
            <span className="text-[#ff4438]">{heroData.titleAccent}</span>
            <br />
            {heroData.titleB}
          </h1>

          {/* Subtítulo */}
          <p className="text-white/87 text-[15px] sm:text-base md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {heroData.subtitle.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < heroData.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
            {/* Botón azul - Conoce al equipo */}
            <Link
              href="/about"
              className="group cursor-target min-w-[260px] sm:min-w-[220px] px-8 py-3.5 rounded-2xl
                bg-gradient-to-br from-[#50A0FF] to-[#2378FF]
                shadow-[0_10px_30px_rgba(20,80,200,0.25)]
                hover:shadow-[0_12px_40px_rgba(20,80,200,0.35)]
                hover:from-[#2378FF] hover:to-[#50A0FF]
                transition-all duration-200
                flex items-center justify-center gap-2
                font-bold text-md"
            >
              <Users className="w-5 h-5" />
              {heroData.cta.team}
            </Link>

            {/* Botón rojo outline - Ver proyectos */}
            <Link
              href="/projects"
              className="group cursor-target min-w-[260px] px-8 py-3.5 rounded-2xl
                border border-[#ff4438] text-[#ff4438]
                hover:bg-[#ff4438] hover:text-white
                transition-all duration-200
                flex items-center justify-center gap-2
                font-bold text-md"
            >
              {heroData.cta.projects}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* CTA secundario */}
          <div className="mt-5">
            <button
              onClick={handleScrollToContact}
              className="cursor-target px-8 py-3.5 rounded-2xl
                bg-white/[0.04] border border-white/[0.14]
                hover:bg-white/[0.06] hover:-translate-y-0.5
                transition-all duration-200
                flex items-center justify-center gap-2 mx-auto
                font-bold text-md"
            >
              <Briefcase className="w-5 h-5" />
              {heroData.cta.contact}
            </button>
          </div>
        </div>
      </div>

      {/* Glow decorativo (rojo) */}
      <div
        className="absolute left-1/2 -bottom-40 -translate-x-1/2 w-[900px] h-[380px] z-[1] pointer-events-none
          bg-[radial-gradient(closest-side,_rgba(255,68,56,0.12),_rgba(0,0,0,0))]
          blur-[18px] opacity-90"
      />
    </section>
  );
}