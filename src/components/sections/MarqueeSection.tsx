import React, { useRef, useState, useEffect } from 'react';

interface MarqueeDish {
  title: string;
  tag: string;
  image: string;
}

const ROW_1_DISHES: MarqueeDish[] = [
  {
    title: 'Хан табақ Бесбармақ',
    tag: 'Сүбе қазы мен жайма',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ыстық бауырсақтар',
    tag: 'Сары майға піскен',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Шымкенттік Қуырдақ',
    tag: 'Балғын жас еттен',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Қолдың шырынды мантысы',
    tag: 'Жылқы & сиыр еті',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Қазан-кебаб',
    tag: 'Қытырлақ картоппен',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Қазы-қарта деликатесі',
    tag: 'Салқын тілімдер',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
  },
];

const ROW_2_DISHES: MarqueeDish[] = [
  {
    title: 'Шоққа піскен кәуап',
    tag: 'Жұмсақ қой еті',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Салқын бальзам қымыз',
    tag: '100% табиғи бие сүті',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Мерекелік лазер палауы',
    tag: 'Сары сәбіз бен бөдене',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Түйе сүті — Шұбат',
    tag: 'Қою емдік сусын',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Үй құрты мен ірімшік',
    tag: 'Дәстүрлі дастархан',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Самаурын шайы',
    tag: 'Тары & балғын қаймақ',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Repeat 3 times for seamless continuity
  const row1Triple = [...ROW_1_DISHES, ...ROW_1_DISHES, ...ROW_1_DISHES];
  const row2Triple = [...ROW_2_DISHES, ...ROW_2_DISHES, ...ROW_2_DISHES];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      {/* Section Subheader */}
      <div className="w-full text-center mb-10 px-5">
        <span className="text-[#E6C587] text-xs sm:text-sm font-medium uppercase tracking-[0.25em]">
          Дастархан сәні мен ұлттық дәмі
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-wider mt-1">
          Авторлық мәзір галереясы
        </h2>
      </div>

      {/* Row 1: moves right on scroll */}
      <div
        className="flex gap-3 mb-3 will-change-transform"
        style={{
          transform: `translateX(${offset - 250}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {row1Triple.map((dish, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] rounded-2xl relative overflow-hidden group border border-white/10 hover:border-[#E6C587]/60 transition-all duration-300 shadow-xl"
          >
            <img
              src={dish.image}
              alt={dish.title}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] sm:text-xs text-[#E6C587] font-medium uppercase tracking-wider mb-0.5">
                {dish.tag}
              </span>
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl font-kanit drop-shadow-md">
                {dish.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: moves left on scroll */}
      <div
        className="flex gap-3 will-change-transform"
        style={{
          transform: `translateX(${-(offset - 250)}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {row2Triple.map((dish, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 w-[300px] h-[190px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] rounded-2xl relative overflow-hidden group border border-white/10 hover:border-[#E6C587]/60 transition-all duration-300 shadow-xl"
          >
            <img
              src={dish.image}
              alt={dish.title}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] sm:text-xs text-[#E6C587] font-medium uppercase tracking-wider mb-0.5">
                {dish.tag}
              </span>
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl font-kanit drop-shadow-md">
                {dish.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
