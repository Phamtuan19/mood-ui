/**
 * Layer 1: Raw Motion Tokens
 * Animation and transition timing.
 */

export const rawMotion = {
  /** Transition durations */
  duration: {
    0: '0s',
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    250: '250ms',
    300: '300ms',
    350: '350ms',
    400: '400ms',
    500: '500ms',
    600: '600ms',
    700: '700ms',
    800: '800ms',
    900: '900ms',
    1000: '1000ms',
  },

  /** CSS easing functions */
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    'spring-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    'spring-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  /** Named animation keyframes */
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    slideInFromTop: {
      from: { transform: 'translateY(-10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideInFromBottom: {
      from: { transform: 'translateY(10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideInFromLeft: {
      from: { transform: 'translateX(-10px)', opacity: '0' },
      to: { transform: 'translateX(0)', opacity: '1' },
    },
    slideInFromRight: {
      from: { transform: 'translateX(10px)', opacity: '0' },
      to: { transform: 'translateX(0)', opacity: '1' },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
  },
} as const;

export type RawDurationKey = keyof typeof rawMotion.duration;
export type RawEasingKey = keyof typeof rawMotion.easing;
