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
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
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
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
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
 * Official WhatsApp Icon with authentic WhatsApp Green (#25D366) and white phone bubble
 */
export function WhatsAppIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"
      />
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.51.07-.77.36-.26.29-1.02.99-1.02 2.42 0 1.43 1.04 2.82 1.19 3.01.15.19 2.05 3.13 4.97 4.39 2.92 1.26 2.92.84 3.45.79.53-.05 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z"
      />
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
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 7.5l6 4.5-6 4.5V7.5z" fill="#FFFFFF" />
    </svg>
  );
}
