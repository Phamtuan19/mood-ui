/**
 * Badge CSS Recipe — Vanilla Extract
 */

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVars } from '../theme';

export const badge = recipe({
  base: {
    display:          'inline-flex',
    alignItems:       'center',
    justifyContent:   'center',
    fontFamily:       themeVars['font-family-sans'],
    fontWeight:       '500',
    lineHeight:       '1',
    whiteSpace:       'nowrap',
    verticalAlign:    'middle',
    transition:       `background-color ${themeVars['motion-duration-fast']} ${themeVars['motion-easing-out']}`,
  },

  variants: {
    size: {
      sm: {
        padding:    themeVars['badge-padding-sm'],
        fontSize:   themeVars['font-size-xs'],
        borderRadius: themeVars['badge-radius-sm'],
      },
      md: {
        padding:    themeVars['badge-padding-md'],
        fontSize:   themeVars['font-size-sm'],
        borderRadius: themeVars['badge-radius-md'],
      },
      lg: {
        padding:    themeVars['badge-padding-lg'],
        fontSize:   themeVars['font-size-base'],
        borderRadius: themeVars['badge-radius-md'],
      },
    },

    variant: {
      solid:   {},
      subtle:  {},
      outline: {},
    },

    colorScheme: {
      primary:   {},
      secondary: {},
      danger:    {},
      success:   {},
      warning:   {},
      info:      {},
      purple:    {},
      pink:      {},
      gray:      {},
    },
  },

  compoundVariants: [
    // Solid
    { variants: { variant: 'solid', colorScheme: 'primary'   }, style: { backgroundColor: themeVars['color-primary'],   color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'secondary' }, style: { backgroundColor: themeVars['color-secondary'], color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'danger'    }, style: { backgroundColor: themeVars['color-danger'],   color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'success'   }, style: { backgroundColor: themeVars['color-success'], color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'warning'   }, style: { backgroundColor: themeVars['color-warning'], color: themeVars['color-warning-fg'] } },
    { variants: { variant: 'solid', colorScheme: 'info'      }, style: { backgroundColor: themeVars['color-info'],    color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'purple'    }, style: { backgroundColor: themeVars['color-purple'],  color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'pink'      }, style: { backgroundColor: themeVars['color-pink'],    color: '#ffffff' } },
    { variants: { variant: 'solid', colorScheme: 'gray'      }, style: { backgroundColor: themeVars['color-secondary'], color: '#ffffff' } },

    // Subtle
    { variants: { variant: 'subtle', colorScheme: 'primary'   }, style: { backgroundColor: `${themeVars['color-primary']}15`, color: themeVars['color-primary']   } },
    { variants: { variant: 'subtle', colorScheme: 'secondary' }, style: { backgroundColor: themeVars['color-surface'],   color: themeVars['color-text-secondary'] } },
    { variants: { variant: 'subtle', colorScheme: 'danger'    }, style: { backgroundColor: themeVars['color-danger-bg'], color: themeVars['color-danger'] } },
    { variants: { variant: 'subtle', colorScheme: 'success'   }, style: { backgroundColor: themeVars['color-success-bg'], color: themeVars['color-success'] } },
    { variants: { variant: 'subtle', colorScheme: 'warning'   }, style: { backgroundColor: themeVars['color-warning-bg'], color: themeVars['color-warning'] } },
    { variants: { variant: 'subtle', colorScheme: 'info'      }, style: { backgroundColor: themeVars['color-info-bg'],   color: themeVars['color-info'] } },
    { variants: { variant: 'subtle', colorScheme: 'purple'    }, style: { backgroundColor: themeVars['color-purple-bg'], color: themeVars['color-purple'] } },
    { variants: { variant: 'subtle', colorScheme: 'pink'      }, style: { backgroundColor: themeVars['color-pink-bg'],   color: themeVars['color-pink'] } },
    { variants: { variant: 'subtle', colorScheme: 'gray'      }, style: { backgroundColor: themeVars['color-surface'],   color: themeVars['color-text-secondary'] } },

    // Outline
    { variants: { variant: 'outline', colorScheme: 'primary'   }, style: { backgroundColor: 'transparent', color: themeVars['color-primary'],   border: `1px solid ${themeVars['color-primary']}` } },
    { variants: { variant: 'outline', colorScheme: 'secondary' }, style: { backgroundColor: 'transparent', color: themeVars['color-text-secondary'], border: `1px solid ${themeVars['color-border-strong']}` } },
    { variants: { variant: 'outline', colorScheme: 'danger'    }, style: { backgroundColor: 'transparent', color: themeVars['color-danger'],   border: `1px solid ${themeVars['color-danger']}` } },
    { variants: { variant: 'outline', colorScheme: 'success'   }, style: { backgroundColor: 'transparent', color: themeVars['color-success'],   border: `1px solid ${themeVars['color-success']}` } },
    { variants: { variant: 'outline', colorScheme: 'warning'   }, style: { backgroundColor: 'transparent', color: themeVars['color-warning'],   border: `1px solid ${themeVars['color-warning']}` } },
    { variants: { variant: 'outline', colorScheme: 'info'      }, style: { backgroundColor: 'transparent', color: themeVars['color-info'],      border: `1px solid ${themeVars['color-info']}` } },
    { variants: { variant: 'outline', colorScheme: 'purple'    }, style: { backgroundColor: 'transparent', color: themeVars['color-purple'],    border: `1px solid ${themeVars['color-purple']}` } },
    { variants: { variant: 'outline', colorScheme: 'pink'      }, style: { backgroundColor: 'transparent', color: themeVars['color-pink'],      border: `1px solid ${themeVars['color-pink']}` } },
    { variants: { variant: 'outline', colorScheme: 'gray'      }, style: { backgroundColor: 'transparent', color: themeVars['color-text-secondary'], border: `1px solid ${themeVars['color-border-strong']}` } },
  ],

  defaultVariants: {
    size:        'md',
    variant:     'subtle',
    colorScheme: 'primary',
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
