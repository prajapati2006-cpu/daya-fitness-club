import { WhatsAppIcon } from './SocialIcons';
import { GYM } from '../constants/gymData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${GYM.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      title="Chat with us on WhatsApp"
    >
      <div className="relative w-14 h-14">
        {/* Official WhatsApp Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 scale-100 group-hover:scale-125 transition-transform duration-500 animate-[pulseRing_3s_ease-out_infinite]" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 scale-100 animate-[pulseRing_3s_ease-out_infinite_1s]" />
        
        {/* Official WhatsApp Button */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-10 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: '#25D366',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.55)',
          }}
        >
          <WhatsAppIcon size={32} />
        </div>

        {/* Tooltip */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: 'var(--bg-elevated)', color: '#fff', border: '1px solid var(--border-subtle)', fontFamily: "'DM Sans', sans-serif" }}
        >
          Chat with us on WhatsApp
        </div>
      </div>
    </a>
  );
}
