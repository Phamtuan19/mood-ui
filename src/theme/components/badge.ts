/**
 * Layer 3: Component Tokens — Badge
 * Component-specific design decisions referencing semantic tokens.
 */

import { rawRadiusAlias } from '../tokens/radius';
import { rawColor } from '../tokens/color';
import { semanticColor } from '../semantics/color';
import { semanticTypography } from '../semantics/typography';
import { semanticSpacing } from '../semantics/spacing';

export const componentBadge = {
  // ── Defaults ───────────────────────────────────────────────────────────
  defaultVariant:  'subtle',
  defaultIntent:   'primary',
  defaultSize:     'md',
  defaultDotColor: 'primary',

  // ── Sizes ─────────────────────────────────────────────────────────────
  padding: {
    sm: semanticSpacing.component.badge.sm,
    md: semanticSpacing.component.badge.md,
    lg: semanticSpacing.component.badge.lg,
  },

  // ── Border radius ─────────────────────────────────────────────────────
  borderRadius: {
    sm: rawRadiusAlias.badge,
    md: rawRadiusAlias.badge,
    lg: rawRadiusAlias.badge,
    full: '9999px',
    none: '0',
    pill: '9999px',
    rounded: rawRadiusAlias.badge,
  },

  // ── Typography ─────────────────────────────────────────────────────────
  typography: {
    sm: {
      ...semanticTypography.labelSm,
      fontWeight: '500',
    },
    md: {
      ...semanticTypography.label,
      fontWeight: '500',
    },
    lg: {
      ...semanticTypography.label,
      fontWeight: '600',
    },
  },

  // ── Solid variant ──────────────────────────────────────────────────────
  solid: {
    primary:  { bg: semanticColor.primary[500],  color: rawColor.white },
    secondary:{ bg: rawColor.gray[600], color: rawColor.white },
    success:  { bg: semanticColor.successSolid,  color: rawColor.white },
    warning:  { bg: semanticColor.warningSolid,  color: semanticColor.warningFg },
    danger:   { bg: semanticColor.dangerSolid,  color: rawColor.white },
    info:     { bg: semanticColor.infoSolid,    color: rawColor.white },
    purple:   { bg: semanticColor.purpleSolid,  color: rawColor.white },
    pink:     { bg: semanticColor.pinkSolid,    color: rawColor.white },
    gray:     { bg: rawColor.gray[600], color: rawColor.white },
  },

  // ── Subtle variant ────────────────────────────────────────────────────
  subtle: {
    primary:  { bg: semanticColor.primary[50],  color: semanticColor.primary[600] },
    secondary:{ bg: rawColor.gray[100],    color: rawColor.gray[700] },
    success:  { bg: semanticColor.successBg,   color: semanticColor.success[700] },
    warning:  { bg: semanticColor.warningBg,   color: semanticColor.warning[700] },
    danger:   { bg: semanticColor.dangerBg,    color: semanticColor.danger[700] },
    info:     { bg: semanticColor.infoBg,      color: semanticColor.info[700] },
    purple:   { bg: semanticColor.purpleBg,    color: semanticColor.purple[700] },
    pink:     { bg: semanticColor.pinkBg,      color: semanticColor.pink[700] },
    gray:     { bg: rawColor.gray[100],   color: rawColor.gray[700] },
  },

  // ── Outline variant ────────────────────────────────────────────────────
  outline: {
    primary:  { bg: 'transparent', border: semanticColor.primary[500],  color: semanticColor.primary[600] },
    secondary:{ bg: 'transparent', border: rawColor.gray[400],    color: rawColor.gray[700] },
    success:  { bg: 'transparent', border: semanticColor.success[500],  color: semanticColor.success[700] },
    warning:  { bg: 'transparent', border: semanticColor.warning[500],  color: semanticColor.warning[700] },
    danger:   { bg: 'transparent', border: semanticColor.danger[500],   color: semanticColor.danger[700] },
    info:     { bg: 'transparent', border: semanticColor.info[500],     color: semanticColor.info[700] },
    purple:   { bg: 'transparent', border: semanticColor.purple[500],   color: semanticColor.purple[700] },
    pink:     { bg: 'transparent', border: semanticColor.pink[500],     color: semanticColor.pink[700] },
    gray:     { bg: 'transparent', border: rawColor.gray[400],     color: rawColor.gray[700] },
  },

  // ── Dot indicator ────────────────────────────────────────────────────
  dot: {
    size:  '8px',
    color: semanticColor.primary[500],
  },
} as const;

export type ComponentBadge = typeof componentBadge;
