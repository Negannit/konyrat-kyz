import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MenuSection } from './components/sections/MenuSection';
import { LocationSection } from './components/sections/LocationSection';
import { Footer } from './components/sections/Footer';
import { StickyCartBar } from './components/cart/StickyCartBar';
import { CartDrawer } from './components/cart/CartDrawer';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit selection:bg-[#E6C587]/30 selection:text-[#FAF0CD] overflow-x-clip relative">
        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section with 3D Mascot */}
          <HeroSection />

          {/* 2. Marquee Double Ribbon */}
          <MarqueeSection />

          {/* 3. About Section with Philosophy */}
          <AboutSection />

          {/* 4. Services Section (01-05 cards on white background) */}
          <ServicesSection />

          {/* 5. Interactive Menu Section with WhatsApp ordering */}
          <MenuSection />

          {/* 6. Location, Contacts & 2GIS */}
          <LocationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Cart Elements */}
        <StickyCartBar />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
