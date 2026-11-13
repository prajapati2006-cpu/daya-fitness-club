import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GYM, SERVICES } from '../../constants/gymData';

function CountUp({ target, suffix = '', duration = 2200 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { label: 'Years of Excellence', value: new Date().getFullYear() - GYM.yearOpened, suffix: '+' },
  { label: 'Happy Members', value: 160, suffix: '+' },
  { label: 'Certified Experts', value: 12, suffix: '+' },
  { label: 'Facilities Offered', value: SERVICES.length, suffix: '' },
];

export default function Stats() {
  return (
    <section className="relative py-8 sm:py-12 overflow-hidden border-y border-white/5" style={{ background: '#0a0a0a' }}>
      {/* Subtle Dark Vignette Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=30')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.12)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #0a0a0a 0%, transparent 20%, transparent 80%, #0a0a0a 100%)',
          }}
        />
      </div>

      {/* Compact Content Container - tightly fits numbers & labels with zero wasted space */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-white/10 items-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center px-4 py-2 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Counter Number */}
              <div
                className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-none mb-2"
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  color: 'var(--primary)',
                  textShadow: '0 0 35px rgba(220,38,38,0.5)',
                  letterSpacing: '0.03em',
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Stat Label */}
              <p
                className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.14em' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
