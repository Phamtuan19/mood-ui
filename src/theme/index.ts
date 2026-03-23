/**
 * Theme — Public Barrel Export
 *
 * This is the ONLY file in src/theme/ that should be imported by:
 *   - Components (CSS recipes)
 *   - Consumer apps (type imports, CSS class names)
 *
 * Vanilla-extract internals are hidden in themes.css.ts. This file exports:
 *   - Theme class names (lightThemeClass, darkThemeClass)
 *   - CSS variable object (vars) for recipe() usage
 *   - TypeScript types from contracts.ts
 *   - Theme IDs and override utilities
 */

// ── Vanilla-extract: theme class names + CSS vars ──────────────────────────
export { lightThemeClass, darkThemeClass } from './themes.css';
export { vars as themeVars } from './themes.css';
export { globalVars } from './themes.css';

// ── TypeScript types (no vanilla-extract import here) ─────────────────────
export type {
  ThemeContract,
  ThemeOverride,
  ThemeId,
  ThemeColor,
  ThemeTypography,
  ThemeSpacing,
  ThemeRadius,
  ThemeShadow,
  ThemeMotion,
  ThemeZIndex,
  ThemeComponentButton,
  ThemeComponentInput,
  ThemeComponentBadge,
} from './contracts';

// ── Theme identifiers ────────────────────────────────────────────────────
export const THEME_ID_LIGHT = 'light' as const;
export const THEME_ID_DARK  = 'dark'  as const;
export type BuiltInThemeId = typeof THEME_ID_LIGHT | typeof THEME_ID_DARK;
