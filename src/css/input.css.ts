/**
 * Input CSS Recipe — Vanilla Extract
 * Variants: size, status
 */

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVars } from '../theme';

export const input = recipe({
  base: {
    display:       'block',
    width:         '100%',
    fontFamily:    themeVars['font-family-sans'],
    lineHeight:    '1.5',
    color:         themeVars['color-text-primary'],
    backgroundColor: themeVars['color-canvas'],
    border:        `1px solid ${themeVars['color-border-default']}`,
    outline:       'none',
    transition:    `border-color ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}, box-shadow ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
    appearance:    'none',
  },

  variants: {
    size: {
      xs: {
        height:    themeVars['input-height-xs'],
        padding:   themeVars['input-padding-sm'],
        fontSize:  '12px',
        borderRadius: themeVars['input-radius-sm'],
      },
      sm: {
        height:    themeVars['input-height-sm'],
        padding:   themeVars['input-padding-sm'],
        fontSize:  '14px',
        borderRadius: themeVars['input-radius-sm'],
      },
      md: {
        height:    themeVars['input-height-md'],
        padding:   themeVars['input-padding-md'],
        fontSize:  '14px',
        borderRadius: themeVars['input-radius-md'],
      },
      lg: {
        height:    themeVars['input-height-lg'],
        padding:   themeVars['input-padding-lg'],
        fontSize:  '16px',
        borderRadius: themeVars['input-radius-md'],
      },
    },
    status: {
      default: {},
      error: {},
      success: {},
    },
  },

  compoundVariants: [
    // Error status
    { variants: { status: 'error' }, style: { borderColor: themeVars['color-border-danger'] } },
    // Success status
    { variants: { status: 'success' }, style: { borderColor: themeVars['color-border-success'] } },
  ],

  defaultVariants: {
    size:   'md',
    status: 'default',
  },
});

export type InputVariants = RecipeVariants<typeof input>;
