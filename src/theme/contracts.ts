/**
 * ThemeContract — Layer Contract
 *
 * Public TypeScript interface for the MoodUI theme system.
 * This file is the PUBLIC API for theming — vanilla-extract internals are NOT
 * imported here. Only plain TypeScript types.
 *
 * Flow:
 *   Layer 1 (raw) → Layer 2 (semantic) → Layer 3 (components)
 *       → ThemeContract (this file) → vanilla-extract themes.ts (internal)
 *           → CSS recipes (button.css.ts, etc.) → Consumer components
 */

// ---------------------------------------------------------------------------
// Color tokens
// ---------------------------------------------------------------------------

export interface ThemeColorRaw {
  blue:    Record<string, string>;
  indigo:  Record<string, string>;
  violet:  Record<string, string>;
  gray:    Record<string, string>;
  slate:   Record<string, string>;
  red:     Record<string, string>;
  orange:  Record<string, string>;
  amber:   Record<string, string>;
  emerald: Record<string, string>;
  green:   Record<string, string>;
  teal:    Record<string, string>;
  cyan:    Record<string, string>;
  sky:     Record<string, string>;
  pink:    Record<string, string>;
  rose:    Record<string, string>;
  transparent: string;
  current: string;
  white: string;
  black: string;
}

export interface ThemeTextColors {
  primary:    string;
  secondary:  string;
  muted:      string;
  inverse:    string;
  disabled:   string;
  placeholder: string;
}

export interface ThemeBorderColors {
  default:  string;
  strong:   string;
  muted:    string;
  focus:    string;
  danger:   string;
  success:  string;
}

export interface ThemeOverlayColors {
  light:  string;
  dark:   string;
  heavy:  string;
}

export interface ThemeActionColors {
  primary:   string;
  secondary: string;
  danger:    string;
  ghost:     string;
}

export interface ThemeShadowColors {
  primary: string;
  danger:  string;
}

export interface ThemeGradientColors {
  primary: string;
  surface: string;
}

export interface ThemeColorScale {
  50: string; 100: string; 200: string; 300: string; 400: string;
  500: string; 600: string; 700: string; 800: string; 900: string; 950: string;
}

export interface ThemeColorPalette {
  primary:        ThemeColorScale;
  secondary:      ThemeColorScale;
  success:        ThemeColorScale;
  warning:        ThemeColorScale;
  danger:         ThemeColorScale;
  info:           ThemeColorScale;
  purple:         ThemeColorScale;
  pink:           ThemeColorScale;

  primarySolid:     string;
  primaryHover:     string;
  primaryActive:    string;
  primaryFg:       string;
  secondarySolid:  string;
  secondaryHover:  string;
  secondaryFg:     string;

  successSolid:    string;
  successBg:      string;
  successFg:      string;
  warningSolid:    string;
  warningBg:      string;
  warningFg:      string;
  dangerSolid:    string;
  dangerBg:       string;
  dangerFg:       string;
  infoSolid:      string;
  infoBg:         string;
  infoFg:         string;
  purpleSolid:    string;
  purpleBg:       string;
  purpleFg:       string;
  pinkSolid:      string;
  pinkBg:         string;
  pinkFg:         string;
}

export interface ThemeColor {
  primary:        ThemeColorScale;
  secondary:       ThemeColorScale;
  success:        ThemeColorScale;
  warning:        ThemeColorScale;
  danger:         ThemeColorScale;
  info:           ThemeColorScale;
  purple:         ThemeColorScale;
  pink:           ThemeColorScale;

  primarySolid:     string;
  primaryHover:     string;
  primaryActive:   string;
  primaryFg:       string;
  secondarySolid:  string;
  secondaryHover:  string;
  secondaryFg:     string;

  successSolid:    string;
  successBg:      string;
  successFg:      string;
  warningSolid:    string;
  warningBg:      string;
  warningFg:      string;
  dangerSolid:     string;
  dangerBg:       string;
  dangerFg:       string;
  infoSolid:      string;
  infoBg:         string;
  infoFg:         string;
  purpleSolid:    string;
  purpleBg:       string;
  purpleFg:       string;
  pinkSolid:      string;
  pinkBg:         string;
  pinkFg:         string;

  canvas:         string;
  surface:        string;
  surfaceRaised:  string;
  surfaceOverlay: string;
  text:           ThemeTextColors;
  border:         ThemeBorderColors;
  overlay:        ThemeOverlayColors;
  action:         ThemeActionColors;
  shadow:         ThemeShadowColors;
  gradient:       ThemeGradientColors;
  /** Raw palette — available for advanced usage */
  raw:            ThemeColorRaw;
}

// ---------------------------------------------------------------------------
// Typography tokens
// ---------------------------------------------------------------------------

export interface ThemeTypographyRole {
  fontFamily:  string;
  fontSize:    string;
  fontWeight:  string;
  lineHeight:  string;
  letterSpacing?: string;
}

export interface ThemeTypography {
  body:    ThemeTypographyRole;
  bodyLg:  ThemeTypographyRole;
  bodySm:  ThemeTypographyRole;
  bodyXs:  ThemeTypographyRole;
  h1:      ThemeTypographyRole;
  h2:      ThemeTypographyRole;
  h3:      ThemeTypographyRole;
  h4:      ThemeTypographyRole;
  h5:      ThemeTypographyRole;
  h6:      ThemeTypographyRole;
  label:   ThemeTypographyRole;
  labelSm: ThemeTypographyRole;
  code:    ThemeTypographyRole;
  codeSm:  ThemeTypographyRole;
  button:  ThemeTypographyRole;
  buttonSm: ThemeTypographyRole;
  buttonLg: ThemeTypographyRole;
}

// ---------------------------------------------------------------------------
// Spacing tokens
// ---------------------------------------------------------------------------

export interface ThemeSpacing {
  0: string; px: string;
  0.5: string; 1: string; 1.5: string; 2: string; 2.5: string; 3: string; 3.5: string; 4: string;
  5: string; 6: string; 7: string; 8: string; 9: string; 10: string; 11: string; 12: string;
  14: string; 16: string; 20: string; 24: string; 28: string; 32: string; 36: string; 40: string;
  44: string; 48: string; 52: string; 56: string; 60: string; 64: string; 72: string; 80: string; 96: string;
}

export interface ThemeRadius {
  none: string; sm: string; DEFAULT: string; md: string; lg: string;
  xl: string; '2xl': string; '3xl': string; full: string;
}

export interface ThemeShadow {
  none: string; xs: string; sm: string; DEFAULT: string;
  md: string; lg: string; xl: string; '2xl': string;
  inner: string; 'inner-sm': string; primary: string;
}

// ---------------------------------------------------------------------------
// Motion tokens
// ---------------------------------------------------------------------------

export interface ThemeMotionTiming {
  duration: string;
  easing:   string;
}

export interface ThemeMotionInteraction {
  hover:  ThemeMotionTiming;
  press:  ThemeMotionTiming;
  focus:  ThemeMotionTiming;
  menuOpen:     ThemeMotionTiming;
  overlayOpen:  ThemeMotionTiming;
  toastEnter:   ThemeMotionTiming;
  toastExit:    ThemeMotionTiming;
  tooltipDelay: string;
}

export interface ThemeMotion {
  fast:   ThemeMotionTiming;
  normal: ThemeMotionTiming;
  slow:   ThemeMotionTiming;
  page:   ThemeMotionTiming;
  interaction: ThemeMotionInteraction;
}

export interface ThemeZIndex {
  auto:     string;
  0: string; 10: string; 20: string; 30: string; 40: string; 50: string;
  base:     string;
  dropdown: string;
  sticky:   string;
  fixed:    string;
  backdrop: string;
  modal:    string;
  popover:  string;
  toast:    string;
  debug:    string;
}

// ---------------------------------------------------------------------------
// Component tokens
// ---------------------------------------------------------------------------

export interface ThemeComponentButton {
  defaultVariant: string;
  defaultIntent:  string;
  defaultSize:    string;
  height:     Record<string, string>;
  padding:    Record<string, string>;
  borderRadius: Record<string, string>;
  typography: Record<string, ThemeTypographyRole>;
  solid:      Record<string, { bg: string; color: string; border: string; shadow: string }>;
  outline:    Record<string, { bg: string; color: string; border: string; shadow: string }>;
  ghost:      Record<string, { bg: string; color: string; border: string; shadow: string }>;
  subtle:     Record<string, { bg: string; color: string; border: string; shadow: string }>;
  state:      Record<string, Record<string, string | number>>;
  motion:     ThemeMotionTiming;
}

export interface ThemeComponentInput {
  defaultStatus: string;
  defaultSize:  string;
  height:        Record<string, string>;
  padding:       Record<string, string>;
  borderRadius:  Record<string, string>;
  typography:     Record<string, ThemeTypographyRole>;
  base:          Record<string, string>;
  disabled:      Record<string, string>;
  error:         Record<string, string>;
  success:       Record<string, string>;
  motion:        ThemeMotionTiming;
}

export interface ThemeComponentBadge {
  defaultVariant:  string;
  defaultIntent:   string;
  defaultSize:    string;
  defaultDotColor: string;
  padding:      Record<string, string>;
  borderRadius: Record<string, string>;
  typography:   Record<string, ThemeTypographyRole>;
  solid:        Record<string, { bg: string; color: string }>;
  subtle:       Record<string, { bg: string; color: string }>;
  outline:      Record<string, { bg: string; border: string; color: string }>;
  dot:          { size: string; color: string };
}

export interface ThemeComponentCard {
  defaultShadow:  string;
  defaultPadding: string;
  padding:      Record<string, string>;
  borderRadius: string;
  bg:           string;
  shadow:       Record<string, string>;
  border:       Record<string, string>;
  divider:      { color: string; width: string };
}

export interface ThemeComponentModal {
  backdrop:    { bg: string; blur: string };
  dialog:      { bg: string; borderRadius: string; shadow: string; padding: string };
  size:        Record<string, string>;
  defaultSize: string;
  motion:      { enter: ThemeMotionTiming; exit: ThemeMotionTiming };
}

export interface ThemeComponentTooltip {
  bg:           string;
  color:        string;
  padding:      string;
  borderRadius: string;
  typography:   Record<string, { fontSize: string; fontWeight: string; lineHeight: string }>;
  shadow:       string;
  arrow:        { size: string; defaultSide: string };
  defaultPlacement: string;
  motion:       { delay: string; enter: ThemeMotionTiming; exit: ThemeMotionTiming };
}

export interface ThemeComponentDrawer {
  defaultSide: string;
  bg:          string;
  shadow:      string;
  border:      { left: string; right: string };
  size:        Record<string, string>;
}

export interface ThemeComponentDropdown {
  defaultSeparator: string;
  bg:              string;
  shadow:          string;
  border:          string;
  borderRadius:    string;
  padding:         string;
  item: {
    padding:  string;
    hover:   string;
    active:  string;
    disabled: { color: string; cursor: string };
    divider: string;
  };
}

// ---------------------------------------------------------------------------
// Full theme contract
// ---------------------------------------------------------------------------

export interface ThemeContract {
  color:        ThemeColor;
  typography:   ThemeTypography;
  space:        ThemeSpacing;
  radius:       ThemeRadius;
  shadow:       ThemeShadow;
  motion:       ThemeMotion;
  zIndex:       ThemeZIndex;
  components: {
    button:  ThemeComponentButton;
    input:   ThemeComponentInput;
    badge:   ThemeComponentBadge;
    card:    ThemeComponentCard;
    modal:   ThemeComponentModal;
    tooltip: ThemeComponentTooltip;
    drawer:  ThemeComponentDrawer;
    dropdown: ThemeComponentDropdown;
  };
}

// ---------------------------------------------------------------------------
// Consumer override shape
// ---------------------------------------------------------------------------

export interface ThemeOverride {
  color?:       Partial<ThemeColor>;
  typography?:  Partial<ThemeTypography>;
  space?:       Partial<ThemeSpacing>;
  radius?:      Partial<ThemeRadius>;
  shadow?:      Partial<ThemeShadow>;
  motion?:      Partial<ThemeMotion>;
  components?:  {
    button?:   Partial<ThemeComponentButton>;
    input?:    Partial<ThemeComponentInput>;
    badge?:    Partial<ThemeComponentBadge>;
    card?:     Partial<ThemeComponentCard>;
    modal?:    Partial<ThemeComponentModal>;
    tooltip?:  Partial<ThemeComponentTooltip>;
    drawer?:   Partial<ThemeComponentDrawer>;
    dropdown?: Partial<ThemeComponentDropdown>;
  };
}

// ---------------------------------------------------------------------------
// Pre-built theme identifiers
// ---------------------------------------------------------------------------

export type ThemeId = 'light' | 'dark' | string;
