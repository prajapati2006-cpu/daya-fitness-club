import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FACILITY_IMAGES = {
  main: '/facility-building.jpg',
  cardio: '/facility-cardio.jpg',
  weights: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  panoramic: [
    '/facility-building.jpg',
    '/facility-cardio.jpg',
    '/hero.jpg',
    '/trainer-bg.jpg',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=60',
  ],
};

const FEATURES = [
  { icon: '🏋️', label: 'Weightlifting', img: '/services-weightlifting.jpg' },
  { icon: '🔒', label: 'Locker Room', img: '/facility-lockers.jpg' },
  { icon: '🅿️', label: 'Free Parking', img: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=200&q=70' },
  { icon: '💪', label: 'Expert Trainers', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&q=70' },
  { icon: '🥤', label: 'Protein Bar', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&q=70' },
  { icon: '🥊', label: 'Boxing Zone', img: '/services-kickboxing.jpg' },
];

export default function Facility() {
  const panoramaRef = useRef<HTMLDivElement>(null);

  return (
    <section id="facility" className="relative py-20 sm:py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge mx-auto w-fit">OUR FACILITY</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Built for{' '}
            <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(220,38,38,0.5)' }}>Champions</span>
          </h2>
        </motion.div>

        {/* Responsive Bento Grid - Full-width building card on mobile, 2x2 grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 mb-8 md:h-[520px]">
          {/* Large - Main Building Card (Fully visible across mobile & desktop) */}
          <motion.div
            className="w-full h-64 sm:h-80 md:h-auto md:row-span-2 relative overflow-hidden rounded-2xl group border border-white/10 shadow-xl"
            style={{ borderRight: '4px solid var(--primary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={FACILITY_IMAGES.main}
              alt="Daya Fitness Club facility building"
              className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              style={{ filter: 'brightness(0.92)' }}
            />
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 65%, transparent 100%)' }}>
              <p className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}>
                10,000 SQ FT GYM FLOOR
              </p>
              <p className="text-neutral-300 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Dual-level premium training arena in Sector 123, Noida
              </p>
            </div>
          </motion.div>

          {/* Secondary Facility Images (2-column on mobile, stacked on desktop) */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Medium top - Cardio Zone */}
            <motion.div
              className="w-full h-44 sm:h-52 md:h-full relative overflow-hidden rounded-2xl group border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={FACILITY_IMAGES.cardio}
                alt="Cardio Zone"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'brightness(0.88)' }}
              />
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.85), transparent)' }}>
                <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Cardio Zone</p>
              </div>
            </motion.div>

            {/* Medium bottom - Weights */}
            <motion.div
              className="w-full h-44 sm:h-52 md:h-full relative overflow-hidden rounded-2xl group border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <img
                src={FACILITY_IMAGES.weights}
                alt="Free Weights Area"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'brightness(0.75)' }}
              />
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.85), transparent)' }}>
                <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Free Weights Area</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Panoramic Strip */}
        <div className="panoramic-strip h-24 sm:h-28 rounded-xl overflow-hidden mb-12 relative border border-white/5">
          <div
            ref={panoramaRef}
            className="flex h-full"
            style={{ animation: 'marqueeScroll 30s linear infinite', width: 'max-content' }}
          >
            {[...FACILITY_IMAGES.panoramic, ...FACILITY_IMAGES.panoramic].map((src, i) => (
              <img key={i} src={src} alt="" className="h-full w-48 sm:w-64 object-cover flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 hover:-translate-y-1.5 transition-transform duration-300 cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <img src={f.img} alt={f.label} className="w-full h-full object-cover" style={{ filter: 'brightness(0.85)' }} />
              </div>
              <p className="text-white text-xs font-semibold text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {f.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real Member Transformation (100% visible aspect-[16/9] frame across all screen sizes) */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A0A0A0] text-xs sm:text-sm mb-3 tracking-widest uppercase font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Difference is Clear
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:h-72 md:h-80 w-full max-w-4xl mx-auto border border-white/10 shadow-2xl group">
            <img
              src="/transformation.jpg"
              alt="Daya Fitness Club Member Transformation"
              className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
              style={{ filter: 'brightness(0.95)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
