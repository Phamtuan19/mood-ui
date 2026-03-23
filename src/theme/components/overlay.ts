/**
 * Layer 3: Component Tokens — Modal / Overlay
 * Component-specific design decisions referencing semantic tokens.
 */

import { rawRadius, rawRadiusAlias } from '../tokens/radius';
import { rawShadow } from '../tokens/shadow';
import { rawColor } from '../tokens/color';
import { semanticColor } from '../semantics/color';
import { semanticSpacing } from '../semantics/spacing';
import { semanticMotion } from '../semantics/motion';

export const componentModal = {
  // ── Backdrop ─────────────────────────────────────────────────────────
  backdrop: {
    bg:       semanticColor.overlay.dark,
    blur:     '4px',
  },

  // ── Dialog ────────────────────────────────────────────────────────────
  dialog: {
    bg:           semanticColor.canvas,
    borderRadius: rawRadiusAlias.modal,
    shadow:       rawShadow['2xl'],
    padding:      semanticSpacing.component.modal.body,
  },

  // ── Sizes ─────────────────────────────────────────────────────────────
  size: {
    default: 'md',
    xs:   '320px',
    sm:   '400px',
    md:   '500px',
    lg:   '640px',
    xl:   '800px',
    full: '100%',
  },

  // ── Motion ─────────────────────────────────────────────────────────────
  motion: {
    enter: semanticMotion.interaction.overlayOpen,
    exit:  semanticMotion.interaction.toastExit,
  },
} as const;

export const componentTooltip = {
  // ── Background & text ─────────────────────────────────────────────────
  bg:      rawColor.gray[900],
  color:   rawColor.white,
  padding: `${semanticSpacing.component.badge.sm}`,

  // ── Border radius ─────────────────────────────────────────────────────
  borderRadius: rawRadius.sm,

  // ── Typography ────────────────────────────────────────────────────────
  typography: {
    sm: { fontSize: '12px', fontWeight: '400', lineHeight: '1.4' },
    md: { fontSize: '14px', fontWeight: '400', lineHeight: '1.5' },
  },

  // ── Shadow ────────────────────────────────────────────────────────────
  shadow: rawShadow.lg,

  // ── Arrow ─────────────────────────────────────────────────────────────
  arrow: {
    size: '6px',
    defaultSide: 'top',
  },

  // ── Defaults ───────────────────────────────────────────────────────────
  defaultPlacement: 'top',

  // ── Motion ─────────────────────────────────────────────────────────────
  motion: {
    delay: semanticMotion.interaction.tooltipDelay,
    enter: semanticMotion.interaction.menuOpen.duration,
    exit:  semanticMotion.interaction.toastExit.duration,
  },
} as const;

export const componentDrawer = {
  // ── Defaults ───────────────────────────────────────────────────────────
  defaultSide: 'right',

  // ── Background ────────────────────────────────────────────────────────
  bg: semanticColor.canvas,

  // ── Shadow ────────────────────────────────────────────────────────────
  shadow: rawShadow['2xl'],

  // ── Border ────────────────────────────────────────────────────────────
  border: {
    left:  `1px solid ${semanticColor.border.default}`,
    right: `1px solid ${semanticColor.border.default}`,
  },

  // ── Sizes ─────────────────────────────────────────────────────────────
  size: {
    sm:   '280px',
    md:   '360px',
    lg:   '480px',
    xl:   '640px',
    full: '100%',
  },
} as const;

export const componentDropdown = {
  // ── Defaults ───────────────────────────────────────────────────────────
  defaultSeparator: 'none',

  // ── Background ────────────────────────────────────────────────────────
  bg:     semanticColor.canvas,
  shadow: rawShadow.lg,
  border: `1px solid ${semanticColor.border.default}`,
  borderRadius: rawRadiusAlias.button,

  // ── Padding ────────────────────────────────────────────────────────────
  padding: `${semanticSpacing.component.badge.sm} 0`,

  // ── Item ──────────────────────────────────────────────────────────────
  item: {
    padding:  `${rawRadius.sm} ${semanticSpacing.component.button.md}`,
    hover:    semanticColor.surface,
    active:   semanticColor.surfaceRaised,
    disabled: { color: semanticColor.text.muted, cursor: 'not-allowed' },
    divider:  `1px solid ${semanticColor.border.muted}`,
  },
} as const;

export type ComponentModal = typeof componentModal;
export type ComponentTooltip = typeof componentTooltip;
export type ComponentDrawer = typeof componentDrawer;
export type ComponentDropdown = typeof componentDropdown;
