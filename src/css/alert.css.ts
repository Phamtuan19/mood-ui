/**
 * Alert CSS Recipe — Vanilla Extract
 * Variants: size, variant, colorScheme
 */

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { globalVars, themeVars } from '../theme';

export const alert = recipe({
  base: {
    display:      'flex',
    alignItems:   'flex-start',
    gap:          '10px',
    width:        '100%',
    fontFamily:   themeVars['font-family-sans'],
    fontWeight:   '500',
    lineHeight:   '1.5',
    borderRadius: globalVars.radiusMd,
    transition:   `background-color ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
  },

  variants: {
    size: {
      sm: {
        padding:    themeVars['alert-padding-sm'],
        fontSize:   '12px',
      },
      md: {
        padding:    themeVars['alert-padding-md'],
        fontSize:   '14px',
      },
    },

    variant: {
      subtle:  {},
      solid:   {},
      outline: {},
    },

    colorScheme: {
      info:    {},
      success: {},
      warning: {},
      danger:  {},
    },
  },

  compoundVariants: [
    // ── Subtle ──────────────────────────────────────────────────────────────
    {
      variants: { variant: 'subtle', colorScheme: 'info'    },
      style: { backgroundColor: themeVars['color-info-bg'],    color: themeVars['color-info-fg'],    border: `1px solid ${themeVars['color-info-bg']}`    },
    },
    {
      variants: { variant: 'subtle', colorScheme: 'success'  },
      style: { backgroundColor: themeVars['color-success-bg'], color: themeVars['color-success-fg'], border: `1px solid ${themeVars['color-success-bg']}` },
    },
    {
      variants: { variant: 'subtle', colorScheme: 'warning'  },
      style: { backgroundColor: themeVars['color-warning-bg'], color: themeVars['color-warning-fg'], border: `1px solid ${themeVars['color-warning-bg']}` },
    },
    {
      variants: { variant: 'subtle', colorScheme: 'danger'   },
      style: { backgroundColor: themeVars['color-danger-bg'],  color: themeVars['color-danger-fg'],  border: `1px solid ${themeVars['color-danger-bg']}`  },
    },
    // ── Solid ──────────────────────────────────────────────────────────────
    {
      variants: { variant: 'solid', colorScheme: 'info'    },
      style: { backgroundColor: themeVars['color-info'],    color: '#ffffff', border: 'none' },
    },
    {
      variants: { variant: 'solid', colorScheme: 'success'  },
      style: { backgroundColor: themeVars['color-success'], color: '#ffffff', border: 'none' },
    },
    {
      variants: { variant: 'solid', colorScheme: 'warning'  },
      style: { backgroundColor: themeVars['color-warning'], color: themeVars['color-warning-fg'], border: 'none' },
    },
    {
      variants: { variant: 'solid', colorScheme: 'danger'   },
      style: { backgroundColor: themeVars['color-danger'],  color: '#ffffff', border: 'none' },
    },
    // ── Outline ────────────────────────────────────────────────────────────
    {
      variants: { variant: 'outline', colorScheme: 'info'    },
      style: { backgroundColor: 'transparent', color: themeVars['color-info'],    border: `1px solid ${themeVars['color-info']}`    },
    },
    {
      variants: { variant: 'outline', colorScheme: 'success'  },
      style: { backgroundColor: 'transparent', color: themeVars['color-success'], border: `1px solid ${themeVars['color-success']}` },
    },
    {
      variants: { variant: 'outline', colorScheme: 'warning'  },
      style: { backgroundColor: 'transparent', color: themeVars['color-warning'], border: `1px solid ${themeVars['color-warning']}` },
    },
    {
      variants: { variant: 'outline', colorScheme: 'danger'   },
      style: { backgroundColor: 'transparent', color: themeVars['color-danger'],  border: `1px solid ${themeVars['color-danger']}`  },
    },
  ],

  defaultVariants: {
    size:        'md',
    variant:     'subtle',
    colorScheme: 'info',
  },
});

export type AlertVariants = RecipeVariants<typeof alert>;
