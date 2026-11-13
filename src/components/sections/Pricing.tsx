import { motion } from 'framer-motion';
import { WhatsAppIcon } from '../SocialIcons';
import { GYM } from '../../constants/gymData';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24 overflow-hidden" style={{ background: '#090909' }}>
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] opacity-25 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #22c55e 0%, var(--primary) 60%, transparent 100%)' }}
      />

      <div className="relative z-10 section-wrapper">
        <motion.div
          className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden"
          style={{
            background: 'rgba(15, 15, 15, 0.96)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(34, 197, 94, 0.1)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle top edge accent line */}
          <div
            className="absolute top-0 inset-x-0 h-1"
            style={{
              background: 'linear-gradient(90deg, transparent, #22c55e, var(--primary), transparent)',
            }}
          />

          {/* Headline */}
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.04em' }}
          >
            READY TO TRANSFORM YOURSELF?
          </h2>

          {/* Body Paragraph */}
          <p
            className="text-[#D1D5DB] text-base sm:text-lg md:text-xl leading-relaxed mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Your fitness journey starts here! Get in touch with <span className="text-white font-bold tracking-wide">DAYA FITNESS CLUB</span> to discover exclusive membership offers and special seasonal discounts.
          </p>

          {/* Sub-headline Callout */}
          <p
            className="text-[#22C55E] text-base sm:text-lg md:text-xl font-extrabold tracking-wide uppercase mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            JOIN THE DAYA FITNESS FAMILY TODAY!
          </p>

          {/* Full-width WhatsApp CTA Button */}
          <motion.a
            href={`https://wa.me/${GYM.whatsapp}?text=Hi! I want to join Daya Fitness Club and know about exclusive membership offers and seasonal discounts.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 sm:py-4.5 px-8 rounded-2xl text-white font-bold text-base sm:text-lg shadow-xl transition-all duration-300"
            style={{
              background: '#22c55e',
              boxShadow: '0 8px 30px rgba(34, 197, 94, 0.45)',
              fontFamily: "'DM Sans', sans-serif",
            }}
            whileHover={{ scale: 1.02, background: '#16a34a', boxShadow: '0 12px 35px rgba(34, 197, 94, 0.65)' }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsAppIcon size={24} />
            <span>Chat With Us on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
