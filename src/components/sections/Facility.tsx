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
    <section id="facility" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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

        {/* Bento Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-8 h-[480px] md:h-[520px]">
          {/* Large - main building */}
          <motion.div
            className="row-span-2 relative overflow-hidden rounded-2xl group"
            style={{ borderRight: '4px solid var(--primary)', clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={FACILITY_IMAGES.main}
              alt="Daya Fitness Club facility building"
              className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700"
              style={{ filter: 'brightness(0.92)' }}
            />
            <div className="absolute bottom-0 inset-x-0 p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.85), transparent)' }}>
              <p className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}>10,000 SQ FT GYM FLOOR</p>
            </div>
          </motion.div>

          {/* Medium top - cardio */}
          <motion.div
            className="relative overflow-hidden rounded-2xl group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img
              src={FACILITY_IMAGES.cardio}
              alt="Cardio Zone"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              style={{ filter: 'brightness(0.88)' }}
            />
            <div className="absolute bottom-0 inset-x-0 p-4" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.85), transparent)' }}>
              <p className="text-white text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Cardio Zone</p>
            </div>
          </motion.div>

          {/* Medium bottom - weights */}
          <motion.div
            className="relative overflow-hidden rounded-2xl group"
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src={FACILITY_IMAGES.weights} alt="Free Weights Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.65)' }} />
            <div className="absolute bottom-0 inset-x-0 p-4" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }}>
              <p className="text-white text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Free Weights Area</p>
            </div>
          </motion.div>
        </div>

        {/* Panoramic Strip */}
        <div className="panoramic-strip h-28 rounded-xl overflow-hidden mb-12 relative">
          <div
            ref={panoramaRef}
            className="flex h-full"
            style={{ animation: 'marqueeScroll 30s linear infinite', width: 'max-content' }}
          >
            {[...FACILITY_IMAGES.panoramic, ...FACILITY_IMAGES.panoramic].map((src, i) => (
              <img key={i} src={src} alt="" className="h-full w-64 object-cover flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform duration-300 cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img src={f.img} alt={f.label} className="w-full h-full object-cover" style={{ filter: 'brightness(0.8)' }} />
              </div>
              <p className="text-white text-xs font-semibold text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {f.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real Member Transformation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-[#A0A0A0] text-sm mb-4 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The Difference is Clear
          </p>
          <div className="relative rounded-2xl overflow-hidden h-56 md:h-72 border border-white/10 shadow-xl group">
            <img
              src="/transformation.jpg"
              alt="Daya Fitness Club Member Transformation"
              className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700"
              style={{ filter: 'brightness(0.95)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
