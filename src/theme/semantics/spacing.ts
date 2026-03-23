/**
 * Layer 2: Semantic Spacing Tokens
 * Purpose-driven spacing that references raw spacing.
 */

import { rawSpacing } from '../tokens/spacing';

export const semanticSpacing = {
  // ── Component-level spacing ────────────────────────────────────────────
  component: {
    /** Button padding (vertical × horizontal) */
    button: {
      sm: `${rawSpacing[1]} ${rawSpacing[2]}`,
      md: `${rawSpacing[1.5]} ${rawSpacing[4]}`,
      lg: `${rawSpacing[2]} ${rawSpacing[6]}`,
    },
    /** Input padding */
    input: {
      sm: `${rawSpacing[1]} ${rawSpacing[2]}`,
      md: `${rawSpacing[2]} ${rawSpacing[3]}`,
      lg: `${rawSpacing[2.5]} ${rawSpacing[4]}`,
    },
    /** Badge padding */
    badge: {
      sm: `${rawSpacing[0.5]} ${rawSpacing[1]}`,
      md: `${rawSpacing[1]} ${rawSpacing[2]}`,
      lg: `${rawSpacing[1.5]} ${rawSpacing[3]}`,
    },
    /** Card padding */
    card: {
      sm: rawSpacing[3],
      md: rawSpacing[4],
      lg: rawSpacing[6],
    },
    /** Modal padding */
    modal: {
      header: rawSpacing[5],
      body:   rawSpacing[6],
      footer: rawSpacing[5],
    },
    /** Alert padding */
    alert: {
      sm: `${rawSpacing[1.5]} ${rawSpacing[3]}`,
      md: `${rawSpacing[2]} ${rawSpacing[4]}`,
      lg: `${rawSpacing[3]} ${rawSpacing[5]}`,
    },
  },

  // ── Stack / gap spacing ────────────────────────────────────────────────
  stack: {
    tight:  rawSpacing[2],   // 8px
    base:   rawSpacing[4],   // 16px
    loose:  rawSpacing[6],   // 24px
    loose2: rawSpacing[8],   // 32px
  },

  // ── Section / layout spacing ──────────────────────────────────────────
  section: {
    sm: rawSpacing[8],   // 32px
    md: rawSpacing[12], // 48px
    lg: rawSpacing[16], // 64px
    xl: rawSpacing[24], // 96px
  },

  // ── Container ─────────────────────────────────────────────────────────
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
  },

  // ── Icon sizing ────────────────────────────────────────────────────────
  icon: {
    xs: '12px',
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '32px',
  },

  // ── Focus ring ─────────────────────────────────────────────────────────
  focus: {
    ringWidth: '2px',
    ringOffset: '2px',
    ringColor: 'currentColor',
  },
} as const;

export type SemanticSpacing = typeof semanticSpacing;
