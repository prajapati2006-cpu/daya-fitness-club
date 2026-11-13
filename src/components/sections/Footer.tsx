import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../SocialIcons';
import { GYM, GALLERY_IMAGES } from '../../constants/gymData';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Facility', href: '#facility' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const miniPhotos = GALLERY_IMAGES.slice(0, 4);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#060606' }}>
      {/* Film reel divider strip */}
      <div className="h-10 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex h-full" style={{ animation: 'marqueeScroll 20s linear infinite', width: 'max-content' }}>
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
            <img key={i} src={img.src} alt="" className="h-full w-20 object-cover flex-shrink-0 opacity-30" />
          ))}
        </div>
      </div>

      {/* BG photo */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=20" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.06)' }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt={GYM.name}
                className="h-11 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(220,38,38,0.3))' }}
              />
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Noida's premier fitness destination. {GYM.tagline} at {GYM.address}.
            </p>
            {/* Social Media Logos in official brand colors with embedded profile links */}
            <div className="flex items-center gap-3 mb-4">
              <a
                href={GYM.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-pink-500/50 hover:scale-110 hover:shadow-[0_0_16px_rgba(225,48,108,0.45)] transition-all"
                title="Instagram (@dayafitnessclub)"
              >
                <InstagramIcon size={22} />
              </a>
              <a
                href={GYM.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-blue-500/50 hover:scale-110 hover:shadow-[0_0_16px_rgba(24,119,242,0.45)] transition-all"
                title="Facebook (Daya Fitness Club)"
              >
                <FacebookIcon size={22} />
              </a>
              <a
                href={`https://wa.me/${GYM.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-green-500/50 hover:scale-110 hover:shadow-[0_0_16px_rgba(37,211,102,0.45)] transition-all"
                title="WhatsApp (+91 7979867756)"
              >
                <WhatsAppIcon size={22} />
              </a>
            </div>
            <a
              href={GYM.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm transition-colors group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="group-hover:scale-110 transition-transform"><InstagramIcon size={16} /></span>
              <span className="font-medium">{GYM.instagram}</span>
            </a>
          </div>

          {/* Center - Quick links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A0A0A0] text-sm hover:text-[#F97316] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Mini Instagram gallery */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Gallery</h4>
            <div className="grid grid-cols-2 gap-2">
              {miniPhotos.map((photo, i) => (
                <a
                  key={i}
                  href={GYM.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg overflow-hidden group"
                  style={{ aspectRatio: '1' }}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-75 transition-all duration-300"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#555]"
          style={{ borderTop: '1px solid var(--primary)', fontFamily: "'DM Sans', sans-serif" }}
        >
          <p>© {year} {GYM.name}. All rights reserved.</p>
          <p>
            Website by{' '}
            <a
              href="https://vayramedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:underline font-semibold transition-colors"
            >
              Vayra Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
