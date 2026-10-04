import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { SITE_CONFIG } from '../../data/config';
import { MapPin, Clock, Phone, Instagram, MessageCircle, ExternalLink, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] text-white px-5 sm:px-8 md:px-10 py-20 sm:py-28 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center mb-14 sm:mb-20">
          <span className="text-[#E6C587] text-xs sm:text-sm font-medium uppercase tracking-[0.25em] mb-2 block">
            Біздің мекен-жайымыз бен байланыс
          </span>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight"
          >
            БАЙЛАНЫС
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base font-light">
            Кез келген уақытта хабарласып, үстелге немесе салтанатты жиынға тапсырыс беріңіз
          </p>
        </FadeIn>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Address & 2GIS */}
          <FadeIn delay={0.1} y={20}>
            <div className="bg-[#141414] border border-white/10 hover:border-[#E6C587]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6C587]/15 text-[#E6C587] flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-kanit font-bold text-xl text-white mb-2">
                  Мекен-жайымыз
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-1">
                  {SITE_CONFIG.city}
                </p>
                <p className="text-white font-medium text-sm leading-relaxed mb-2">
                  {SITE_CONFIG.address}
                </p>
                <span className="text-xs text-[#E6C587] inline-block font-light">
                  {SITE_CONFIG.landmark}
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={SITE_CONFIG.twoGisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E6C587] hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  <span>2GIS картасынан көру</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Schedule & Phone */}
          <FadeIn delay={0.2} y={20}>
            <div className="bg-[#141414] border border-white/10 hover:border-[#E6C587]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6C587]/15 text-[#E6C587] flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-kanit font-bold text-xl text-white mb-2">
                  Жұмыс кестесі
                </h3>
                <p className="text-white font-medium text-sm leading-relaxed mb-2">
                  {SITE_CONFIG.workingHours}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Тапсырыс беру, жеткізу және бронь жасау кез келген уақытта қабылданады.
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-lg font-kanit">
                  <Phone className="w-4 h-4 text-[#E6C587]" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#E6C587] transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E6C587] hover:underline"
                >
                  <span>Қоңырау шалу</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Social & WhatsApp */}
          <FadeIn delay={0.3} y={20}>
            <div className="bg-[#141414] border border-white/10 hover:border-[#E6C587]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-kanit font-bold text-xl text-white mb-2">
                  Желілер & Мессенджер
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Инстаграм парақшамыздан күнделікті фото-видеоларды көріңіз, ал WhatsApp арқылы тікелей байланысыңыз.
                </p>

                <div className="space-y-3">
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>{SITE_CONFIG.instagramUsername} (104K)</span>
                  </a>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] text-gray-500 block">
                  Жылдам жауап береміз
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
