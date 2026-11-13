import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { GYM } from '../../constants/gymData';

export default function Location() {
  const [mapActive, setMapActive] = useState(false);

  return (
    <section id="location" className="relative py-24 overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 section-wrapper">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.02em', lineHeight: 1 }}>
            Find <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(220,38,38,0.4)' }}>{GYM.name}</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden group shadow-2xl"
          style={{ border: '2px solid rgba(220,38,38,0.25)', height: '480px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseLeave={() => setMapActive(false)}
        >
          {/* Google Maps embed - pointer-events conditionally disabled to prevent mobile touch-scroll lock */}
          <iframe
            title={`${GYM.name} Location`}
            src="https://maps.google.com/maps?q=Ambedkar+City+Road+Sector+123+Noida+Uttar+Pradesh+201304&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className={`transition-all duration-300 ${mapActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Interactive toggle prompt overlay when map is locked */}
          {!mapActive && (
            <button
              onClick={() => setMapActive(true)}
              className="absolute bottom-4 right-4 z-20 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-black/80 hover:bg-black border border-white/20 backdrop-blur-md transition-all shadow-lg flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Navigation size={14} className="text-red-500" />
              <span>Tap to interact with map</span>
            </button>
          )}

          {/* Gym info card overlay */}
          <div
            className="absolute top-4 left-4 glass-card rounded-xl p-4 max-w-xs z-20"
            style={{ background: 'rgba(8,8,8,0.92)', border: '1px solid rgba(220,38,38,0.3)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5" style={{ background: 'rgba(220,38,38,0.15)' }}>
                <img src="/logo-icon.png" alt="Daya Fitness Club" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{GYM.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">⭐</span>
                  <span className="text-white text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>4.8</span>
                  <span className="text-[#A0A0A0] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>(Google Rating)</span>
                </div>
              </div>
            </div>
            <p className="text-[#A0A0A0] text-xs mb-3 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {GYM.address}
            </p>
            <a
              href={GYM.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn w-full justify-center py-2 rounded-lg text-xs font-bold"
            >
              Get Directions →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
