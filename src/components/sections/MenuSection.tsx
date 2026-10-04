import React, { useState } from 'react';
import { FadeIn } from '../common/FadeIn';
import { CATEGORIES, MENU_ITEMS } from '../../data/menu';
import { CategoryType, MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { Plus, Minus, ShoppingBag, Sparkles, Flame } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const { addItem, removeItem, getItemQuantity, setIsCartOpen } = useCart();

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative bg-[#0C0C0C] text-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn delay={0} y={30} className="text-center mb-10 sm:mb-14">
          <span className="text-[#E6C587] text-xs sm:text-sm font-medium uppercase tracking-[0.25em] mb-2 block">
            Шынайы ұлттық дәмі мен сапасы
          </span>
          <h2
            style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight"
          >
            МӘЗІР
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto font-light">
            Қалаған тағамдарыңызды таңдап, себетке қосыңыз. Тапсырыс тікелей WhatsApp арқылы жіберіледі.
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E6C587] text-[#0C0C0C] shadow-lg shadow-[#E6C587]/20 font-semibold scale-105'
                    : 'bg-[#181818] text-[#D7E2EA] hover:bg-[#252525] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((dish, index) => {
            const qty = getItemQuantity(dish.id);

            return (
              <FadeIn
                key={dish.id}
                delay={(index % 6) * 0.08}
                y={25}
                className="h-full"
              >
                <div className="bg-[#141414] border border-white/10 hover:border-[#E6C587]/40 rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-[#E6C587]/10 h-full">
                  {/* Top Image Section */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {dish.isChefSpecial && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/90 text-black text-[11px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>Шефтен</span>
                        </span>
                      )}
                      {dish.isPopular && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
                          <Flame className="w-3 h-3" />
                          <span>Хит</span>
                        </span>
                      )}
                    </div>

                    {/* Portion Tag */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/75 border border-white/10 text-white/90 text-xs font-light backdrop-blur-sm">
                      {dish.portion}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl font-kanit tracking-wide mb-2 group-hover:text-[#E6C587] transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    </div>

                    {/* Order Selection Controls without Prices */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                          Мөлшері
                        </span>
                        <span className="text-sm font-semibold text-[#E6C587]">
                          {dish.portion}
                        </span>
                      </div>

                      {/* Add / Quantity Buttons */}
                      {qty === 0 ? (
                        <button
                          onClick={() => addItem(dish)}
                          className="px-5 py-2.5 rounded-full bg-[#E6C587] hover:bg-[#F3D79E] active:scale-95 text-[#0C0C0C] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>Таңдау</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-[#202020] border border-[#E6C587]/40 rounded-full p-1 shadow-inner">
                          <button
                            onClick={() => removeItem(dish.id)}
                            className="w-8 h-8 rounded-full bg-[#2A2A2A] hover:bg-[#333] text-white flex items-center justify-center text-xs transition-colors active:scale-90"
                            aria-label="Азайту"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center font-bold text-white text-sm">
                            {qty}
                          </span>
                          <button
                            onClick={() => addItem(dish)}
                            className="w-8 h-8 rounded-full bg-[#E6C587] hover:bg-[#F3D79E] text-black flex items-center justify-center text-xs transition-colors active:scale-90 font-bold"
                            aria-label="Қосу"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
