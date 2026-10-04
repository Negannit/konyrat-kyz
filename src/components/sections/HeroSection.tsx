import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { Utensils, ShieldCheck, Flame, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

export const HeroSection: React.FC = () => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-[#B37D22]/15 via-[#FBE5A2]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* Top Tagline */}
      <div className="w-full text-center z-10">
        <FadeIn delay={0.05} y={-10}>
          <span className="inline-block px-5 py-2 rounded-full border border-[#E6C587]/30 bg-[#E6C587]/5 text-[#E6C587] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium shadow-sm backdrop-blur-sm">
            Дәмді адал ас мекені · Шымкент
          </span>
        </FadeIn>
      </div>

      {/* Centerpiece: Clean Grand Typography without any blocking images */}
      <div className="w-full text-center z-10 my-auto py-8 sm:py-12">
        <FadeIn delay={0.15} y={30}>
          <h1 className="hero-heading font-kanit font-black uppercase tracking-tight leading-none text-[12vw] sm:text-[13.5vw] md:text-[14.5vw] lg:text-[15.5vw] select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            ҚОНЫРАТ ҚЫЗ
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <p className="mt-4 sm:mt-6 text-gray-300 font-light uppercase tracking-widest text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Шымкенттегі авторлық ұлттық асхана және салтанатты дастархан
          </p>
        </FadeIn>

        {/* Feature Pills */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#E6C587]" />
              <span>100% Адал ет</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Шоққа піскен дәм</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>10:00 - 02:00 дейін</span>
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar: Action CTAs */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 z-20 pt-6 border-t border-white/5">
        {/* Left text */}
        <FadeIn delay={0.4} y={20} className="text-center sm:text-left">
          <div className="text-xs text-gray-400 font-light">
            Тапсырыс және бронь:
          </div>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="text-base sm:text-lg font-bold text-white font-kanit hover:text-[#E6C587] transition-colors"
          >
            {SITE_CONFIG.phone}
          </a>
        </FadeIn>

        {/* Right buttons */}
        <FadeIn delay={0.5} y={20} className="flex items-center gap-3 sm:gap-4">
          <LiveProjectButton
            label="Мәзірді көру"
            onClick={scrollToMenu}
            icon={<Utensils className="w-4 h-4 text-[#E6C587]" />}
          />
          <ContactButton
            label="Тапсырыс беру"
            onClick={scrollToMenu}
            variant="gold"
          />
        </FadeIn>
      </div>
    </section>
  );
};
