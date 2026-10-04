import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'purple' | 'gold';
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Тапсырыс беру',
  onClick,
  href,
  className = '',
  variant = 'gold',
}) => {
  const isGold = variant === 'gold';

  const bgStyle = isGold
    ? {
        background: 'linear-gradient(123deg, #2D1A02 7%, #B37D22 37%, #D6A446 72%, #FBE5A2 100%)',
        boxShadow: '0px 4px 12px rgba(214, 164, 70, 0.35), inset 2px 2px 8px rgba(255, 255, 255, 0.3)',
      }
    : {
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      };

  const content = (
    <button
      onClick={onClick}
      style={bgStyle}
      className={`rounded-full px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 outline outline-2 outline-white outline-offset-[-3px] flex items-center justify-center gap-2 cursor-pointer shadow-lg ${className}`}
    >
      <span>{label}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
