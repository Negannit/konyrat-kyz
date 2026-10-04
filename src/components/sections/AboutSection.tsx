import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';
import { ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutPhilosophyText =
    "«Қонырат Қыз» — бұл ата-бабамыздың сан ғасырлық ас дайындау мәдениеті мен қазіргі заманғы жоғары сапа стандартының үйлесімі. Біз тек табиғи, адал және таза өнімдерді пайдаланып, әрбір қонағымызға шынайы қазақы қонақжайлылық пен ұмытылмас дәм сыйлаймыз. Бізбен бірге салтанатты дастарханыңыз әрқашан берекелі болсын!";

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden bg-[#0C0C0C]"
    >
      {/* Corner Decorative 3D Badges */}
      {/* Top-Left */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none hidden sm:block">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] p-4 rounded-2xl bg-gradient-to-br from-[#1C160C] to-[#0E0E0E] border border-[#E6C587]/25 shadow-2xl flex flex-col items-center gap-2 transform -rotate-6">
            <div className="w-12 h-12 rounded-full bg-[#E6C587]/15 flex items-center justify-center text-[#E6C587]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#E6C587] font-semibold uppercase tracking-wider">
              100% Адал Ас
            </span>
            <span className="text-[10px] text-gray-400">Халал талаптарына толық сай</span>
          </div>
        </FadeIn>
      </div>

      {/* Top-Right */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none hidden sm:block">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] p-4 rounded-2xl bg-gradient-to-br from-[#1C160C] to-[#0E0E0E] border border-[#E6C587]/25 shadow-2xl flex flex-col items-center gap-2 transform rotate-6">
            <div className="w-12 h-12 rounded-full bg-[#E6C587]/15 flex items-center justify-center text-[#E6C587]">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#E6C587] font-semibold uppercase tracking-wider">
              Авторлық Мәзір
            </span>
            <span className="text-[10px] text-gray-400">Құпия дәмдеуіштер мен рецепт</span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Left */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[8%] pointer-events-none hidden sm:block">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <div className="w-[110px] sm:w-[140px] md:w-[170px] p-4 rounded-2xl bg-gradient-to-br from-[#1C160C] to-[#0E0E0E] border border-[#E6C587]/25 shadow-2xl flex flex-col items-center gap-2 transform rotate-3">
            <div className="w-12 h-12 rounded-full bg-[#E6C587]/15 flex items-center justify-center text-[#E6C587]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#E6C587] font-semibold uppercase tracking-wider">
              Қонақжайлылық
            </span>
            <span className="text-[10px] text-gray-400">Оңтүстік жылы лебізі</span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom-Right */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[8%] pointer-events-none hidden sm:block">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <div className="w-[120px] sm:w-[150px] md:w-[180px] p-4 rounded-2xl bg-gradient-to-br from-[#1C160C] to-[#0E0E0E] border border-[#E6C587]/25 shadow-2xl flex flex-col items-center gap-2 transform -rotate-3">
            <div className="w-12 h-12 rounded-full bg-[#E6C587]/15 flex items-center justify-center text-[#E6C587]">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs text-[#E6C587] font-semibold uppercase tracking-wider">
              Балғын Өнімдер
            </span>
            <span className="text-[10px] text-gray-400">Тек жас мал етінен</span>
          </div>
        </FadeIn>
      </div>

      {/* Section Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center z-10">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
            className="hero-heading font-kanit font-black uppercase leading-none tracking-tight mb-8 sm:mb-12"
          >
            БІЗ ТУРАЛЫ
          </h2>
        </FadeIn>

        {/* Brand Illustration */}
        <FadeIn delay={0.2} y={20}>
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-[#E6C587]/20 rounded-full blur-xl transform scale-90 group-hover:scale-100 transition-transform duration-300" />
            <img
              src="./brand/mascot.png"
              alt="Қонырат Қыз"
              className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-[#E6C587]/50 shadow-2xl mx-auto"
            />
          </div>
        </FadeIn>

        {/* Animated Paragraph */}
        <div className="mb-12 sm:mb-16">
          <AnimatedText
            text={aboutPhilosophyText}
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Contact / Order CTA */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton
            label="Мәзірмен танысу"
            onClick={scrollToMenu}
            variant="gold"
          />
        </FadeIn>
      </div>
    </section>
  );
};
