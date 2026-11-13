import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { GYM } from '../constants/gymData';

export default function StickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.9)]"
      style={{
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Gym Button */}
        <a
          href={`tel:${GYM.rawPhone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 active:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-md"
        >
          <Phone size={15} className="text-red-500 fill-red-500/20" />
          <span>Call Gym</span>
        </a>

        {/* Free Trial WhatsApp Button */}
        <a
          href={`https://wa.me/${GYM.whatsapp}?text=Hi%20Daya%20Fitness%20Club,%20I%20want%20to%20claim%20my%20Free%201-Day%20Trial%20Pass!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-lg shadow-green-500/25"
          style={{
            background: 'linear-gradient(135deg, #2ae771 0%, #25D366 50%, #1ebe5d 100%)',
          }}
        >
          <WhatsAppIcon size={16} variant="white" />
          <span>Free Trial Pass</span>
        </a>
      </div>
    </div>
  );
}

