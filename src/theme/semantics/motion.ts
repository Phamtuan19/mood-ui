/**
 * Layer 2: Semantic Motion Tokens
 * Purpose-driven motion/transition roles.
 */

import { rawMotion } from '../tokens/motion';

export const semanticMotion = {
  /** Fast transitions for micro-interactions (hover, toggle) */
  fast: {
    duration: rawMotion.duration[150],
    easing:   rawMotion.easing.out,
  },

  /** Normal transitions for state changes (color, bg) */
  normal: {
    duration: rawMotion.duration[200],
    easing:   rawMotion.easing.out,
  },

  /** Slow transitions for layout shifts (height, width) */
  slow: {
    duration: rawMotion.duration[300],
    easing:   rawMotion.easing.inOut,
  },

  /** Very slow for page-level transitions */
  page: {
    duration: rawMotion.duration[500],
    easing:   rawMotion.easing.inOut,
  },

  // ── Specific interaction timing ────────────────────────────────────────
  interaction: {
    /** Hover color/opacity changes */
    hover: {
      duration: rawMotion.duration[100],
      easing:   rawMotion.easing.out,
    },
    /** Button press feedback */
    press: {
      duration: rawMotion.duration[75],
      easing:   rawMotion.easing.in,
    },
    /** Focus ring appearance */
    focus: {
      duration: rawMotion.duration[150],
      easing:   rawMotion.easing.out,
    },
    /** Menu/dropdown open */
    menuOpen: {
      duration: rawMotion.duration[200],
      easing:   rawMotion.easing.out,
    },
    /** Modal/drawer open */
    overlayOpen: {
      duration: rawMotion.duration[300],
      easing:   rawMotion.easing.inOut,
    },
    /** Toast entrance */
    toastEnter: {
      duration: rawMotion.duration[250],
      easing:   rawMotion.easing.out,
    },
    /** Toast exit */
    toastExit: {
      duration: rawMotion.duration[200],
      easing:   rawMotion.easing.in,
    },
    /** Tooltip appearance delay */
    tooltipDelay: rawMotion.duration[400],
  },

  // ── Animation keyframes reference ─────────────────────────────────────
  keyframes: rawMotion.keyframes,
} as const;

export type SemanticMotion = typeof semanticMotion;
