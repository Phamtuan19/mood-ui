/**
 * Layer 3: Component Tokens — Button
 * Component-specific design decisions referencing semantic tokens.
 */

import { rawRadius, rawRadiusAlias } from '../tokens/radius';
import { rawShadow } from '../tokens/shadow';
import { rawColor } from '../tokens/color';
import { semanticColor } from '../semantics/color';
import { semanticTypography } from '../semantics/typography';
import { semanticSpacing } from '../semantics/spacing';
import { semanticMotion } from '../semantics/motion';

export const componentButton = {
  // ── Defaults ───────────────────────────────────────────────────────────
  defaultVariant: 'solid',
  defaultIntent:  'primary',
  defaultSize:    'md',

  // ── Sizes ─────────────────────────────────────────────────────────────
  height: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
  },

  // ── Padding ────────────────────────────────────────────────────────────
  padding: {
    xs: `${rawRadius.sm} ${semanticSpacing.component.button.sm}`,
    sm: `${rawRadius.sm} ${semanticSpacing.component.button.sm}`,
    md: `${rawRadius.md} ${semanticSpacing.component.button.md}`,
    lg: `${rawRadius.lg} ${semanticSpacing.component.button.lg}`,
    xl: `${rawRadius.lg} ${semanticSpacing.component.button.lg}`,
  },

  // ── Border radius ─────────────────────────────────────────────────────
  borderRadius: {
    xs: rawRadius.none,
    sm: rawRadius.sm,
    md: rawRadiusAlias.button,
    lg: rawRadius.lg,
    xl: rawRadiusAlias.button,
    full: rawRadiusAlias.badge,
  },

  // ── Typography ─────────────────────────────────────────────────────────
  typography: {
    xs: semanticTypography.buttonSm,
    sm: semanticTypography.button,
    md: semanticTypography.button,
    lg: semanticTypography.buttonLg,
    xl: semanticTypography.buttonLg,
  },

  // ── Solid variant colors ───────────────────────────────────────────────
  solid: {
    primary: {
      bg:    semanticColor.action.primary,
      color: semanticColor.primaryFg,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    secondary: {
      bg:    semanticColor.secondarySolid,
      color: semanticColor.secondaryFg,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    danger: {
      bg:    semanticColor.action.danger,
      color: rawColor.white,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    success: {
      bg:    semanticColor.successSolid,
      color: rawColor.white,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    warning: {
      bg:    semanticColor.warningSolid,
      color: semanticColor.warningFg,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    info: {
      bg:    semanticColor.infoSolid,
      color: rawColor.white,
      border: 'transparent',
      shadow: rawShadow.none,
    },
  },

  // ── Outline variant colors ─────────────────────────────────────────────
  outline: {
    primary: {
      bg:    'transparent',
      color: semanticColor.action.primary,
      border: semanticColor.action.primary,
      shadow: rawShadow.none,
    },
    secondary: {
      bg:    'transparent',
      color: semanticColor.text.primary,
      border: semanticColor.border.strong,
      shadow: rawShadow.none,
    },
    danger: {
      bg:    'transparent',
      color: semanticColor.action.danger,
      border: semanticColor.action.danger,
      shadow: rawShadow.none,
    },
    success: {
      bg:    'transparent',
      color: semanticColor.successSolid,
      border: semanticColor.successSolid,
      shadow: rawShadow.none,
    },
    warning: {
      bg:    'transparent',
      color: semanticColor.warningSolid,
      border: semanticColor.warningSolid,
      shadow: rawShadow.none,
    },
    info: {
      bg:    'transparent',
      color: semanticColor.infoSolid,
      border: semanticColor.infoSolid,
      shadow: rawShadow.none,
    },
  },

  // ── Ghost variant colors ───────────────────────────────────────────────
  ghost: {
    primary: {
      bg:    'transparent',
      color: semanticColor.action.primary,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    secondary: {
      bg:    'transparent',
      color: semanticColor.text.primary,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    danger: {
      bg:    'transparent',
      color: semanticColor.action.danger,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    success: {
      bg:    'transparent',
      color: semanticColor.successSolid,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    warning: {
      bg:    'transparent',
      color: semanticColor.warningSolid,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    info: {
      bg:    'transparent',
      color: semanticColor.infoSolid,
      border: 'transparent',
      shadow: rawShadow.none,
    },
  },

  // ── Subtle variant colors ──────────────────────────────────────────────
  subtle: {
    primary: {
      bg:    semanticColor.primary[50],
      color: semanticColor.primary[500],
      border: 'transparent',
      shadow: rawShadow.none,
    },
    secondary: {
      bg:    semanticColor.surface,
      color: semanticColor.text.primary,
      border: 'transparent',
      shadow: rawShadow.none,
    },
    danger: {
      bg:    semanticColor.dangerBg,
      color: semanticColor.danger[500],
      border: 'transparent',
      shadow: rawShadow.none,
    },
    success: {
      bg:    semanticColor.successBg,
      color: semanticColor.success[500],
      border: 'transparent',
      shadow: rawShadow.none,
    },
    warning: {
      bg:    semanticColor.warningBg,
      color: semanticColor.warning[500],
      border: 'transparent',
      shadow: rawShadow.none,
    },
    info: {
      bg:    semanticColor.infoBg,
      color: semanticColor.info[500],
      border: 'transparent',
      shadow: rawShadow.none,
    },
  },

  // ── Interaction states ─────────────────────────────────────────────────
  state: {
    hover: {
      opacity: '0.88',
    },
    active: {
      opacity: '0.76',
    },
    focus: {
      shadow: `0 0 0 3px ${semanticColor.primary[100]}`,
    },
    disabled: {
      opacity: '0.44',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    loading: {
      opacity: '0.72',
      cursor: 'wait',
    },
  },

  // ── Motion ─────────────────────────────────────────────────────────────
  motion: semanticMotion.normal,
} as const;

export type ComponentButton = typeof componentButton;
