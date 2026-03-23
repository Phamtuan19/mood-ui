/**
 * Card CSS Recipe — Vanilla Extract
 * Variants: size (padding), shadow, rounded
 */

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVars } from '../theme';

export const card = recipe({
  base: {
    backgroundColor: themeVars['card-bg'],
    border:          `1px solid ${themeVars['card-border']}`,
    borderRadius:    themeVars['card-radius'],
    transition:      `box-shadow ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}, border-color ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
  },

  variants: {
    size: {
      sm: { padding: themeVars['card-padding-sm'] },
      md: { padding: themeVars['card-padding-md'] },
      lg: { padding: themeVars['card-padding-lg'] },
    },

    shadow: {
      none: { boxShadow: themeVars['card-shadow-none'] },
      sm:   { boxShadow: themeVars['card-shadow-sm']  },
      md:   { boxShadow: themeVars['card-shadow-md']  },
      lg:   { boxShadow: themeVars['card-shadow-lg']  },
    },

    rounded: {
      none: { borderRadius: '0'   },
      sm:   { borderRadius: 'var(--mood-radius-sm)'   },
      md:   { borderRadius: 'var(--mood-radius-md)'   },
      lg:   { borderRadius: 'var(--mood-radius-lg)'   },
      full: { borderRadius: 'var(--mood-radius-full)' },
    },
  },

  compoundVariants: [
    // Shadow + rounded combinations
    { variants: { shadow: 'md', rounded: 'lg' }, style: { borderRadius: 'var(--mood-radius-xl)' } },
    { variants: { shadow: 'lg', rounded: 'lg' }, style: { borderRadius: 'var(--mood-radius-2xl)' } },
  ],

  defaultVariants: {
    size:    'md',
    shadow:  'none',
    rounded: 'md',
  },
});

export type CardVariants = RecipeVariants<typeof card>;
