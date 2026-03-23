/**
 * Dropdown Component — No External UI Libraries
 *
 * Accessible dropdown menu with items, separators, destructive variants.
 * Uses native React + click-outside + keyboard support + React Context.
 */

import React, {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  useState,
  createContext,
  useContext,
} from 'react';
import { dropdownContent, dropdownItem, dropdownSeparator } from '../../../css/overlay.css';
import { useClickOutside } from '../../../hooks/useOverlay';

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Dropdown Context
// ---------------------------------------------------------------------------

interface DropdownContextValue {
  open: boolean;
  onClose: () => void;
}

const DropdownContext = createContext<DropdownContextValue>({
  open: false,
  onClose: () => {},
});

export function useDropdown() {
  return useContext(DropdownContext);
}

// ---------------------------------------------------------------------------
// Dropdown Root
// ---------------------------------------------------------------------------

export interface DropdownProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: 'start' | 'end' | 'center';
}

export interface DropdownHandle {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export const Dropdown = forwardRef<DropdownHandle, DropdownProps>(
  ({ children, open: controlledOpen, defaultOpen = false, onOpenChange }, ref) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const setOpen = useCallback(
      (next: boolean) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange?.(next);
      },
      [isControlled, onOpenChange]
    );

    const handleClose = useCallback(() => setOpen(false), [setOpen]);
    const handleOpen  = useCallback(() => setOpen(true),  [setOpen]);

    useImperativeHandle(ref, () => ({
      open:  handleOpen,
      close: handleClose,
      isOpen: open,
    }), [open, handleOpen, handleClose]);

    return (
      <DropdownContext.Provider value={{ open, onClose: handleClose }}>
        {children}
      </DropdownContext.Provider>
    );
  }
);

Dropdown.displayName = 'Dropdown';

// ---------------------------------------------------------------------------
// Dropdown Trigger
// ---------------------------------------------------------------------------

export interface DropdownTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, className, style, onClick, ...rest }, ref) => {
    const { onClose } = useDropdown();

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        onClose();
      },
      [onClick, onClose]
    );

    return (
      <button
        ref={ref}
        className={className}
        style={style}
        onClick={handleClick}
        aria-haspopup="menu"
        aria-expanded="true"
        {...rest}
      >
        {children}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

// ---------------------------------------------------------------------------
// Dropdown Content
// ---------------------------------------------------------------------------

export interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center';
  sideOffset?: number;
}

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ align = 'start', sideOffset = 4, className, style, children, ...rest }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { open, onClose } = useDropdown();

    const contentClasses = dropdownContent({ align });

    useClickOutside(contentRef, () => onClose());

    // Focus first item on open + keyboard navigation
    useEffect(() => {
      if (!open || !contentRef.current) return;

      const focusableSelectors = [
        'button:not([disabled])',
        'input:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(',');

      const getFocusable = (): HTMLElement[] =>
        Array.from(contentRef.current!.querySelectorAll<HTMLElement>(focusableSelectors));

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') { e.stopPropagation(); onClose(); return; }
        if (e.key === 'Tab')   { e.stopPropagation(); onClose(); return; }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const focusable = getFocusable();
          const current = document.activeElement;
          const idx = focusable.indexOf(current as HTMLElement);
          if (idx < 0 || idx === focusable.length - 1) focusable[0]?.focus();
          else focusable[idx + 1]?.focus();
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          const focusable = getFocusable();
          const current = document.activeElement;
          const idx = focusable.indexOf(current as HTMLElement);
          if (idx <= 0) focusable[focusable.length - 1]?.focus();
          else focusable[idx - 1]?.focus();
        }
      };

      const focusable = getFocusable();
      if (focusable.length > 0) focusable[0].focus();
      else contentRef.current.focus();

      document.addEventListener('keydown', handleKeyDown, true);
      return () => document.removeEventListener('keydown', handleKeyDown, true);
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div
        ref={(node) => {
          (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="menu"
        aria-orientation="vertical"
        className={contentClasses}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

DropdownContent.displayName = 'DropdownContent';

// ---------------------------------------------------------------------------
// Dropdown Item
// ---------------------------------------------------------------------------

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  destructive?: boolean;
  shortcut?: string;
  disabled?: boolean;
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ destructive, shortcut, children, className, style, disabled, onClick, ...rest }, ref) => {
    const { onClose } = useDropdown();
    const itemClasses = dropdownItem({ destructive });

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        onClick?.(e);
        onClose();
      },
      [disabled, onClick, onClose]
    );

    return (
      <button
        ref={ref}
        role="menuitem"
        className={itemClasses}
        style={style}
        disabled={disabled}
        data-disabled={disabled ? '' : undefined}
        aria-disabled={disabled}
        onClick={handleClick}
        {...rest}
      >
        {children}
        {shortcut && (
          <span
            style={{
              marginLeft: 'auto',
              fontSize:   '12px',
              opacity:    '0.6',
              fontFamily: 'monospace',
            }}
          >
            {shortcut}
          </span>
        )}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

// ---------------------------------------------------------------------------
// Dropdown Separator
// ---------------------------------------------------------------------------

export interface DropdownSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

export const DropdownSeparator: React.FC<DropdownSeparatorProps> = ({
  className,
  style,
  ...rest
}) => (
  <hr
    role="separator"
    aria-orientation="horizontal"
    className={dropdownSeparator()}
    style={{
      border:      'none',
      borderTop:   `1px solid var(--mood-color-border-default, #e5e7eb)`,
      margin:     '4px 0',
      ...style,
    }}
    {...rest}
  />
);

// ---------------------------------------------------------------------------
// Dropdown Label
// ---------------------------------------------------------------------------

export interface DropdownLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({ children, className, style, ...rest }) => (
  <div
    role="presentation"
    className={className}
    style={{
      padding:      '8px 12px 4px',
      fontSize:    '11px',
      fontWeight:  '600',
      color:       'var(--mood-color-text-muted, #9ca3af)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      userSelect:  'none',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);
