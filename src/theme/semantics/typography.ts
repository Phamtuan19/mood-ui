/**
 * Layer 2: Semantic Typography Tokens
 * Purpose-driven typography roles that reference raw tokens.
 */

import { rawTypography } from '../tokens/typography';

export const semanticTypography = {
  /** Default body text */
  body: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.base,
    fontWeight: rawTypography.fontWeight.normal,
    lineHeight: rawTypography.lineHeight.normal,
  },

  /** Large body text (e.g. lead paragraphs) */
  bodyLg: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.lg,
    fontWeight: rawTypography.fontWeight.normal,
    lineHeight: rawTypography.lineHeight.relaxed,
  },

  /** Small body text */
  bodySm: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.sm,
    fontWeight: rawTypography.fontWeight.normal,
    lineHeight: rawTypography.lineHeight.normal,
  },

  /** Extra small body text */
  bodyXs: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.xs,
    fontWeight: rawTypography.fontWeight.normal,
    lineHeight: rawTypography.lineHeight.normal,
  },

  // ── Headings ───────────────────────────────────────────────────────────
  h1: {
    fontFamily: rawTypography.fontFamily.display,
    fontSize:   rawTypography.fontSize['4xl'],
    fontWeight: rawTypography.fontWeight.bold,
    lineHeight: rawTypography.lineHeight.tight,
    letterSpacing: rawTypography.letterSpacing.tight,
  },
  h2: {
    fontFamily: rawTypography.fontFamily.display,
    fontSize:   rawTypography.fontSize['3xl'],
    fontWeight: rawTypography.fontWeight.semibold,
    lineHeight: rawTypography.lineHeight.tight,
    letterSpacing: rawTypography.letterSpacing.tight,
  },
  h3: {
    fontFamily: rawTypography.fontFamily.display,
    fontSize:   rawTypography.fontSize['2xl'],
    fontWeight: rawTypography.fontWeight.semibold,
    lineHeight: rawTypography.lineHeight.snug,
    letterSpacing: rawTypography.letterSpacing.tight,
  },
  h4: {
    fontFamily: rawTypography.fontFamily.display,
    fontSize:   rawTypography.fontSize.xl,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.snug,
  },
  h5: {
    fontFamily: rawTypography.fontFamily.display,
    fontSize:   rawTypography.fontSize.lg,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.normal,
  },
  h6: {
    fontFamily: rawTypography.fontFamily.display,
    fontSize:   rawTypography.fontSize.base,
    fontWeight: rawTypography.fontWeight.semibold,
    lineHeight: rawTypography.lineHeight.normal,
  },

  // ── Labels ──────────────────────────────────────────────────────────────
  label: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.sm,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.normal,
    letterSpacing: rawTypography.letterSpacing.wide,
  },
  labelSm: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.xs,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.normal,
    letterSpacing: rawTypography.letterSpacing.wider,
  },

  // ── Mono / code ─────────────────────────────────────────────────────────
  code: {
    fontFamily: rawTypography.fontFamily.mono,
    fontSize:   rawTypography.fontSize.sm,
    fontWeight: rawTypography.fontWeight.normal,
    lineHeight: rawTypography.lineHeight.normal,
  },
  codeSm: {
    fontFamily: rawTypography.fontFamily.mono,
    fontSize:   rawTypography.fontSize.xs,
    fontWeight: rawTypography.fontWeight.normal,
    lineHeight: rawTypography.lineHeight.normal,
  },

  // ── Button text ────────────────────────────────────────────────────────
  button: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.sm,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.normal,
    letterSpacing: rawTypography.letterSpacing.normal,
  },
  buttonSm: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.xs,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.normal,
    letterSpacing: rawTypography.letterSpacing.wide,
  },
  buttonLg: {
    fontFamily: rawTypography.fontFamily.sans,
    fontSize:   rawTypography.fontSize.base,
    fontWeight: rawTypography.fontWeight.medium,
    lineHeight: rawTypography.lineHeight.normal,
    letterSpacing: rawTypography.letterSpacing.normal,
  },
} as const;

export type SemanticTypography = typeof semanticTypography;
