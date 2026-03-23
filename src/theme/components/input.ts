/**
 * Layer 3: Component Tokens — Input
 * Component-specific design decisions referencing semantic tokens.
 */

import { rawRadiusAlias } from '../tokens/radius';
import { semanticColor } from '../semantics/color';
import { semanticTypography } from '../semantics/typography';
import { semanticSpacing } from '../semantics/spacing';
import { semanticMotion } from '../semantics/motion';

export const componentInput = {
  // ── Defaults ───────────────────────────────────────────────────────────
  defaultStatus:   'default',
  defaultSize:     'md',

  // ── Sizes ─────────────────────────────────────────────────────────────
  height: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
  },

  // ── Padding ────────────────────────────────────────────────────────────
  padding: {
    sm: semanticSpacing.component.input.sm,
    md: semanticSpacing.component.input.md,
    lg: semanticSpacing.component.input.lg,
  },

  // ── Border radius ─────────────────────────────────────────────────────
  borderRadius: {
    sm: rawRadiusAlias.input,
    md: rawRadiusAlias.input,
    lg: rawRadiusAlias.input,
    full: '9999px',
  },

  // ── Typography ─────────────────────────────────────────────────────────
  typography: {
    xs: semanticTypography.bodyXs,
    sm: semanticTypography.bodySm,
    md: semanticTypography.body,
    lg: semanticTypography.bodyLg,
  },

  // ── Base colors ────────────────────────────────────────────────────────
  base: {
    bg:             semanticColor.canvas,
    color:          semanticColor.text.primary,
    placeholder:    semanticColor.text.placeholder,
    border:         semanticColor.border.default,
    borderHover:    semanticColor.border.strong,
    borderFocus:    semanticColor.border.focus,
    shadowFocus:    `0 0 0 3px ${semanticColor.primary[100]}`,
  },

  // ── Disabled state ─────────────────────────────────────────────────────
  disabled: {
    bg:            semanticColor.surface,
    color:         semanticColor.text.disabled,
    border:        semanticColor.border.muted,
    cursor:        'not-allowed',
  },

  // ── Error state ───────────────────────────────────────────────────────
  error: {
    border:        semanticColor.border.danger,
    borderFocus:   semanticColor.border.danger,
    shadowFocus:   `0 0 0 3px ${semanticColor.dangerBg}`,
    color:         semanticColor.dangerSolid,
  },

  // ── Success state ─────────────────────────────────────────────────────
  success: {
    border:        semanticColor.border.success,
    borderFocus:   semanticColor.border.success,
    shadowFocus:   `0 0 0 3px ${semanticColor.successBg}`,
    color:         semanticColor.successSolid,
  },

  // ── Motion ─────────────────────────────────────────────────────────────
  motion: semanticMotion.fast,
} as const;

export type ComponentInput = typeof componentInput;
