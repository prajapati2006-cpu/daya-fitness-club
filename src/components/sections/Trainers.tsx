import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon } from '../SocialIcons';
import { TRAINERS, GYM } from '../../constants/gymData';

function TrainerCard({ trainer, index }: { trainer: typeof TRAINERS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFine) return;

    let rafId: number | null = null;
    let bounds: DOMRect | null = null;

    const onEnter = () => {
      bounds = card.getBoundingClientRect();
    };

    const onMove = (e: MouseEvent) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const x = ((e.clientX - bounds.left) / bounds.width - 0.5) * 12;
      const y = ((e.clientY - bounds.top) / bounds.height - 0.5) * -12;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
      });
    };

    const onLeave = () => {
      bounds = null;
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    card.addEventListener('mouseenter', onEnter, { passive: true });
    card.addEventListener('mousemove', onMove, { passive: true });
    card.addEventListener('mouseleave', onLeave, { passive: true });
    return () => {
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="transform-gpu"
    >
      <div
        ref={cardRef}
        className="rounded-2xl overflow-hidden group cursor-default transition-all duration-300 hover:shadow-[0_20px_60px_rgba(220,38,38,0.25)] hover:border-red-600/50"
        style={{
          background: 'rgba(17,17,17,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Photo area */}
        <div className="relative h-80 sm:h-96 overflow-hidden">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            style={{ filter: 'brightness(0.95)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.15) 55%, transparent 100%)' }} />
          {/* Cert badge */}
          <div className="absolute top-3 right-3 glass-card px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md" style={{ color: 'var(--primary)', fontFamily: "'DM Sans', sans-serif" }}>
            {trainer.cert}
          </div>
        </div>

        {/* Info area */}
        <div className="p-6">
          <h3 className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{trainer.name}</h3>
          <p className="text-xs uppercase tracking-widest mb-1.5 font-semibold" style={{ color: 'var(--primary)', fontFamily: "'DM Sans', sans-serif" }}>
            {trainer.spec}
          </p>
          <p className="text-[#A0A0A0] text-xs mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {trainer.exp} Experience
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {trainer.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ background: 'rgba(220,38,38,0.1)', color: 'var(--primary)', border: '1px solid rgba(220,38,38,0.25)', fontFamily: "'DM Sans', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={GYM.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors group/ig w-fit"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="group-hover/ig:scale-110 transition-transform"><InstagramIcon size={16} /></span>
            <span className="font-medium">{GYM.instagram}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 overflow-hidden" style={{ background: '#080808' }}>
      {/* Ambient Gym Floor Background - subtly fills the empty space without distracting from the trainer card */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/trainer-bg.jpg"
          alt="Daya Fitness Club Interior"
          className="w-full h-full object-cover object-center scale-105"
          style={{
            filter: 'brightness(0.3) contrast(1.15) saturate(0.9)',
          }}
        />
        {/* Dark radial vignette: focuses light in the center and darkens toward the edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.92) 65%, #080808 100%)',
          }}
        />
        {/* Top & bottom blending gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #080808 0%, transparent 18%, transparent 82%, #080808 100%)',
          }}
        />
      </div>

      {/* Horizontal subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.04] z-1 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 60px)',
      }} />

      {/* Red accent glow behind title */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-24 blur-3xl opacity-25 rounded-full z-1 pointer-events-none" style={{ background: 'var(--primary)' }} />

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-badge mx-auto w-fit">MEET THE TEAM</div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Trained by the <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(220,38,38,0.5)' }}>Best</span>
          </h2>
        </motion.div>

        {/* Centered Single Trainer Showcase */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md">
            {TRAINERS.map((trainer, i) => (
              <TrainerCard key={trainer.name} trainer={trainer} index={i} />
            ))}
          </div>
        </div>

        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-[#A0A0A0] text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Want to train with us?
          </p>
          <a
            href={`https://wa.me/${GYM.whatsapp}?text=Hi! I'm interested in personal training with ${TRAINERS[0]?.name || 'Daya Fitness Club'}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn px-8 py-3 rounded-lg text-sm"
          >
            Train with Mohit Pandit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
