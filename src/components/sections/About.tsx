import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { InstagramIcon } from '../SocialIcons';
import { GYM } from '../../constants/gymData';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: '#090909' }}>
      <div className="section-wrapper">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image stack replaced with premium framed photo */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Ambient Background Glow */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(220,38,38,0.3) 0%, transparent 70%)',
              }}
            />

            {/* Premium Framed Image */}
            <div
              className="relative w-full max-w-[480px] aspect-[4/5] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden group shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#121212',
              }}
            >
              <img
                src="/about.jpg"
                alt="Daya Fitness Club Reception"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              />

              {/* Cinematic Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.05) 45%, transparent 100%)',
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 35px rgba(0,0,0,0.35)',
                }}
              />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 glass-card px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10 backdrop-blur-md bg-black/60 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Official Facility
                </span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 inset-x-5 glass-card p-4 rounded-xl border border-white/10 backdrop-blur-md bg-black/70 flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-white text-base font-bold tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Vikas Singh
                  </p>
                  <p className="text-[#A0A0A0] text-xs mt-0.5">
                    Founder & Owner
                  </p>
                </div>
                <a
                  href={GYM.ownerInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 hover:border-pink-500/50 hover:scale-110 transition-all hover:shadow-[0_0_12px_rgba(225,48,108,0.4)]"
                  title="Follow Vikas Singh on Instagram (@_vikas_noida)"
                >
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="section-badge w-fit mb-4">OUR STORY</div>
              <h2 className="mb-6" style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                More Than a Gym. A{' '}
                <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(249,115,22,0.4)' }}>Community.</span>
              </h2>
              <p className="text-[#A0A0A0] mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {GYM.name} has been the fitness home of {GYM.city} since {GYM.yearOpened}. What started as a dream to bring world-class fitness to Noida has grown into a community of {GYM.memberCount} members forging their legacy every single day.
              </p>
            </motion.div>

            <motion.ul className="space-y-4 mb-8" variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {GYM.usps.map(usp => (
                <motion.li key={usp} className="flex items-center gap-3" variants={itemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid var(--primary)' }}>
                    <Check size={12} color="#DC2626" strokeWidth={3} />
                  </div>
                  <span className="text-white font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{usp}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="glass-card rounded-xl p-6 mb-8 relative overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <span className="absolute top-2 left-3 text-6xl text-[var(--primary)] opacity-20 font-serif leading-none">"</span>
              <p className="text-white text-lg italic leading-relaxed pl-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We don't just build bodies. We build discipline, resilience, and legacy.
              </p>
            </motion.div>

            <motion.a href="#contact" className="glow-btn px-8 py-4 text-base rounded-md font-bold inline-flex" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Join Our Community →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
