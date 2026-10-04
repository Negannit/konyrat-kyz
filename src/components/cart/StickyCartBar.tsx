import React from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyCartBar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none"
      >
        <div className="max-w-xl mx-auto bg-[#181818]/95 backdrop-blur-xl border border-[#E6C587]/40 rounded-full p-2.5 sm:p-3 shadow-2xl flex items-center justify-between gap-3 pointer-events-auto">
          {/* Left: Cart Info */}
          <div className="flex items-center gap-3 pl-3 sm:pl-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#E6C587] text-black flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#181818]">
                {totalItems}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-light">
                Таңдалған тағамдар саны:
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-kanit">
                {totalItems} порция
              </span>
            </div>
          </div>

          {/* Right: Checkout Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-5 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#D6A446] to-[#E6C587] hover:brightness-110 active:scale-95 text-[#0C0C0C] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg cursor-pointer"
          >
            <span>Тапсырыс беру</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
