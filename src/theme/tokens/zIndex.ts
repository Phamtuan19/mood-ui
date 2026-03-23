/**
 * Layer 1: Raw Z-Index Tokens
 * Stacking context scale.
 */

export const rawZIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  /** Base layer */
  base: '0',
  /** Dropdown menus, floating elements */
  dropdown: '1000',
  /** Sticky elements */
  sticky: '1020',
  /** Fixed elements (e.g. navbars) */
  fixed: '1030',
  /** Modal backdrop */
  backdrop: '1040',
  /** Modal dialogs */
  modal: '1050',
  /** Popovers, tooltips */
  popover: '1060',
  /** Toast notifications */
  toast: '1070',
  /** Highest — debug overlays */
  debug: '9999',
} as const;

export type RawZIndexKey = keyof typeof rawZIndex;
