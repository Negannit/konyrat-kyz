import React, { useState, useEffect } from 'react';
import { FadeIn } from '../common/FadeIn';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Мәзір', href: '#menu' },
    { label: 'Біз туралы', href: '#about' },
    { label: 'Қызметтер', href: '#services' },
    { label: 'Байланыс', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 py-3 md:py-4 shadow-2xl'
          : 'bg-transparent py-4 md:pt-8 md:pb-4'
      }`}
    >
      <FadeIn delay={0} y={-20} className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <nav className="flex items-center justify-between">
          {/* Brand Logo / Title */}
          <a
            href="#"
            className="flex items-center gap-3 text-[#D7E2EA] hover:opacity-80 transition-opacity"
          >
            <img
              src="./brand/mascot.png"
              alt="Қонырат Қыз"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-[#E6C587]/40 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-kanit font-black tracking-wider text-base sm:text-xl text-white">
                ҚОНЫРАТ ҚЫЗ
              </span>
              <span className="text-[10px] text-[#E6C587] font-light uppercase tracking-widest hidden sm:inline">
                Дәмді адал ас мекені
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg transition-opacity duration-200 hover:opacity-70 hover:text-[#E6C587]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Сәлеметсіз бе! «Қонырат Қыз» мәзірі бойынша сұрағым бар еді.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-medium hover:bg-emerald-500/20 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-[#1A1A1A] border border-white/10 hover:border-[#E6C587]/60 text-white flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              aria-label="Себет"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#E6C587]" />
              <span className="hidden sm:inline text-xs sm:text-sm font-medium tracking-wide">
                Себет
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 sm:relative sm:top-auto sm:right-auto bg-[#E6C587] text-[#0C0C0C] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#D7E2EA] hover:text-white"
              aria-label="Мәзір"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#141414] border border-white/10 rounded-2xl flex flex-col gap-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm py-2 px-3 rounded-lg hover:bg-white/5 hover:text-[#E6C587]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 mt-1 rounded-xl bg-emerald-600 text-white font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp-қа жазу</span>
            </a>
          </div>
        )}
      </FadeIn>
    </header>
  );
};
