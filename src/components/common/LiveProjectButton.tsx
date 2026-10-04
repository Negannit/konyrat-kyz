import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Мәзірді көру',
  onClick,
  href,
  className = '',
  icon,
}) => {
  const content = (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base transition-all duration-300 hover:bg-[#D7E2EA]/15 active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${className}`}
    >
      {icon}
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
