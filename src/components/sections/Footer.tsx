import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] text-gray-400 py-12 px-5 sm:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="./brand/mascot.png"
            alt="Қонырат Қыз"
            className="w-10 h-10 rounded-full object-cover border border-[#E6C587]/30"
          />
          <div>
            <div className="font-kanit font-black text-white text-base tracking-wider">
              {SITE_CONFIG.brandName}
            </div>
            <div className="text-xs text-[#E6C587] font-light">
              {SITE_CONFIG.tagline} · Шымкент
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider">
          <a href="#menu" className="hover:text-white transition-colors">
            Мәзір
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            Біз туралы
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Қызметтер
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Байланыс
          </a>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. Барлық құқықтар қорғалған.</span>
        </div>
      </div>
    </footer>
  );
};
