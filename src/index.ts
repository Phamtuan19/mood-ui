/**
 * MoodUI — Main Entry Point
 *
 * Usage:
 *   import { MoodUIProvider, Button, Badge } from 'mood-ui';
 *   import 'mood-ui/styles/globals.css';  // in your root or CSS entry
 */

// ── MoodUIProvider ─────────────────────────────────────────────────────────
export { ThemeProvider as MoodUIProvider } from './context/ThemeProvider';
export { ThemeProvider } from './context/ThemeProvider';
export type {
  ThemeProviderProps as MoodUIProviderProps,
  ThemeContextValue,
  ThemeMode,
  ResolvedTheme,
} from './context/ThemeProvider';

// ── Theme class names ───────────────────────────────────────────────────────
export { lightThemeClass, darkThemeClass } from './theme';
export { useTheme } from './hooks/useTheme';
export { useClickOutside, useFocusTrap, useScrollLock, mergeRefs } from './hooks/useOverlay';

// ── Theme types ───────────────────────────────────────────────────────────
export type { ThemeId, ThemeOverride, ThemeContract } from './theme';

// ── Components: Core ──────────────────────────────────────────────────────
export { Button } from './components/core/Button';
export type { ButtonProps, ButtonOwnProps } from './components/core/Button';

export { Badge } from './components/core/Badge';
export type { BadgeProps, BadgeOwnProps } from './components/core/Badge';

export { Input } from './components/core/Input';
export type { InputProps } from './components/core/Input';

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardDivider,
  CardTitle,
  CardDescription,
} from './components/core/Card';
export type { CardProps } from './components/core/Card';

export { Alert } from './components/core/Alert';
export type { AlertProps } from './components/core/Alert';

// ── Components: Overlay ───────────────────────────────────────────────────
export {
  Modal,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalHeader,
  ModalFooter,
} from './components/core/Overlay/Modal';
export type {
  ModalProps,
  ModalHandle,
  ModalContentProps,
} from './components/core/Overlay/Modal';

export {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
} from './components/core/Overlay/Drawer';
export type {
  DrawerProps,
  DrawerHandle,
  DrawerContentProps,
} from './components/core/Overlay/Drawer';

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from './components/core/Overlay/Dropdown';
export type {
  DropdownProps,
  DropdownHandle,
  DropdownContentProps,
  DropdownItemProps,
} from './components/core/Overlay/Dropdown';

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from './components/core/Overlay/Tooltip';
export type {
  TooltipProps,
  TooltipHandle,
  TooltipContentProps,
} from './components/core/Overlay/Tooltip';
