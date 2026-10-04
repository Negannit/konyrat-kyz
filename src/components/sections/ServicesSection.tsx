import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { SERVICES } from '../../data/services';
import { SITE_CONFIG } from '../../data/config';
import { MessageCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center mb-16 sm:mb-20 md:mb-28">
          <span className="text-amber-800 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-2 block">
            Кешенді қызмет көрсету
          </span>
          <h2
            style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
            className="font-kanit font-black uppercase text-[#0C0C0C] leading-none tracking-tight"
          >
            ҚЫЗМЕТТЕР
          </h2>
        </FadeIn>

        {/* 01-05 Services List */}
        <div className="divide-y divide-black/15">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={20}>
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 group hover:bg-neutral-50/80 transition-colors duration-300 rounded-2xl px-4 sm:px-6">
                {/* Left Number */}
                <span
                  style={{ fontSize: 'clamp(3rem, 9vw, 130px)' }}
                  className="font-kanit font-black text-[#0C0C0C] leading-none select-none tracking-tighter opacity-90 group-hover:text-amber-700 transition-colors"
                >
                  {service.number}
                </span>

                {/* Center Title & Description */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3
                      style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.1rem)' }}
                      className="font-kanit font-semibold uppercase text-[#0C0C0C] tracking-wide"
                    >
                      {service.title}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-medium">
                      {service.subtitle}
                    </span>
                  </div>
                  <p
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)' }}
                    className="font-light leading-relaxed text-black/70 max-w-2xl"
                  >
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-neutral-200/80 text-neutral-700"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Consultation WhatsApp Action */}
                <div className="md:self-center">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Сәлеметсіз бе! Маған «${service.title}» бойынша толық мәлімет берсеңіздер.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 hover:border-black bg-white hover:bg-black hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium tracking-wide shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Кеңес алу</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
