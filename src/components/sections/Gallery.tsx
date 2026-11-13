import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { InstagramIcon } from '../SocialIcons';
import ImageLightbox from '../ImageLightbox';
import { GALLERY_IMAGES, GYM } from '../../constants/gymData';

const TABS = ['ALL', 'GYM FLOOR', 'CARDIO', 'FACILITY'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === 'ALL'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  const lightboxImages = filtered.map(img => ({
    src: img.src,
    category: img.category,
    title: `Daya Fitness Club • ${img.category}`,
    alt: `Daya Fitness Club ${img.category} photo`,
  }));

  return (
    <section id="gallery" className="relative py-20 sm:py-24 overflow-hidden" style={{ background: '#080808' }}>
      <div className="section-wrapper">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge mx-auto w-fit">INSIDE DAYA FITNESS CLUB</div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(40px, 6vw, 72px)',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            See It to{' '}
            <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(220,38,38,0.5)' }}>
              Believe It
            </span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mb-8 sm:mb-10 px-2">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: activeTab === tab ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: activeTab === tab ? '#FFFFFF' : '#A0A0A0',
                border: activeTab === tab ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                className="masonry-item relative overflow-hidden rounded-xl group cursor-pointer transform-gpu"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ height: img.tall ? '320px' : '220px' }}
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover overlay with search zoom affordance */}
                <div
                  className="absolute inset-0 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.55)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center border border-white/20 shadow-xl">
                    <Search size={22} color="var(--primary)" />
                  </div>
                </div>

                {/* Category tag */}
                <div
                  className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full shadow-md"
                  style={{
                    background: 'var(--primary)',
                    color: '#FFFFFF',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {img.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A0A0A0] text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Follow us for daily updates
          </p>
          <a
            href={GYM.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            style={{
              background: 'linear-gradient(45deg, rgba(240,148,51,0.18) 0%, rgba(225,48,108,0.18) 50%, rgba(188,24,136,0.18) 100%)',
              border: '1px solid rgba(225,48,108,0.45)',
              color: '#FFFFFF',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <InstagramIcon size={18} />
            <span>{GYM.instagram}</span>
          </a>
        </motion.div>
      </div>

      {/* Modern Portaled Lightbox (Fixed directly to viewport, 100% visible on mobile) */}
      <ImageLightbox
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        images={lightboxImages}
        currentIndex={lightboxIndex ?? 0}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
