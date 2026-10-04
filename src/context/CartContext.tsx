import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, OrderDetails } from '../types';
import { SITE_CONFIG } from '../data/config';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  sendWhatsAppOrder: (details: OrderDetails) => void;
  getItemQuantity: (itemId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('konyrat_kyz_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('konyrat_kyz_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const addItem = (menuItem: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.menuItem.id === itemId);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter((i) => i.menuItem.id !== itemId);
      }
      return prev.map((i) =>
        i.menuItem.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const deleteItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.menuItem.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemQuantity = (itemId: string) => {
    const item = items.find((i) => i.menuItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.menuItem.price,
    0
  );

  const sendWhatsAppOrder = (details: OrderDetails) => {
    if (items.length === 0) return;

    const orderTypeLabel = {
      delivery: '🚗 Жеткізу (Доставка)',
      takeaway: '🛍️ Алып кету (Самовывоз)',
      table: '🍽️ Үстелге тапсырыс / Бронь (В зале)',
    }[details.orderType];

    const formattedLines = items.map((item, index) => {
      return `${index + 1}. ${item.menuItem.name} x ${item.quantity} порц. (${item.menuItem.portion})`;
    });

    let message = `Сәлеметсіз бе, «${SITE_CONFIG.brandName}»! 🌸\n` +
      `Мен сайттан мына мәзірге тапсырыс бергім келеді:\n\n` +
      `📋 ТАҢДАЛҒАН МӘЗІР:\n` +
      `${formattedLines.join('\n')}\n\n` +
      `📍 Қызмет түрі: ${orderTypeLabel}\n`;

    if (details.customerName?.trim()) {
      message += `👤 Аты-жөні: ${details.customerName.trim()}\n`;
    }
    if (details.customerPhone?.trim()) {
      message += `📞 Байланыс тел: ${details.customerPhone.trim()}\n`;
    }
    if (details.address?.trim()) {
      message += `🏠 Мекен-жай: ${details.address.trim()}\n`;
    }
    if (details.comment?.trim()) {
      message += `💬 Ескертпе: ${details.comment.trim()}\n`;
    }

    message += `\nӨтініш, тапсырысты қабылдап, дайындалу уақыты мен құнын хабарласаңыз! Рахмет!`;

    const cleanNumber = SITE_CONFIG.whatsappNumber;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        sendWhatsAppOrder,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
