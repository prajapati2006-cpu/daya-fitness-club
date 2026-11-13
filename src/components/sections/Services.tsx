import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES, GYM } from '../../constants/gymData';

const TABS = ['ALL', 'GYM FLOOR', 'CLASSES', 'PROGRAMS'] as const;

const SERVICE_TAGS: Record<string, string[]> = {
  'Strength Training': ['Hypertrophy', 'Compound Lifts', 'Power'],
  'Weightlifting': ['Olympic Barbells', 'Power Racks', 'Deadlift Zone'],
  'CrossFit Training': ['High Intensity', 'Endurance', 'Conditioning'],
  'Yoga Classes': ['Flexibility', 'Mindfulness', 'Core Balance'],
  'Zumba Classes': ['Cardio Dance', 'Calorie Burn', 'Rhythm'],
  'Kickboxing Classes': ['Combat Agility', 'Striking', 'Self-Defense'],
  'Male Fitness Programs': ['Bulking & Cut', 'Strength Regimen', 'Personalized'],
  'Female Fitness Programs': ['Body Toning', 'Posture & Core', 'Fat Loss'],
  'General Gym Workouts': ['Full Floor Access', 'Cardio Deck', 'All Levels'],
};

const KINETIC_WORDS = [
  'STRENGTH TRAINING',
  'WEIGHTLIFTING',
  'CROSSFIT',
  'KICKBOXING',
  'YOGA',
  'ZUMBA',
  'POWERLIFTING',
  'BODYBUILDING',
  'CARDIO',
  'CONDITIONING',
  'ENDURANCE',
  'DISCIPLINE',
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('ALL');

  const filtered = activeTab === 'ALL'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#080808' }}>
      {/* 1. Pure CSS Background Ambience - NO IMAGES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial glow pulses */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-20 blur-[130px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 right-10 w-[450px] h-[300px] opacity-15 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
        />
        {/* Subtle geometric grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* 2. Kinetic Typography Marquee Stream - Continuous animated text banner */}
      <div className="relative z-10 w-full overflow-hidden mb-16 py-3 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marqueeScroll 24s linear infinite',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {[...KINETIC_WORDS, ...KINETIC_WORDS, ...KINETIC_WORDS].map((word, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-6 px-6 text-xl sm:text-2xl font-normal tracking-wider"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              <span className={idx % 2 === 0 ? 'text-white/80' : 'text-red-500'}>
                {word}
              </span>
              <span className="text-white/20 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 section-wrapper">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge mx-auto w-fit flex items-center gap-2">
            <Sparkles size={13} className="text-red-500 animate-pulse" />
            <span>WHAT WE OFFER</span>
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(42px, 6.5vw, 76px)',
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}
          >
            EVERYTHING YOU NEED TO{' '}
            <span
              className="relative inline-block"
              style={{
                color: 'var(--primary)',
                textShadow: '0 0 35px rgba(220,38,38,0.55)',
              }}
            >
              WIN
            </span>
          </h2>
          <p
            className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mt-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            World-class coaching, heavy iron, and high-energy group fitness engineered for true physical transformation.
          </p>
        </motion.div>

        {/* Animated Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {TABS.map(tab => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: isActive ? '#000' : '#A0A0A0',
                  background: isActive ? 'var(--primary)' : 'rgba(255,255,255,0.04)',
                  boxShadow: isActive ? '0 0 20px rgba(220,38,38,0.45)' : 'none',
                  border: isActive ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Animated Typography Cards Grid - ONLY TEXT & VECTOR BADGES (ZERO IMAGES) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => {
              const tags = SERVICE_TAGS[service.name] || ['Training', 'Fitness', 'Coaching'];
              const indexFormatted = String(i + 1).padStart(2, '0');

              return (
                <motion.div
                  key={service.name}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 transform-gpu cursor-default"
                  style={{
                    background: 'rgba(16,16,16,0.85)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Hover ambient spotlight glow inside the card */}
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.4) 0%, transparent 70%)' }}
                  />

                  {/* Top Animated Watermark Number */}
                  <div
                    className="absolute top-4 right-5 text-5xl sm:text-6xl font-black text-white/[0.04] group-hover:text-red-500/15 group-hover:scale-110 transition-all duration-500 select-none pointer-events-none"
                    style={{ fontFamily: "'Bebas Neue', cursive" }}
                  >
                    {indexFormatted}
                  </div>

                  {/* Card Content Top */}
                  <div>
                    {/* Header Row: Icon + Category Badge + Active status */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.35)]"
                          style={{
                            background: 'rgba(220,38,38,0.1)',
                            border: '1px solid rgba(220,38,38,0.25)',
                          }}
                        >
                          {service.icon}
                        </div>
                        <span
                          className="text-[10px] tracking-widest uppercase font-bold px-2.5 py-1 rounded-full text-red-400 bg-red-500/10 border border-red-500/20"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {service.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Available</span>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3
                      className="text-white text-2xl sm:text-3xl font-normal tracking-wide mb-3 transition-colors duration-300 group-hover:text-red-500"
                      style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.04em' }}
                    >
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-neutral-400 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {service.description}
                    </p>

                    {/* Animated Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md text-neutral-300 bg-white/[0.04] border border-white/5 group-hover:border-red-500/30 group-hover:text-white transition-all duration-300"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Content Bottom: Interactive Callout */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={`https://wa.me/${GYM.whatsapp}?text=Hi! I would like more information about ${encodeURIComponent(service.name)} at Daya Fitness Club.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-500 group-hover:text-red-400 transition-colors uppercase tracking-wider"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span>Explore Program</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </a>

                    <span className="text-[11px] text-neutral-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Coaching Included
                    </span>
                  </div>

                  {/* Animated Glowing Edge Beam at Card Bottom */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent, var(--primary), #ffffff, var(--primary), transparent)',
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Kinetic Text Banner - Reverse Marquee */}
        <div className="mt-16 text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            CUSTOMIZED REGIMENS FOR EVERY GOAL
          </p>
          <a
            href={`https://wa.me/${GYM.whatsapp}?text=Hi! I want to join Daya Fitness Club and get a workout plan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl"
          >
            <span>Book a Free Workout Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
