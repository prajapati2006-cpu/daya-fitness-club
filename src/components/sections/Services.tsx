import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, GYM } from '../../constants/gymData';
import { WhatsAppIcon } from '../SocialIcons';

const SERVICE_DETAILS: Record<string, { tags: string[]; perks: string[] }> = {
  'Strength Training': {
    tags: ['Hypertrophy', 'Compound Lifts', 'Power'],
    perks: [
      'Targeted muscle-building regimens for maximum strength',
      'Full access to heavy cable towers, chest presses & pull systems',
      'Certified trainer form correction and technique coaching',
    ],
  },
  'Weightlifting': {
    tags: ['Olympic Barbells', 'Power Racks', 'Deadlift Zone'],
    perks: [
      'Full set of Olympic standard barbells and precision plates',
      'Reinforced shock-absorbing rubber deadlift drop zones',
      'Multiple heavy-duty power racks with safety spotter arms',
    ],
  },
  'CrossFit Training': {
    tags: ['HIIT & Stamina', 'Functional Fitness', 'Endurance'],
    perks: [
      'High-intensity functional conditioning circuits',
      'Kettlebells, battle ropes, medicine balls & plyo boxes',
      'Builds stamina, agility, and athletic endurance',
    ],
  },
  'Yoga Classes': {
    tags: ['Mindfulness', 'Flexibility', 'Core Stability'],
    perks: [
      'Expert instructor-guided flexibility and posture alignment',
      'Calming breathwork to relieve stress and accelerate recovery',
      'Strengthens joints, deep core muscles, and mind-body balance',
    ],
  },
  'Zumba Classes': {
    tags: ['Cardio Dance', 'Calorie Burn', 'High Energy'],
    perks: [
      'Fast-paced energetic dance routines to high-tempo music',
      'Burns hundreds of calories while keeping workouts fun',
      'Open to all fitness levels with an encouraging group vibe',
    ],
  },
  'Kickboxing Classes': {
    tags: ['Combat Agility', 'Striking', 'Self-Defense'],
    perks: [
      'Heavy bag strike drills, punching combinations & footwork',
      'Intense full-body cardiovascular and rotational power workout',
      'Builds real-world self-defense agility and reaction speed',
    ],
  },
  'Male Fitness Programs': {
    tags: ['Bulking & Cut', 'Strength Regimen', 'Personalized'],
    perks: [
      'Custom bulking, cutting, or athletic maintenance routines',
      'Targeted upper & lower body progressive overload plans',
      'Dietary and supplement consultation tailored to your goals',
    ],
  },
  'Female Fitness Programs': {
    tags: ['Body Toning', 'Posture & Core', 'Fat Loss'],
    perks: [
      'Dedicated body sculpting, glute, posture, and core toning',
      'Safe, welcoming, and empowering training atmosphere',
      'Customized cardio-to-strength ratios for sustainable results',
    ],
  },
  'General Gym Workouts': {
    tags: ['Full Floor Access', 'Cardio Deck', 'All Levels'],
    perks: [
      'Spacious 3,000 sq ft dual-story air-conditioned facility',
      'High-end cardio machines, ellipticals, treadmills & cycles',
      'Flexible morning (5-10 AM) & evening (5-10 PM) training slots',
    ],
  },
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#080808' }}>
      {/* Background Lighting Effects (NO IMAGES) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-20 blur-[140px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 right-10 w-[450px] h-[300px] opacity-15 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Kinetic Typography Marquee Stream */}
      <div className="relative z-10 w-full overflow-hidden mb-16 py-3 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marqueeScroll 26s linear infinite',
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
          className="text-center mb-14"
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
            OUR TRAINING{' '}
            <span
              style={{
                color: 'var(--primary)',
                textShadow: '0 0 35px rgba(220,38,38,0.55)',
              }}
            >
              DISCIPLINES
            </span>
          </h2>
          <p
            className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mt-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore our complete lineup of training programs. Select any discipline to see highlights, coaching structure, and details.
          </p>
        </motion.div>

        {/* List-wise Animated Section */}
        <div className="max-w-4xl mx-auto space-y-3">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            const details = SERVICE_DETAILS[service.name] || {
              tags: ['Fitness', 'Workout', 'Coaching'],
              perks: ['Certified coaching guidance', 'Full equipment access', 'Flexible timing'],
            };
            const indexNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={service.name}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? 'rgba(20,20,20,0.95)' : 'rgba(14,14,14,0.7)',
                  border: isOpen ? '1px solid rgba(220,38,38,0.45)' : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isOpen ? '0 12px 35px rgba(220,38,38,0.12)' : 'none',
                }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                {/* List Item Header Row */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors duration-200 group cursor-pointer"
                >
                  {/* Left Column: Number + Icon + Title + Category */}
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    {/* Index Number */}
                    <span
                      className="text-lg sm:text-2xl font-black tracking-wider transition-colors duration-300 flex-shrink-0"
                      style={{
                        fontFamily: "'Bebas Neue', cursive",
                        color: isOpen ? 'var(--primary)' : 'rgba(255,255,255,0.25)',
                      }}
                    >
                      {indexNumber}
                    </span>

                    {/* Emoji Icon Badge */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: isOpen ? 'rgba(220,38,38,0.15)' : 'rgba(255,255,255,0.04)',
                        border: isOpen ? '1px solid rgba(220,38,38,0.3)' : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Category Badge */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3
                          className="text-xl sm:text-2xl md:text-3xl text-white font-normal tracking-wide transition-all duration-300 group-hover:text-red-500 truncate"
                          style={{
                            fontFamily: "'Bebas Neue', cursive",
                            color: isOpen ? 'var(--primary)' : undefined,
                          }}
                        >
                          {service.name}
                        </h3>
                        <span
                          className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-full text-red-400 bg-red-500/10 border border-red-500/20"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {service.category}
                        </span>
                      </div>

                      {/* Preview Description for closed items */}
                      {!isOpen && (
                        <p
                          className="text-neutral-400 text-xs sm:text-sm mt-0.5 line-clamp-1 hidden md:block"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Tags & Expand Indicator */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    <div className="hidden lg:flex items-center gap-1.5">
                      {details.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-md text-neutral-400 bg-white/[0.03] border border-white/5"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expand Arrow Button */}
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                        color: isOpen ? '#000' : '#fff',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </button>

                {/* Expanded Animated Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5">
                        {/* Description */}
                        <p
                          className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-5"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {service.description}
                        </p>

                        {/* Feature Bullet Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                          {details.perks.map((perk, pIdx) => (
                            <div
                              key={pIdx}
                              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5"
                            >
                              <CheckCircle2 size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                              <span
                                className="text-xs text-neutral-300 leading-snug"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                              >
                                {perk}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Action Bar: Tags + WhatsApp Inquiry CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs text-neutral-400 mr-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              Focus Areas:
                            </span>
                            {details.tags.map(t => (
                              <span
                                key={t}
                                className="text-xs font-semibold px-2.5 py-1 rounded-full text-red-300 bg-red-950/40 border border-red-800/40"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <a
                            href={`https://wa.me/${GYM.whatsapp}?text=Hi! I am interested in joining ${encodeURIComponent(service.name)} at Daya Fitness Club.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                            style={{
                              background: '#25D366',
                              boxShadow: '0 4px 18px rgba(37, 211, 102, 0.4)',
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            <WhatsAppIcon size={16} variant="white" />
                            <span>Inquire for {service.name}</span>
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <motion.div
          className="mt-14 text-center max-w-xl mx-auto p-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4
            className="text-white text-2xl mb-2 font-normal"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.04em' }}
          >
            NOT SURE WHICH PROGRAM FITS YOU?
          </h4>
          <p className="text-neutral-400 text-xs sm:text-sm mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Speak directly with Head Trainer Mohit Sharma & Founder Vikas Singh for a free fitness goal assessment.
          </p>
          <a
            href={`https://wa.me/${GYM.whatsapp}?text=Hi! I want a free fitness goal assessment at Daya Fitness Club.`}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm shadow-xl"
          >
            <span>Book Free Assessment on WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
