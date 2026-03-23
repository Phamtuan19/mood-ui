/**
 * Layer 2: Semantic Color Tokens
 * Maps raw palette colors to purpose-driven meanings.
 * Reference: Layer 1 (rawColor) — this module is pure TypeScript.
 */

import { rawColor } from '../tokens/color';

// ---------------------------------------------------------------------------
// Semantic color mapping
// ---------------------------------------------------------------------------

/** Maps raw palette key → shade used for each semantic role */
const PALETTE_MAP = {
  primary:   { palette: 'blue',   shade: 500 } as const,
  secondary: { palette: 'gray',   shade: 500 } as const,
  success:   { palette: 'emerald',shade: 500 } as const,
  warning:   { palette: 'amber',  shade: 500 } as const,
  danger:    { palette: 'red',    shade: 500 } as const,
  info:      { palette: 'sky',    shade: 500 } as const,
  purple:    { palette: 'violet', shade: 500 } as const,
  pink:      { palette: 'pink',  shade: 500 } as const,
} as const;

type SemanticPalette = keyof typeof PALETTE_MAP;
type SemanticShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

function resolve(palette: SemanticPalette, shade: SemanticShade): string {
  const { palette: paletteKey } = PALETTE_MAP[palette];
  return (rawColor[paletteKey] as Record<number, string>)[shade] as string;
}

/** Builds a full color scale (50–950) for a given semantic palette */
function scale(palette: SemanticPalette): Record<SemanticShade, string> {
  const shades: SemanticShade[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return Object.fromEntries(shades.map(s => [s, resolve(palette, s)])) as Record<SemanticShade, string>;
}

// ---------------------------------------------------------------------------
// Semantic token object — consumed by theme contract
// ---------------------------------------------------------------------------

export const semanticColor = {
  // ── Brand / accent — full scales (50–950) ────────────────────────────────
  primary:   scale('primary'),
  secondary: scale('secondary'),
  success:   scale('success'),
  warning:   scale('warning'),
  danger:    scale('danger'),
  info:      scale('info'),
  purple:    scale('purple'),
  pink:      scale('pink'),

  // ── Brand / accent — shorthand aliases (500) ────────────────────────────
  primarySolid:     resolve('primary',   500),
  primaryHover:     resolve('primary',   600),
  primaryActive:    resolve('primary',   700),
  primaryFg:        rawColor.white,

  secondarySolid:   resolve('secondary', 500),
  secondaryHover:   resolve('secondary', 600),
  secondaryFg:      rawColor.white,

  // ── Status / feedback — shorthand aliases ─────────────────────────────────
  successSolid:    resolve('success',   500),
  successBg:       resolve('success',   50),
  successFg:       resolve('success',   700),

  warningSolid:    resolve('warning',   500),
  warningBg:       resolve('warning',   50),
  warningFg:       resolve('warning',   700),

  dangerSolid:     resolve('danger',    500),
  dangerBg:        resolve('danger',    50),
  dangerFg:        resolve('danger',    700),

  infoSolid:       resolve('info',       500),
  infoBg:         resolve('info',       50),
  infoFg:         resolve('info',       700),

  purpleSolid:     resolve('purple',     500),
  purpleBg:       resolve('purple',     50),
  purpleFg:       resolve('purple',     700),

  pinkSolid:      resolve('pink',       500),
  pinkBg:         resolve('pink',       50),
  pinkFg:         resolve('pink',       700),

  // ── Surface / background ──────────────────────────────────────────────
  /** Page background */
  canvas:         rawColor.white,
  /** Card, modal, dropdown background */
  surface:        rawColor.gray[50],
  /** Elevated surface (e.g. sidebar, header) */
  surfaceRaised:  rawColor.gray[100],
  /** Subtle tint for hover states */
  surfaceOverlay: rawColor.gray[50],

  // ── Text ───────────────────────────────────────────────────────────────
  text: {
    primary:   rawColor.gray[900],
    secondary: rawColor.gray[600],
    muted:     rawColor.gray[400],
    inverse:   rawColor.white,
    disabled:  rawColor.gray[300],
    placeholder: rawColor.gray[400],
  },

  // ── Borders ───────────────────────────────────────────────────────────
  border: {
    /** Default border color */
    default:   rawColor.gray[200],
    /** Stronger border for emphasis */
    strong:    rawColor.gray[300],
    /** Subtle border for dividers */
    muted:     rawColor.gray[100],
    /** Focus ring color (matches primary) */
    focus:     resolve('primary', 500),
    /** Error state border */
    danger:    resolve('danger', 500),
    /** Success state border */
    success:   resolve('success', 500),
  },

  // ── Overlay ────────────────────────────────────────────────────────────
  overlay: {
    light: 'rgba(0, 0, 0, 0.04)',
    dark:  'rgba(0, 0, 0, 0.40)',
    heavy: 'rgba(0, 0, 0, 0.60)',
  },

  // ── Action shortcuts ───────────────────────────────────────────────────
  /** Primary action color */
  action: {
    primary:  resolve('primary',   500),
    secondary: resolve('secondary', 500),
    danger:   resolve('danger',    500),
    ghost:    rawColor.transparent,
  },

  // ── Shadow tint colors ─────────────────────────────────────────────────
  shadow: {
    primary: `0 4px 14px 0 ${resolve('primary', 500)}40`,
    danger:  `0 4px 14px 0 ${resolve('danger', 500)}40`,
  },

  // ── Gradient ───────────────────────────────────────────────────────────
  gradient: {
    primary: `linear-gradient(135deg, ${resolve('primary', 500)}, ${resolve('primary', 700)})`,
    surface: `linear-gradient(to bottom, ${rawColor.gray[50]}, ${rawColor.white})`,
  },
} as const;

export type SemanticColor = typeof semanticColor;
