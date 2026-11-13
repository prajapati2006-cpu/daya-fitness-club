import { WhatsAppIcon } from './SocialIcons';
import { GYM } from '../constants/gymData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${GYM.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center justify-center select-none"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
        {/* Symmetric centered ripple pulse */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none animate-ping opacity-30"
          style={{ background: '#25D366', animationDuration: '2.5s' }}
        />

        {/* Authentic WhatsApp Floating Button with exactly ONE iconic white speech bubble & phone receiver */}
        <div
          className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #2ae771 0%, #25D366 55%, #1ebe5d 100%)',
            boxShadow: '0 8px 24px -2px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0, 0, 0, 0.45)',
          }}
        >
          <WhatsAppIcon size={34} variant="white" className="w-8 h-8 sm:w-9 sm:h-9" />
        </div>

        {/* Tooltip */}
        <div
          className="absolute right-18 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10"
          style={{ background: '#121212', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}
        >
          Chat with us on WhatsApp
        </div>
      </div>
    </a>
  );
}
