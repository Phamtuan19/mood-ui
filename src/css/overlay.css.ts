/**
 * Overlay CSS Recipes — Vanilla Extract
 * Modal, Drawer, Dropdown, Tooltip
 */

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVars } from '../theme';

// ──────────────────────────────────────────────────────────────────────────────
// Modal
// ──────────────────────────────────────────────────────────────────────────────

export const modalBackdrop = recipe({
  base: {
    position:        'fixed',
    inset:           '0',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: themeVars['modal-backdrop-bg'],
    backdropFilter:  `blur(${themeVars['modal-backdrop-blur']})`,
    zIndex:          themeVars['z-modal'],
  },
  variants: {},
  defaultVariants: {},
});

export const modalDialog = recipe({
  base: {
    position:       'relative',
    backgroundColor: themeVars['modal-dialog-bg'],
    borderRadius:   themeVars['modal-dialog-radius'],
    boxShadow:      themeVars['modal-dialog-shadow'],
    padding:        themeVars['modal-dialog-padding'],
    width:          '100%',
    maxHeight:      '90vh',
    overflowY:      'auto',
    zIndex:         themeVars['z-modal'],
    animation:      `mood-fade-in ${themeVars['motion-duration-normal']} ${themeVars['motion-easing-out']}`,
  },
  variants: {
    size: {
      xs:    { maxWidth: themeVars['modal-size-xs']   },
      sm:    { maxWidth: themeVars['modal-size-sm']   },
      md:    { maxWidth: themeVars['modal-size-md']   },
      lg:    { maxWidth: themeVars['modal-size-lg']   },
      xl:    { maxWidth: themeVars['modal-size-xl']   },
      full:  { maxWidth: '100%', height: '100%', borderRadius: '0', margin: '0' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const modalHeader = recipe({
  base: {
    display:     'flex',
    alignItems:  'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  variants: {},
  defaultVariants: {},
});

export const modalFooter = recipe({
  base: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'flex-end',
    gap:            '8px',
    marginTop:      '24px',
    paddingTop:     '16px',
    borderTop:      `1px solid ${themeVars['card-divider-color']}`,
  },
  variants: {},
  defaultVariants: {},
});

// ──────────────────────────────────────────────────────────────────────────────
// Drawer
// ──────────────────────────────────────────────────────────────────────────────

export const drawerBackdrop = recipe({
  base: {
    position:        'fixed',
    inset:           '0',
    backgroundColor: themeVars['drawer-backdrop-bg'],
    backdropFilter:  `blur(${themeVars['drawer-backdrop-blur']})`,
    zIndex:          themeVars['z-modal'],
  },
  variants: {},
  defaultVariants: {},
});

export const drawerPanel = recipe({
  base: {
    position:       'fixed',
    backgroundColor: themeVars['drawer-bg'],
    boxShadow:      themeVars['drawer-shadow'],
    height:         '100dvh',
    display:        'flex',
    flexDirection:  'column',
    zIndex:         themeVars['z-modal'],
  },
  variants: {
    side: {
      left:  {
        left:     '0',
        top:      '0',
        animation: `mood-slide-in-left ${themeVars['motion-duration-normal']} ${themeVars['motion-easing-out']}`,
      },
      right: {
        right:    '0',
        top:      '0',
        animation: `mood-slide-in-right ${themeVars['motion-duration-normal']} ${themeVars['motion-easing-out']}`,
      },
      top:   {
        top:      '0',
        left:     '0',
        right:    '0',
        width:    '100%',
        animation: `mood-slide-in-top ${themeVars['motion-duration-normal']} ${themeVars['motion-easing-out']}`,
      },
      bottom: {
        bottom:   '0',
        left:     '0',
        right:    '0',
        width:    '100%',
        animation: `mood-slide-in-bottom ${themeVars['motion-duration-normal']} ${themeVars['motion-easing-out']}`,
      },
    },
    size: {
      xs:   { width: '240px' },
      sm:   { width: '320px' },
      md:   { width: '400px' },
      lg:   { width: '560px' },
      full: { width: '100%'  },
    },
  },
  defaultVariants: {
    side: 'right',
    size: 'md',
  },
});

// ──────────────────────────────────────────────────────────────────────────────
// Dropdown
// ──────────────────────────────────────────────────────────────────────────────

export const dropdownContent = recipe({
  base: {
    position:       'absolute',
    zIndex:         themeVars['z-dropdown'],
    backgroundColor: themeVars['dropdown-bg'],
    border:         `1px solid ${themeVars['dropdown-border']}`,
    borderRadius:   themeVars['dropdown-radius'],
    boxShadow:      themeVars['dropdown-shadow'],
    padding:        themeVars['dropdown-padding'],
    minWidth:       '180px',
    overflow:       'hidden',
    animation:      `mood-scale-in ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
    transformOrigin: 'top',
  },
  variants: {
    align: {
      start:  { left: '0' },
      end:    { right: '0' },
      center: { left: '50%', transform: 'translateX(-50%)' },
    },
  },
  defaultVariants: {
    align: 'start',
  },
});

export const dropdownItem = recipe({
  base: {
    display:         'flex',
    alignItems:      'center',
    gap:             '8px',
    padding:         '8px 12px',
    fontFamily:      themeVars['font-family-sans'],
    fontSize:        '14px',
    fontWeight:      '500',
    color:           themeVars['color-text-primary'],
    borderRadius:    'var(--mood-radius-sm)',
    cursor:          'pointer',
    outline:         'none',
    transition:      `background-color ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}, color ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
  },
  variants: {
    destructive: {
      true: { color: themeVars['color-danger'] },
    },
  },
  defaultVariants: {},
});

export const dropdownSeparator = recipe({
  base: {
    height:     '1px',
    backgroundColor: themeVars['dropdown-border'],
    margin:     '4px 0',
  },
  variants: {},
  defaultVariants: {},
});

// ──────────────────────────────────────────────────────────────────────────────
// Tooltip
// ──────────────────────────────────────────────────────────────────────────────

export const tooltipContent = recipe({
  base: {
    position:        'absolute',
    zIndex:           themeVars['z-popover'],
    backgroundColor:  themeVars['tooltip-bg'],
    color:            themeVars['tooltip-color'],
    padding:          themeVars['tooltip-padding'],
    borderRadius:     themeVars['tooltip-radius'],
    fontSize:         themeVars['tooltip-font-size'],
    fontFamily:       themeVars['font-family-sans'],
    fontWeight:       '500',
    lineHeight:       '1.4',
    boxShadow:        themeVars['tooltip-shadow'],
    whiteSpace:       'nowrap',
    pointerEvents:   'none',
    animation:        `mood-fade-in ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
  },
  variants: {
    size: {
      sm: { fontSize: '11px', padding: '4px 8px'  },
      md: { fontSize: '12px', padding: '6px 10px' },
      lg: { fontSize: '14px', padding: '8px 12px' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// ──────────────────────────────────────────────────────────────────────────────
// Type exports
// ──────────────────────────────────────────────────────────────────────────────

export type ModalBackdropVariants  = RecipeVariants<typeof modalBackdrop>;
export type ModalDialogVariants    = RecipeVariants<typeof modalDialog>;
export type ModalHeaderVariants    = RecipeVariants<typeof modalHeader>;
export type ModalFooterVariants    = RecipeVariants<typeof modalFooter>;
export type DrawerBackdropVariants = RecipeVariants<typeof drawerBackdrop>;
export type DrawerPanelVariants    = RecipeVariants<typeof drawerPanel>;
export type DropdownContentVariants = RecipeVariants<typeof dropdownContent>;
export type DropdownItemVariants   = RecipeVariants<typeof dropdownItem>;
export type DropdownSeparatorVariants = RecipeVariants<typeof dropdownSeparator>;
export type TooltipContentVariants = RecipeVariants<typeof tooltipContent>;
