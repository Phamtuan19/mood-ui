/**
 * Layer 1: Raw Typography Tokens
 * Font sizes, weights, line heights, and letter spacing.
 * Font families are intentionally generic — override per-theme.
 */

export const rawTypography = {
  /** Font families — consumers can override these in their theme */
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    serif: "'Georgia', Cambria, 'Times New Roman', Times, serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, Consolas, monospace",
    display: "'Inter', sans-serif",
  },

  /** Font sizes — mobile-first scale */
  fontSize: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },

  /** Font weights */
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  /** Line heights */
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  /** Letter spacing */
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export type RawFontFamily = keyof typeof rawTypography.fontFamily;
export type RawFontSize = keyof typeof rawTypography.fontSize;
export type RawFontWeight = keyof typeof rawTypography.fontWeight;
export type RawLineHeight = keyof typeof rawTypography.lineHeight;
export type RawLetterSpacing = keyof typeof rawTypography.letterSpacing;
