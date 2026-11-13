import { useEffect, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { GYM } from '../constants/gymData';

export interface LightboxImage {
  src: string;
  category?: string;
  title?: string;
  alt?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate?: (index: number) => void;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) {
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;
  const currentImage = images[currentIndex] || images[0];

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    const nextIdx = (currentIndex - 1 + total) % total;
    onNavigate?.(nextIdx);
    setLoading(true);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    const nextIdx = (currentIndex + 1) % total;
    onNavigate?.(nextIdx);
    setLoading(true);
  }, [currentIndex, total, onNavigate]);

  // Lock body scroll while lightbox is active
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Reset loading when image changes
  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  // Mobile swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 45;
    if (isSwipe) {
      if (distance > 0) {
        handleNext(); // Swiped left -> next
      } else {
        handlePrev(); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || typeof document === 'undefined' || !currentImage) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999999] flex flex-col items-center justify-between select-none"
        style={{
          background: 'rgba(0, 0, 0, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Top Header Bar */}
        <div
          className="w-full flex items-center justify-between px-4 sm:px-8 py-4 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Badge / Category */}
          <div className="flex items-center gap-3">
            {currentImage.category && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {currentImage.category}
              </span>
            )}
            <span
              className="text-xs sm:text-sm text-neutral-300 font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {currentIndex + 1} of {total}
            </span>
          </div>

          {/* Close button with large touch target */}
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 active:scale-95 transition-all border border-white/15 shadow-lg"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>
        </div>

        {/* Center Image Area */}
        <div className="relative w-full flex-1 flex items-center justify-center px-2 sm:px-14 overflow-hidden">
          {/* Left Arrow (Desktop / Tablet) */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-white bg-black/60 hover:bg-black/90 active:scale-90 border border-white/20 shadow-2xl transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative flex items-center justify-center max-w-[94vw] max-h-[76vh] sm:max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-400">
                <Loader2 className="w-8 h-8 animate-spin text-red-600" />
                <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Loading image...
                </span>
              </div>
            )}

            <motion.img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt || currentImage.category || 'Daya Fitness Club facility photo'}
              onLoad={() => setLoading(false)}
              className="max-w-[94vw] max-h-[76vh] sm:max-h-[82vh] sm:max-w-5xl object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: loading ? 0 : 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            />
          </div>

          {/* Right Arrow (Desktop / Tablet) */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-white bg-black/60 hover:bg-black/90 active:scale-90 border border-white/20 shadow-2xl transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>

        {/* Bottom Bar: Caption & Quick WhatsApp Inquiry */}
        <div
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-8 py-3.5 z-20 bg-black/40 backdrop-blur-md border-t border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center sm:text-left">
            <p
              className="text-white text-xs sm:text-sm font-semibold tracking-wide"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {currentImage.title || `Daya Fitness Club • ${currentImage.category || 'Facility'}`}
            </p>
            <p className="text-neutral-400 text-[11px] hidden sm:block">
              Swipe or use arrow keys to browse photos
            </p>
          </div>

          <a
            href={`https://wa.me/${GYM.whatsapp}?text=Hi%20Daya%20Fitness%20Club,%20I%20am%20interested%20in%20your%20facility%20(${encodeURIComponent(currentImage.category || 'Gym')})`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white transition-all hover:scale-105 shadow-md"
            style={{
              background: '#25D366',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <WhatsAppIcon size={16} variant="white" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

