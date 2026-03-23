/**
 * Layer 1: Raw Border Radius Tokens
 * Consistent rounded corners scale.
 */

export const rawRadius = {
  none: '0',
  sm: '2px',
  DEFAULT: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const;

/** Radius shortcuts for specific components */
export const rawRadiusAlias = {
  button: 'md',
  input: 'md',
  card: 'xl',
  modal: '2xl',
  badge: 'full',
  avatar: 'full',
} as const;

export type RawRadiusKey = keyof typeof rawRadius;
