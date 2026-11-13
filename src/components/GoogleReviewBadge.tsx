import { Star, ExternalLink } from 'lucide-react';
import { GYM } from '../constants/gymData';

export function GoogleGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

interface GoogleReviewBadgeProps {
  variant?: 'pill' | 'card' | 'hero';
  className?: string;
}

export default function GoogleReviewBadge({ variant = 'pill', className = '' }: GoogleReviewBadgeProps) {
  if (variant === 'hero') {
    return (
      <a
        href={GYM.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="View verified reviews on Google Maps"
        className={`group inline-flex items-center gap-2.5 text-xs text-[#E5E7EB] bg-black/80 hover:bg-black/95 active:scale-98 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 hover:border-amber-400/40 transition-all duration-300 shadow-xl ${className}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <GoogleGIcon size={16} />
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={11} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <span className="font-bold text-white ml-0.5">4.8</span>
        </div>
        <span className="text-white/30">•</span>
        <span className="text-neutral-300 group-hover:text-amber-300 transition-colors">
          120+ Google Reviews
        </span>
        <ExternalLink size={12} className="text-neutral-400 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 border border-white/10 bg-gradient-to-r from-neutral-900/90 to-neutral-950/90 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto ${className}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
            <GoogleGIcon size={24} />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base sm:text-lg">Google Verified Rating</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                Live GMB
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="font-bold text-white text-sm">4.8 / 5.0</span>
              <span className="text-neutral-400 text-xs">• 120+ Verified Reviews</span>
            </div>
          </div>
        </div>

        <a
          href={GYM.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-300 hover:scale-105 shadow-md whitespace-nowrap active:scale-95"
        >
          <span>Read on Google Maps</span>
          <ExternalLink size={13} />
        </a>
      </div>
    );
  }

  // Pill variant
  return (
    <a
      href={GYM.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 transition-all duration-300 text-white ${className}`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <GoogleGIcon size={14} />
      <span className="text-amber-400 font-bold">4.8 ★</span>
      <span className="text-neutral-300">Google Reviews</span>
      <ExternalLink size={11} className="text-neutral-400 group-hover:text-white" />
    </a>
  );
}
