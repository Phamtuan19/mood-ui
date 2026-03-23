/**
 * Layer 3: Component Tokens — Card
 * Component-specific design decisions referencing semantic tokens.
 */

import { rawRadiusAlias } from '../tokens/radius';
import { rawShadow } from '../tokens/shadow';
import { semanticColor } from '../semantics/color';
import { semanticSpacing } from '../semantics/spacing';

export const componentCard = {
  // ── Defaults ───────────────────────────────────────────────────────────
  defaultShadow:  'sm',
  defaultPadding: 'md',

  // ── Padding ────────────────────────────────────────────────────────────
  padding: {
    none: '0',
    sm:   semanticSpacing.component.card.sm,
    md:   semanticSpacing.component.card.md,
    lg:   semanticSpacing.component.card.lg,
  },

  // ── Border radius ─────────────────────────────────────────────────────
  borderRadius: rawRadiusAlias.card,

  // ── Background ────────────────────────────────────────────────────────
  bg: semanticColor.surface,

  // ── Shadow variants ───────────────────────────────────────────────────
  shadow: {
    none: rawShadow.none,
    sm:   rawShadow.sm,
    md:   rawShadow.md,
    lg:   rawShadow.lg,
    xl:   rawShadow.xl,
  },

  // ── Border ───────────────────────────────────────────────────────────
  border: {
    default: semanticColor.border.default,
    muted:   semanticColor.border.muted,
  },

  // ── Header / Footer divider ───────────────────────────────────────────
  divider: {
    color: semanticColor.border.default,
    width: '1px',
  },
} as const;

export type ComponentCard = typeof componentCard;
