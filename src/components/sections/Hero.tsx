import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Play } from 'lucide-react';
import { GYM } from '../../constants/gymData';

const HERO_BG = '/hero.jpg';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrolled = window.scrollY > 80;
    const onScroll = () => {
      const isPast = window.scrollY > 80;
      if (isPast !== lastScrolled) {
        lastScrolled = isPast;
        setScrolled(isPast);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden grain-overlay"
    >
      {/* 1. Base Photo with GPU-accelerated sharpness and subtle cinematic grade */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Daya Fitness Club"
          className="w-full h-full object-cover object-[center_18%]"
          style={{
            animation: 'kenBurns 18s ease-in-out infinite',
            filter: 'contrast(1.03) brightness(1.01) saturate(1.02)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            imageRendering: '-webkit-optimize-contrast',
          }}
        />
      </div>

      {/* 2. Soft top & bottom gradient to blend header and footer gracefully */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.05) 30%, rgba(8,8,8,0.1) 60%, rgba(8,8,8,0.92) 100%)',
        }}
      />

      {/* 3. Lower-left backdrop vignette: focused strictly behind text/controls in the lower-left, keeping the illuminated wall logo & founder crystal clear */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 18% 85%, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.5) 35%, transparent 65%)',
        }}
      />

      {/* 4. Perspective grid at bottom */}
      <div className="absolute inset-0 z-1 opacity-25 pointer-events-none">
        <div className="perspective-grid absolute bottom-0 left-0 right-0 h-48" />
      </div>

      {/* 5. Floating crimson particles */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1.5 + 'px',
              height: Math.random() * 3 + 1.5 + 'px',
              background: 'rgba(220,38,38,0.7)',
              left: Math.random() * 80 + '%',
              top: Math.random() * 80 + 10 + '%',
              animation: `float ${6 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 3}s`,
              boxShadow: '0 0 8px rgba(220,38,38,0.6)',
            }}
          />
        ))}
      </div>

      {/* Main Content - Placed strictly inside the lower-left marked boundary area (below wall logo, left of founder) */}
      <div className="relative z-10 w-full pl-6 sm:pl-10 lg:pl-16 pr-4 pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-[340px] sm:max-w-[380px] flex flex-col items-start gap-4">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1
              className="text-white text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-wide leading-[1.05] drop-shadow-md"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              YOUR PERFECT <br />
              <span
                style={{
                  color: 'var(--primary)',
                  textShadow: '0 0 30px rgba(220,38,38,0.6)',
                }}
              >
                GYM PARTNER
              </span>
            </h1>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="#pricing"
              className="glow-btn justify-center px-5 py-2.5 text-xs sm:text-sm rounded-md font-bold text-center whitespace-nowrap shadow-lg"
            >
              Start Training Today →
            </a>
            <a
              href={`https://wa.me/${GYM.whatsapp}?text=Hi! I'd like to book a gym tour`}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn justify-center px-4 py-2.5 text-xs sm:text-sm rounded-md flex items-center gap-1.5 text-center whitespace-nowrap"
            >
              <Play size={13} fill="currentColor" />
              <span>Book a Tour</span>
            </a>
          </motion.div>

          {/* Rating, Members & Est. date badge */}
          <motion.div
            className="flex items-center gap-2.5 text-xs text-[#D1D5DB] bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 w-fit shadow-xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-1">
              <Star size={13} fill="#f59e0b" color="#f59e0b" />
              <span className="font-semibold text-white">4.8 Rating</span>
            </div>
            <span className="text-white/30">•</span>
            <span>160+ Members</span>
            <span className="text-white/30">•</span>
            <span>Est. 2023</span>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none hidden md:flex"
        animate={{ opacity: scrolled ? 0 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-white/70"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <ChevronDown size={12} className="text-white/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
