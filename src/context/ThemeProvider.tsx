/**
 * ThemeContext + ThemeProvider
 *
 * Provides:
 *   - Active theme (light/dark/system)
 *   - Resolved theme ('light' | 'dark')
 *   - Theme toggle function
 *   - System preference detection
 *
 * Override support:
 *   Consumer apps can override tokens at runtime using assignInlineVars.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import {
  lightThemeClass,
  darkThemeClass,
  THEME_ID_LIGHT,
  THEME_ID_DARK,
  type ThemeId,
} from '../theme';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ResolvedTheme = 'light' | 'dark';
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  /** Current mode setting */
  mode: ThemeMode;
  /** Resolved theme (light or dark, never 'system') */
  resolved: ResolvedTheme;
  /** Set the theme mode */
  setMode: (mode: ThemeMode) => void;
  /** Toggle between light and dark */
  toggle: () => void;
  /** CSS class name for the resolved theme */
  themeClass: string;
}

export interface ThemeProviderProps {
  children: ReactNode;
  /** Initial theme mode (default: 'system') */
  defaultMode?: ThemeMode;
  /** Forced theme (bypasses mode, useful for demos) */
  forcedTheme?: ResolvedTheme;
  /** Called when theme changes */
  onThemeChange?: (theme: ResolvedTheme) => void;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('[MoodUI] useTheme must be used inside <ThemeProvider>.');
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function ThemeProvider({
  children,
  defaultMode = 'system',
  forcedTheme,
  onThemeChange,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);

  const resolved = useMemo<ResolvedTheme>(() => {
    if (forcedTheme) return forcedTheme;
    if (mode === 'system') {
      if (typeof window === 'undefined') return 'light';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return mode;
  }, [mode, forcedTheme]);

  const themeClass = useMemo(
    () => (resolved === 'dark' ? darkThemeClass : lightThemeClass),
    [resolved]
  );

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(lightThemeClass, darkThemeClass);
    root.classList.add(themeClass);
    root.dataset.theme = resolved;
    onThemeChange?.(resolved);
  }, [themeClass, resolved, onThemeChange]);

  // Listen for system preference changes
  useEffect(() => {
    if (mode !== 'system') return;
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      setModeState(prev => prev); // trigger re-resolve via state
    };
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    // Persist preference
    try {
      localStorage.setItem('mood-theme', newMode);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setMode(resolved === 'dark' ? 'light' : 'dark');
  }, [resolved, setMode]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, resolved, setMode, toggle, themeClass }),
    [mode, resolved, setMode, toggle, themeClass]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// ---------------------------------------------------------------------------
// Convenience: detect system preference
// ---------------------------------------------------------------------------

export function useSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export { THEME_ID_LIGHT, THEME_ID_DARK };
export type { ThemeId };
