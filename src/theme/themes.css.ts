/**
 * Vanilla-Extract Theme Layer
 *
 * This file is the ONLY place where vanilla-extract's createThemeContract and
 * createTheme are called. It:
 *   1. Defines the CSS variable contract (all values = null)
 *   2. Generates CSS class names for each theme
 *   3. Maps Layer 1+2+3 TypeScript token objects into CSS var values
 *
 * Uses assignVars + globalStyle for global tokens (no class) and
 * createTheme for scoped theme classes (light/dark).
 */

import {
  createThemeContract,
  createTheme,
  createGlobalTheme,
} from '@vanilla-extract/css';

// ---------------------------------------------------------------------------
// Theme contract — flat CSS variable names (null = placeholder)
// ---------------------------------------------------------------------------

export const vars = createThemeContract({
  // ── Color ────────────────────────────────────────────────────────────────
  'color-primary':         null as string | null,
  'color-primary-hover':   null as string | null,
  'color-primary-active':  null as string | null,
  'color-primary-fg':      null as string | null,

  'color-secondary':        null as string | null,
  'color-secondary-hover':  null as string | null,
  'color-secondary-fg':     null as string | null,

  'color-success':         null as string | null,
  'color-success-bg':      null as string | null,
  'color-success-fg':      null as string | null,

  'color-warning':         null as string | null,
  'color-warning-bg':      null as string | null,
  'color-warning-fg':      null as string | null,

  'color-danger':          null as string | null,
  'color-danger-bg':       null as string | null,
  'color-danger-fg':       null as string | null,

  'color-info':            null as string | null,
  'color-info-bg':         null as string | null,
  'color-info-fg':         null as string | null,

  'color-purple':          null as string | null,
  'color-purple-bg':       null as string | null,
  'color-purple-fg':       null as string | null,

  'color-pink':            null as string | null,
  'color-pink-bg':         null as string | null,
  'color-pink-fg':         null as string | null,

  // Surfaces
  'color-canvas':         null as string | null,
  'color-surface':        null as string | null,
  'color-surface-raised': null as string | null,
  'color-surface-overlay':null as string | null,

  // Text
  'color-text-primary':   null as string | null,
  'color-text-secondary': null as string | null,
  'color-text-muted':     null as string | null,
  'color-text-inverse':   null as string | null,
  'color-text-disabled':  null as string | null,
  'color-text-placeholder':null as string | null,

  // Borders
  'color-border-default': null as string | null,
  'color-border-strong':  null as string | null,
  'color-border-muted':   null as string | null,
  'color-border-focus':   null as string | null,
  'color-border-danger':  null as string | null,
  'color-border-success': null as string | null,

  // Action
  'color-action-primary':   null as string | null,
  'color-action-secondary': null as string | null,
  'color-action-danger':    null as string | null,
  'color-action-ghost':    null as string | null,

  // Overlay
  'color-overlay-light': null as string | null,
  'color-overlay-dark':  null as string | null,
  'color-overlay-heavy': null as string | null,

  // ── Typography ────────────────────────────────────────────────────────────
  'font-family-sans':  null as string | null,
  'font-family-serif': null as string | null,
  'font-family-mono':  null as string | null,

  'font-size-2xs':  null as string | null,
  'font-size-xs':  null as string | null,
  'font-size-sm':  null as string | null,
  'font-size-base':null as string | null,
  'font-size-lg':  null as string | null,
  'font-size-xl':  null as string | null,
  'font-size-2xl': null as string | null,
  'font-size-3xl': null as string | null,
  'font-size-4xl': null as string | null,
  'font-size-5xl': null as string | null,

  'font-weight-normal':   null as string | null,
  'font-weight-medium':   null as string | null,
  'font-weight-semibold': null as string | null,
  'font-weight-bold':     null as string | null,

  'line-height-none':    null as string | null,
  'line-height-tight':   null as string | null,
  'line-height-snug':    null as string | null,
  'line-height-normal':  null as string | null,
  'line-height-relaxed': null as string | null,

  'letter-spacing-tight': null as string | null,
  'letter-spacing-normal':null as string | null,
  'letter-spacing-wide':  null as string | null,
  'letter-spacing-wider':null as string | null,

  // ── Spacing ───────────────────────────────────────────────────────────────
  'space-0': null as string | null,
  'space-px':null as string | null,
  'space-0-5':null as string | null,
  'space-1': null as string | null,
  'space-1-5':null as string | null,
  'space-2': null as string | null,
  'space-2-5':null as string | null,
  'space-3': null as string | null,
  'space-3-5':null as string | null,
  'space-4': null as string | null,
  'space-5': null as string | null,
  'space-6': null as string | null,
  'space-8': null as string | null,
  'space-10':null as string | null,
  'space-12':null as string | null,
  'space-16':null as string | null,
  'space-20':null as string | null,
  'space-24':null as string | null,

  // ── Shadow ────────────────────────────────────────────────────────────────
  'shadow-none':   null as string | null,
  'shadow-xs':     null as string | null,
  'shadow-sm':     null as string | null,
  'shadow-md':     null as string | null,
  'shadow-lg':     null as string | null,
  'shadow-xl':     null as string | null,
  'shadow-2xl':    null as string | null,
  'shadow-inner':  null as string | null,
  'shadow-primary':null as string | null,

  // ── Motion ─────────────────────────────────────────────────────────────────
  'motion-duration-fast':   null as string | null,
  'motion-duration-normal': null as string | null,
  'motion-duration-slow':   null as string | null,
  'motion-easing-in':       null as string | null,
  'motion-easing-out':      null as string | null,
  'motion-easing-in-out':   null as string | null,

  // ── Z-Index ────────────────────────────────────────────────────────────────
  'z-dropdown': null as string | null,
  'z-sticky':  null as string | null,
  'z-fixed':   null as string | null,
  'z-backdrop':null as string | null,
  'z-modal':   null as string | null,
  'z-popover': null as string | null,
  'z-toast':   null as string | null,

  // ── Component: Button ──────────────────────────────────────────────────────
  'button-height-xs': null as string | null,
  'button-height-sm': null as string | null,
  'button-height-md': null as string | null,
  'button-height-lg': null as string | null,
  'button-height-xl': null as string | null,

  'button-padding-xs': null as string | null,
  'button-padding-sm': null as string | null,
  'button-padding-md': null as string | null,
  'button-padding-lg': null as string | null,
  'button-padding-xl': null as string | null,

  'button-radius-xs':   null as string | null,
  'button-radius-sm':   null as string | null,
  'button-radius-md':   null as string | null,
  'button-radius-lg':   null as string | null,
  'button-radius-full': null as string | null,

  'button-font-size-xs': null as string | null,
  'button-font-size-sm': null as string | null,
  'button-font-size-md': null as string | null,
  'button-font-size-lg': null as string | null,

  'button-font-weight': null as string | null,

  // ── Component: Input ───────────────────────────────────────────────────────
  'input-height-xs': null as string | null,
  'input-height-sm': null as string | null,
  'input-height-md': null as string | null,
  'input-height-lg': null as string | null,

  'input-padding-sm': null as string | null,
  'input-padding-md': null as string | null,
  'input-padding-lg': null as string | null,

  'input-radius-sm':  null as string | null,
  'input-radius-md':  null as string | null,
  'input-radius-full':null as string | null,

  // ── Component: Badge ───────────────────────────────────────────────────────
  'badge-padding-sm': null as string | null,
  'badge-padding-md': null as string | null,
  'badge-padding-lg': null as string | null,

  'badge-radius-sm':  null as string | null,
  'badge-radius-md':  null as string | null,
  'badge-radius-full':null as string | null,

  // ── Component: Card ────────────────────────────────────────────────────────
  'card-padding-sm':   null as string | null,
  'card-padding-md':   null as string | null,
  'card-padding-lg':   null as string | null,
  'card-radius':       null as string | null,
  'card-bg':           null as string | null,
  'card-border':       null as string | null,
  'card-shadow-none':  null as string | null,
  'card-shadow-sm':    null as string | null,
  'card-shadow-md':    null as string | null,
  'card-shadow-lg':    null as string | null,
  'card-divider-color':null as string | null,
  'card-divider-width':null as string | null,

  // ── Component: Alert ───────────────────────────────────────────────────────
  'alert-padding-sm':   null as string | null,
  'alert-padding-md':   null as string | null,
  'alert-radius':       null as string | null,
  'alert-font-size':    null as string | null,

  // ── Component: Modal ───────────────────────────────────────────────────────
  'modal-backdrop-bg':    null as string | null,
  'modal-backdrop-blur':  null as string | null,
  'modal-dialog-bg':      null as string | null,
  'modal-dialog-radius':  null as string | null,
  'modal-dialog-shadow':  null as string | null,
  'modal-dialog-padding': null as string | null,
  'modal-size-xs':  null as string | null,
  'modal-size-sm':  null as string | null,
  'modal-size-md':  null as string | null,
  'modal-size-lg':  null as string | null,
  'modal-size-xl':  null as string | null,
  'modal-size-full':null as string | null,

  // ── Component: Tooltip ────────────────────────────────────────────────────
  'tooltip-bg':       null as string | null,
  'tooltip-color':    null as string | null,
  'tooltip-padding':  null as string | null,
  'tooltip-radius':   null as string | null,
  'tooltip-font-size':null as string | null,
  'tooltip-shadow':   null as string | null,
  'tooltip-arrow-size':null as string | null,

  // ── Component: Drawer ─────────────────────────────────────────────────────
  'drawer-backdrop-bg':   null as string | null,
  'drawer-backdrop-blur': null as string | null,
  'drawer-bg':           null as string | null,
  'drawer-shadow':        null as string | null,

  // ── Component: Dropdown ───────────────────────────────────────────────────
  'dropdown-bg':       null as string | null,
  'dropdown-border':   null as string | null,
  'dropdown-radius':  null as string | null,
  'dropdown-shadow':  null as string | null,
  'dropdown-padding': null as string | null,
});

// ---------------------------------------------------------------------------
// Global tokens (shared across all themes — applied to :root with assignVars)
// ---------------------------------------------------------------------------

/**
 * Global tokens (shared across all themes) — CSS var strings.
 * Used directly in recipe styles as CSS var values.
 * Note: globalVars values are CSS var strings, not raw values.
 */
export const globalVars = {
  radiusNone: 'var(--mood-radius-none)',
  radiusSm: 'var(--mood-radius-sm)',
  radiusMd: 'var(--mood-radius-md)',
  radiusLg: 'var(--mood-radius-lg)',
  radiusXl: 'var(--mood-radius-xl)',
  radius2xl: 'var(--mood-radius-2xl)',
  radiusFull: 'var(--mood-radius-full)',
} as const satisfies Record<string, string>;

// Apply radius globals to :root (shared across all themes)
createGlobalTheme(':root', globalVars);

// ---------------------------------------------------------------------------
// Light Theme
// ---------------------------------------------------------------------------

export const [lightThemeClass, lightTheme] = createTheme(vars, {
  // ── Color ────────────────────────────────────────────────────────────────
  'color-primary':         '#3b82f6',
  'color-primary-hover':   '#2563eb',
  'color-primary-active':  '#1d4ed8',
  'color-primary-fg':      '#ffffff',

  'color-secondary':        '#6b7280',
  'color-secondary-hover':  '#4b5563',
  'color-secondary-fg':     '#ffffff',

  'color-success':         '#10b981',
  'color-success-bg':      '#ecfdf5',
  'color-success-fg':      '#047857',

  'color-warning':         '#f59e0b',
  'color-warning-bg':      '#fffbeb',
  'color-warning-fg':     '#b45309',

  'color-danger':          '#ef4444',
  'color-danger-bg':       '#fef2f2',
  'color-danger-fg':       '#b91c1c',

  'color-info':            '#0ea5e9',
  'color-info-bg':         '#f0f9ff',
  'color-info-fg':         '#0369a1',

  'color-purple':          '#8b5cf6',
  'color-purple-bg':       '#f5f3ff',
  'color-purple-fg':       '#6d28d9',

  'color-pink':            '#ec4899',
  'color-pink-bg':         '#fdf2f8',
  'color-pink-fg':         '#be185d',

  'color-canvas':          '#ffffff',
  'color-surface':         '#f9fafb',
  'color-surface-raised':  '#f3f4f6',
  'color-surface-overlay': '#f9fafb',

  'color-text-primary':    '#111827',
  'color-text-secondary':  '#4b5563',
  'color-text-muted':      '#9ca3af',
  'color-text-inverse':    '#ffffff',
  'color-text-disabled':    '#d1d5db',
  'color-text-placeholder': '#9ca3af',

  'color-border-default':  '#e5e7eb',
  'color-border-strong':   '#d1d5db',
  'color-border-muted':   '#f3f4f6',
  'color-border-focus':   '#3b82f6',
  'color-border-danger':   '#ef4444',
  'color-border-success': '#10b981',

  'color-action-primary':   '#3b82f6',
  'color-action-secondary': '#6b7280',
  'color-action-danger':    '#ef4444',
  'color-action-ghost':    'transparent',

  'color-overlay-light': 'rgba(0, 0, 0, 0.04)',
  'color-overlay-dark':  'rgba(0, 0, 0, 0.40)',
  'color-overlay-heavy': 'rgba(0, 0, 0, 0.60)',

  // ── Typography ────────────────────────────────────────────────────────────
  'font-family-sans':  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  'font-family-serif': "'Georgia', Cambria, 'Times New Roman', Times, serif",
  'font-family-mono':  "'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",

  'font-size-2xs':  '10px',
  'font-size-xs':  '12px',
  'font-size-sm':  '14px',
  'font-size-base':'16px',
  'font-size-lg':  '18px',
  'font-size-xl':  '20px',
  'font-size-2xl': '24px',
  'font-size-3xl': '30px',
  'font-size-4xl': '36px',
  'font-size-5xl': '48px',

  'font-weight-normal':   '400',
  'font-weight-medium':   '500',
  'font-weight-semibold': '600',
  'font-weight-bold':     '700',

  'line-height-none':    '1',
  'line-height-tight':   '1.25',
  'line-height-snug':    '1.375',
  'line-height-normal':  '1.5',
  'line-height-relaxed': '1.625',

  'letter-spacing-tight':  '-0.025em',
  'letter-spacing-normal': '0em',
  'letter-spacing-wide':   '0.025em',
  'letter-spacing-wider':  '0.05em',

  // ── Spacing ───────────────────────────────────────────────────────────────
  'space-0':   '0',
  'space-px':  '1px',
  'space-0-5': '2px',
  'space-1':   '4px',
  'space-1-5': '6px',
  'space-2':   '8px',
  'space-2-5': '10px',
  'space-3':   '12px',
  'space-3-5': '14px',
  'space-4':   '16px',
  'space-5':   '20px',
  'space-6':   '24px',
  'space-8':   '32px',
  'space-10':  '40px',
  'space-12':  '48px',
  'space-16':  '64px',
  'space-20':  '80px',
  'space-24':  '96px',

  // ── Shadow ────────────────────────────────────────────────────────────────
  'shadow-none':   'none',
  'shadow-xs':     '0 1px 2px 0 rgb(0 0 0 / 0.03)',
  'shadow-sm':     '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
  'shadow-md':     '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
  'shadow-lg':     '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)',
  'shadow-xl':     '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
  'shadow-2xl':    '0 25px 50px -12px rgb(0 0 0 / 0.18)',
  'shadow-inner':  'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  'shadow-primary': '0 4px 14px 0 rgb(59 130 246 / 0.35)',

  // ── Motion ─────────────────────────────────────────────────────────────────
  'motion-duration-fast':   '100ms',
  'motion-duration-normal': '200ms',
  'motion-duration-slow':   '300ms',
  'motion-easing-in':       'cubic-bezier(0.4, 0, 1, 1)',
  'motion-easing-out':      'cubic-bezier(0, 0, 0.2, 1)',
  'motion-easing-in-out':   'cubic-bezier(0.4, 0, 0.2, 1)',

  // ── Z-Index ────────────────────────────────────────────────────────────────
  'z-dropdown': '1000',
  'z-sticky':   '1020',
  'z-fixed':    '1030',
  'z-backdrop': '1040',
  'z-modal':    '1050',
  'z-popover':  '1060',
  'z-toast':    '1070',

  // ── Component: Button ──────────────────────────────────────────────────────
  'button-height-xs': '24px',
  'button-height-sm': '32px',
  'button-height-md': '40px',
  'button-height-lg': '48px',
  'button-height-xl': '56px',

  'button-padding-xs': '4px 8px',
  'button-padding-sm': '4px 8px',
  'button-padding-md': '6px 16px',
  'button-padding-lg': '8px 24px',
  'button-padding-xl': '8px 24px',

  'button-radius-xs':   '2px',
  'button-radius-sm':   '4px',
  'button-radius-md':   '6px',
  'button-radius-lg':   '8px',
  'button-radius-full': '9999px',

  'button-font-size-xs': '12px',
  'button-font-size-sm': '14px',
  'button-font-size-md': '14px',
  'button-font-size-lg': '16px',

  'button-font-weight': '500',

  // ── Component: Input ───────────────────────────────────────────────────────
  'input-height-xs': '24px',
  'input-height-sm': '32px',
  'input-height-md': '40px',
  'input-height-lg': '48px',

  'input-padding-sm': '4px 8px',
  'input-padding-md': '8px 12px',
  'input-padding-lg': '10px 16px',

  'input-radius-sm':  '6px',
  'input-radius-md':  '6px',
  'input-radius-full':'9999px',

  // ── Component: Badge ───────────────────────────────────────────────────────
  'badge-padding-sm': '2px 4px',
  'badge-padding-md': '4px 8px',
  'badge-padding-lg': '6px 12px',

  'badge-radius-sm':  '4px',
  'badge-radius-md':  '6px',
  'badge-radius-full':'9999px',

  // ── Component: Card ────────────────────────────────────────────────────────
  'card-padding-sm':   '12px',
  'card-padding-md':   '20px',
  'card-padding-lg':   '28px',
  'card-radius':       '8px',
  'card-bg':           '#ffffff',
  'card-border':       '#e5e7eb',
  'card-shadow-none':  'none',
  'card-shadow-sm':    '0 1px 3px 0 rgb(0 0 0 / 0.06)',
  'card-shadow-md':    '0 4px 6px -1px rgb(0 0 0 / 0.07)',
  'card-shadow-lg':    '0 10px 15px -3px rgb(0 0 0 / 0.08)',
  'card-divider-color':'#e5e7eb',
  'card-divider-width':'1px',

  // ── Component: Alert ───────────────────────────────────────────────────────
  'alert-padding-sm':   '8px 12px',
  'alert-padding-md':   '12px 16px',
  'alert-radius':       '8px',
  'alert-font-size':    '14px',

  // ── Component: Modal ───────────────────────────────────────────────────────
  'modal-backdrop-bg':    'rgba(0, 0, 0, 0.5)',
  'modal-backdrop-blur':  '4px',
  'modal-dialog-bg':      '#ffffff',
  'modal-dialog-radius':  '12px',
  'modal-dialog-shadow':  '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  'modal-dialog-padding': '24px',
  'modal-size-xs':  '320px',
  'modal-size-sm':  '400px',
  'modal-size-md':  '500px',
  'modal-size-lg':  '640px',
  'modal-size-xl':  '800px',
  'modal-size-full':'100%',

  // ── Component: Tooltip ────────────────────────────────────────────────────
  'tooltip-bg':       '#1f2937',
  'tooltip-color':    '#ffffff',
  'tooltip-padding':  '6px 10px',
  'tooltip-radius':   '6px',
  'tooltip-font-size':'12px',
  'tooltip-shadow':   '0 4px 6px -1px rgb(0 0 0 / 0.15)',
  'tooltip-arrow-size':'6px',

  // ── Component: Drawer ─────────────────────────────────────────────────────
  'drawer-backdrop-bg':   'rgba(0, 0, 0, 0.5)',
  'drawer-backdrop-blur': '4px',
  'drawer-bg':             '#ffffff',
  'drawer-shadow':         '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // ── Component: Dropdown ───────────────────────────────────────────────────
  'dropdown-bg':       '#ffffff',
  'dropdown-border':   '#e5e7eb',
  'dropdown-radius':  '8px',
  'dropdown-shadow':  '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  'dropdown-padding': '4px',
});

// ---------------------------------------------------------------------------
// Dark Theme
// ---------------------------------------------------------------------------

export const [darkThemeClass, darkTheme] = createTheme(vars, {
  // ── Color ────────────────────────────────────────────────────────────────
  'color-primary':         '#60a5fa',
  'color-primary-hover':   '#3b82f6',
  'color-primary-active':  '#2563eb',
  'color-primary-fg':      '#ffffff',

  'color-secondary':        '#9ca3af',
  'color-secondary-hover':  '#d1d5db',
  'color-secondary-fg':     '#111827',

  'color-success':         '#34d399',
  'color-success-bg':      '#064e3b',
  'color-success-fg':     '#6ee7b7',

  'color-warning':         '#fbbf24',
  'color-warning-bg':      '#78350f',
  'color-warning-fg':     '#fef3c7',

  'color-danger':          '#f87171',
  'color-danger-bg':       '#450a0a',
  'color-danger-fg':       '#fecaca',

  'color-info':            '#38bdf8',
  'color-info-bg':         '#082f49',
  'color-info-fg':         '#bae6fd',

  'color-purple':          '#a78bfa',
  'color-purple-bg':       '#2e1065',
  'color-purple-fg':       '#ddd6fe',

  'color-pink':            '#f472b6',
  'color-pink-bg':         '#500724',
  'color-pink-fg':         '#fbcfe8',

  'color-canvas':          '#0f172a',
  'color-surface':         '#1e293b',
  'color-surface-raised':  '#334155',
  'color-surface-overlay': '#1e293b',

  'color-text-primary':    '#f1f5f9',
  'color-text-secondary':  '#94a3b8',
  'color-text-muted':      '#64748b',
  'color-text-inverse':    '#0f172a',
  'color-text-disabled':   '#475569',
  'color-text-placeholder':'#64748b',

  'color-border-default':  '#334155',
  'color-border-strong':   '#475569',
  'color-border-muted':   '#1e293b',
  'color-border-focus':   '#60a5fa',
  'color-border-danger':   '#f87171',
  'color-border-success': '#34d399',

  'color-action-primary':   '#60a5fa',
  'color-action-secondary': '#9ca3af',
  'color-action-danger':   '#f87171',
  'color-action-ghost':    'transparent',

  'color-overlay-light': 'rgba(255, 255, 255, 0.04)',
  'color-overlay-dark':  'rgba(0, 0, 0, 0.60)',
  'color-overlay-heavy': 'rgba(0, 0, 0, 0.75)',

  // ── Typography ────────────────────────────────────────────────────────────
  'font-family-sans':  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  'font-family-serif': "'Georgia', Cambria, 'Times New Roman', Times, serif",
  'font-family-mono':  "'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",

  'font-size-2xs':  '10px',
  'font-size-xs':  '12px',
  'font-size-sm':  '14px',
  'font-size-base':'16px',
  'font-size-lg':  '18px',
  'font-size-xl':  '20px',
  'font-size-2xl': '24px',
  'font-size-3xl': '30px',
  'font-size-4xl': '36px',
  'font-size-5xl': '48px',

  'font-weight-normal':   '400',
  'font-weight-medium':   '500',
  'font-weight-semibold': '600',
  'font-weight-bold':     '700',

  'line-height-none':    '1',
  'line-height-tight':   '1.25',
  'line-height-snug':    '1.375',
  'line-height-normal':  '1.5',
  'line-height-relaxed': '1.625',

  'letter-spacing-tight':  '-0.025em',
  'letter-spacing-normal': '0em',
  'letter-spacing-wide':   '0.025em',
  'letter-spacing-wider':  '0.05em',

  // ── Spacing ───────────────────────────────────────────────────────────────
  'space-0':   '0',
  'space-px':  '1px',
  'space-0-5': '2px',
  'space-1':   '4px',
  'space-1-5': '6px',
  'space-2':   '8px',
  'space-2-5': '10px',
  'space-3':   '12px',
  'space-3-5': '14px',
  'space-4':   '16px',
  'space-5':   '20px',
  'space-6':   '24px',
  'space-8':   '32px',
  'space-10':  '40px',
  'space-12':  '48px',
  'space-16':  '64px',
  'space-20':  '80px',
  'space-24':  '96px',

  // ── Shadow ────────────────────────────────────────────────────────────────
  'shadow-none':   'none',
  'shadow-xs':     '0 1px 2px 0 rgb(0 0 0 / 0.2)',
  'shadow-sm':     '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
  'shadow-md':     '0 4px 6px -1px rgb(0 0 0 / 0.35), 0 2px 4px -2px rgb(0 0 0 / 0.35)',
  'shadow-lg':     '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
  'shadow-xl':     '0 20px 25px -5px rgb(0 0 0 / 0.45), 0 8px 10px -6px rgb(0 0 0 / 0.45)',
  'shadow-2xl':    '0 25px 50px -12px rgb(0 0 0 / 0.6)',
  'shadow-inner':  'inset 0 2px 4px 0 rgb(0 0 0 / 0.3)',
  'shadow-primary': '0 4px 14px 0 rgb(96 165 250 / 0.35)',

  // ── Motion ─────────────────────────────────────────────────────────────────
  'motion-duration-fast':   '100ms',
  'motion-duration-normal': '200ms',
  'motion-duration-slow':   '300ms',
  'motion-easing-in':       'cubic-bezier(0.4, 0, 1, 1)',
  'motion-easing-out':      'cubic-bezier(0, 0, 0.2, 1)',
  'motion-easing-in-out':   'cubic-bezier(0.4, 0, 0.2, 1)',

  // ── Z-Index ────────────────────────────────────────────────────────────────
  'z-dropdown': '1000',
  'z-sticky':   '1020',
  'z-fixed':    '1030',
  'z-backdrop': '1040',
  'z-modal':    '1050',
  'z-popover':  '1060',
  'z-toast':    '1070',

  // ── Component: Button ──────────────────────────────────────────────────────
  'button-height-xs': '24px',
  'button-height-sm': '32px',
  'button-height-md': '40px',
  'button-height-lg': '48px',
  'button-height-xl': '56px',

  'button-padding-xs': '4px 8px',
  'button-padding-sm': '4px 8px',
  'button-padding-md': '6px 16px',
  'button-padding-lg': '8px 24px',
  'button-padding-xl': '8px 24px',

  'button-radius-xs':   '2px',
  'button-radius-sm':   '4px',
  'button-radius-md':   '6px',
  'button-radius-lg':   '8px',
  'button-radius-full': '9999px',

  'button-font-size-xs': '12px',
  'button-font-size-sm': '14px',
  'button-font-size-md': '14px',
  'button-font-size-lg': '16px',

  'button-font-weight': '500',

  // ── Component: Input ───────────────────────────────────────────────────────
  'input-height-xs': '24px',
  'input-height-sm': '32px',
  'input-height-md': '40px',
  'input-height-lg': '48px',

  'input-padding-sm': '4px 8px',
  'input-padding-md': '8px 12px',
  'input-padding-lg': '10px 16px',

  'input-radius-sm':  '6px',
  'input-radius-md':  '6px',
  'input-radius-full':'9999px',

  // ── Component: Badge ───────────────────────────────────────────────────────
  'badge-padding-sm': '2px 4px',
  'badge-padding-md': '4px 8px',
  'badge-padding-lg': '6px 12px',

  'badge-radius-sm':  '4px',
  'badge-radius-md':  '6px',
  'badge-radius-full':'9999px',

  // ── Component: Card ────────────────────────────────────────────────────────
  'card-padding-sm':   '12px',
  'card-padding-md':   '20px',
  'card-padding-lg':   '28px',
  'card-radius':       '8px',
  'card-bg':           '#1e293b',
  'card-border':       '#334155',
  'card-shadow-none':  'none',
  'card-shadow-sm':    '0 1px 3px 0 rgb(0 0 0 / 0.3)',
  'card-shadow-md':    '0 4px 6px -1px rgb(0 0 0 / 0.35)',
  'card-shadow-lg':    '0 10px 15px -3px rgb(0 0 0 / 0.4)',
  'card-divider-color':'#334155',
  'card-divider-width':'1px',

  // ── Component: Alert ───────────────────────────────────────────────────────
  'alert-padding-sm':   '8px 12px',
  'alert-padding-md':   '12px 16px',
  'alert-radius':       '8px',
  'alert-font-size':    '14px',

  // ── Component: Modal ───────────────────────────────────────────────────────
  'modal-backdrop-bg':    'rgba(0, 0, 0, 0.7)',
  'modal-backdrop-blur': '4px',
  'modal-dialog-bg':      '#1e293b',
  'modal-dialog-radius':  '12px',
  'modal-dialog-shadow':  '0 25px 50px -12px rgb(0 0 0 / 0.5)',
  'modal-dialog-padding': '24px',
  'modal-size-xs':  '320px',
  'modal-size-sm':  '400px',
  'modal-size-md':  '500px',
  'modal-size-lg':  '640px',
  'modal-size-xl':  '800px',
  'modal-size-full':'100%',

  // ── Component: Tooltip ────────────────────────────────────────────────────
  'tooltip-bg':       '#f1f5f9',
  'tooltip-color':    '#0f172a',
  'tooltip-padding':  '6px 10px',
  'tooltip-radius':   '6px',
  'tooltip-font-size':'12px',
  'tooltip-shadow':   '0 4px 6px -1px rgb(0 0 0 / 0.3)',
  'tooltip-arrow-size':'6px',

  // ── Component: Drawer ─────────────────────────────────────────────────────
  'drawer-backdrop-bg':   'rgba(0, 0, 0, 0.7)',
  'drawer-backdrop-blur': '4px',
  'drawer-bg':             '#1e293b',
  'drawer-shadow':         '0 25px 50px -12px rgb(0 0 0 / 0.5)',

  // ── Component: Dropdown ───────────────────────────────────────────────────
  'dropdown-bg':       '#1e293b',
  'dropdown-border':   '#334155',
  'dropdown-radius':  '8px',
  'dropdown-shadow':  '0 10px 15px -3px rgb(0 0 0 / 0.4)',
  'dropdown-padding': '4px',
});
