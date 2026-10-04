import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { OrderType } from '../../types';
import { SITE_CONFIG } from '../../data/config';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, User, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    addItem,
    removeItem,
    deleteItem,
    clearCart,
    totalItems,
    sendWhatsAppOrder,
  } = useCart();

  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  if (!isCartOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendWhatsAppOrder({
      orderType,
      customerName,
      customerPhone,
      address,
      comment,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer Container */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-md bg-[#121212] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#161616]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E6C587]/15 flex items-center justify-center text-[#E6C587]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-kanit font-bold text-lg text-white">
                    Сіздің себетіңіз
                  </h3>
                  <span className="text-xs text-gray-400">
                    {totalItems} тағам таңдалды
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="p-2 text-gray-400 hover:text-red-400 text-xs transition-colors"
                    title="Себетті тазалау"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Жабу"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 text-gray-400">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-gray-600" />
                  </div>
                  <p className="text-base font-medium text-white mb-1">
                    Себетіңіз әзірге бос
                  </p>
                  <p className="text-xs text-gray-400 max-w-xs">
                    Мәзірден өзіңізге ұнаған ұлттық тағамдарды таңдап, қосыңыз
                  </p>
                </div>
              ) : (
                <>
                  {/* Items List */}
                  <div className="space-y-4">
                    {items.map(({ menuItem, quantity }) => (
                      <div
                        key={menuItem.id}
                        className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#1A1A1A] border border-white/5"
                      >
                        <img
                          src={menuItem.image}
                          alt={menuItem.name}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-white truncate">
                            {menuItem.name}
                          </h4>
                          <span className="text-xs text-[#E6C587] font-medium">
                            {menuItem.portion}
                          </span>
                          <div className="text-[11px] text-gray-400">
                            Таңдалды: {quantity} порция
                          </div>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-1.5 bg-[#252525] rounded-full p-1 border border-white/5">
                          <button
                            onClick={() => removeItem(menuItem.id)}
                            className="w-6 h-6 rounded-full bg-[#303030] hover:bg-[#3D3D3D] text-white flex items-center justify-center text-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-white">
                            {quantity}
                          </span>
                          <button
                            onClick={() => addItem(menuItem)}
                            className="w-6 h-6 rounded-full bg-[#E6C587] hover:bg-[#F3D79E] text-black flex items-center justify-center text-xs font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove item */}
                        <button
                          onClick={() => deleteItem(menuItem.id)}
                          className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Order Type Selector */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                      Қызмет түрі
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`py-2 px-2 rounded-xl text-xs font-medium transition-all ${
                          orderType === 'delivery'
                            ? 'bg-[#E6C587] text-black font-bold shadow-md'
                            : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#282828]'
                        }`}
                      >
                        🚗 Жеткізу
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('takeaway')}
                        className={`py-2 px-2 rounded-xl text-xs font-medium transition-all ${
                          orderType === 'takeaway'
                            ? 'bg-[#E6C587] text-black font-bold shadow-md'
                            : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#282828]'
                        }`}
                      >
                        🛍️ Алып кету
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('table')}
                        className={`py-2 px-2 rounded-xl text-xs font-medium transition-all ${
                          orderType === 'table'
                            ? 'bg-[#E6C587] text-black font-bold shadow-md'
                            : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#282828]'
                        }`}
                      >
                        🍽️ Залда
                      </button>
                    </div>
                  </div>

                  {/* Customer Information Inputs */}
                  <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                    {/* Name */}
                    <div>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Аты-жөніңіз (міндетті емес)"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C587]"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="Байланыс телефоныңыз"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C587]"
                        />
                      </div>
                    </div>

                    {/* Address or Table */}
                    {orderType === 'delivery' && (
                      <div>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Жеткізу мекенжайы (көше, үй, пәтер)"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C587]"
                          />
                        </div>
                      </div>
                    )}

                    {/* Comment */}
                    <div>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Тапсырысқа ескертпе немесе тілек"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E6C587]"
                        />
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Bottom Sticky Action Bar */}
            {items.length > 0 && (
              <div className="p-5 sm:p-6 bg-[#161616] border-t border-white/10 space-y-4">
                {/* Total Row without Price */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-light">
                    Таңдалған тағамдар:
                  </span>
                  <span className="text-xl font-bold text-white font-kanit">
                    {totalItems} порция
                  </span>
                </div>

                {/* Primary WhatsApp Order Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 sm:py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/30 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp арқылы жіберу</span>
                </button>

                <p className="text-[11px] text-center text-gray-400">
                  Батырманы басқанда <span className="text-emerald-400 font-semibold">{SITE_CONFIG.phone}</span> нөміріне дайын тапсырыс мәтіні ашылады.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
