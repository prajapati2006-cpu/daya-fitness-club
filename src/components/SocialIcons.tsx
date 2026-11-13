import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

/**
 * Official Instagram Icon with authentic brand gradient
 * (Sunset: yellow -> orange -> red -> pink -> purple)
 */
export function InstagramIcon({ size = 20, className = '' }: IconProps) {
  const gradientId = React.useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <defs>
        <radialGradient
          id={`${gradientId}-ig`}
          cx="30%"
          cy="105%"
          r="125%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="50%" stopColor="#fd5949" />
          <stop offset="68%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      {/* Gradient background with rounded square */}
      <rect width="24" height="24" rx="6.5" fill={`url(#${gradientId}-ig)`} />
      {/* Camera outline */}
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="4.8"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Camera lens */}
      <circle cx="12" cy="12" r="4.2" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      {/* Flash point */}
      <circle cx="17.3" cy="6.7" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Official Facebook Icon with authentic Facebook Blue (#1877F2) and white 'f'
 */
export function FacebookIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.1 12.8l.5-3.3h-3.2V7.3c0-.9.4-1.8 1.8-1.8h1.4V2.7s-1.3-.2-2.5-.2c-2.5 0-4.2 1.5-4.2 4.3v2.7H6v3.3h2.9V21c.6.1 1.2.1 1.8.1s1.2 0 1.8-.1v-8.2h2.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official WhatsApp Icon
 * Uses the authentic official WhatsApp vector (speech bubble with bottom-left tail & telephone receiver)
 * - variant="brand": Official WhatsApp Green (#25D366) circular badge with crisp white speech bubble + handset
 * - variant="white": Pure white WhatsApp speech bubble + handset (for placement on green CTA buttons)
 */
export function WhatsAppIcon({
  size = 24,
  className = '',
  variant = 'brand',
}: IconProps & { variant?: 'brand' | 'white' }) {
  if (variant === 'white') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#FFFFFF"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Official WhatsApp Green Circular Badge */}
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      {/* Official WhatsApp White Speech Bubble & Receiver */}
      <g transform="translate(3.6, 3.6) scale(0.7)">
        <path
          fill="#FFFFFF"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        />
      </g>
    </svg>
  );
}

/**
 * Official YouTube Icon with authentic YouTube Red (#FF0000) and white play triangle
 */
export function YouTubeIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 7.5l6 4.5-6 4.5V7.5z" fill="#FFFFFF" />
    </svg>
  );
}
