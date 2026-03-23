/**
 * Layer 1: Raw Shadow Tokens
 * Elevation scale for depth perception.
 */

export const rawShadow = {
  none: 'none',

  /** xs through sm: subtle elevation */
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',

  /** md: card / modal level */
  md: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',

  /** lg: dropdown / popover */
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)',

  /** xl: heavy overlay */
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',

  /** 2xl: maximum depth */
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.18)',

  /** Inner shadows */
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',

  /** Colored shadows (brand) */
  primary: '0 4px 14px 0 rgb(59 130 246 / 0.35)',
} as const;

export type RawShadowKey = keyof typeof rawShadow;
