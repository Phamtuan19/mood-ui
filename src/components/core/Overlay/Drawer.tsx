/**
 * Drawer Component — No External UI Libraries
 *
 * Accessible side panel drawer built with native React + CSS slide animations.
 * Features: slide direction (left/right/top/bottom), sizes, header/footer slots, focus trap, scroll lock.
 */

import React, {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import { drawerBackdrop, drawerPanel } from '../../../css/overlay.css';
import { useFocusTrap, useScrollLock, useClickOutside, mergeRefs } from '../../../hooks/useOverlay';

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

// ---------------------------------------------------------------------------
// Drawer Title / Description
// ---------------------------------------------------------------------------

export interface DrawerTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DrawerTitle: React.FC<DrawerTitleProps> = ({ children, className, style }) => (
  <h2
    id="mood-drawer-title"
    className={className}
    style={{
      fontSize:   '18px',
      fontWeight: '600',
      lineHeight: '1.3',
      color:      'var(--mood-color-text-primary, #111827)',
      margin:     '0',
      ...style,
    }}
  >
    {children}
  </h2>
);

export interface DrawerDescriptionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DrawerDescription: React.FC<DrawerDescriptionProps> = ({ children, className, style }) => (
  <p
    id="mood-drawer-description"
    className={className}
    style={{
      fontSize:   '14px',
      lineHeight: '1.6',
      color:      'var(--mood-color-text-secondary, #4b5563)',
      margin:     '8px 0 0',
      ...style,
    }}
  >
    {children}
  </p>
);

// ---------------------------------------------------------------------------
// Drawer Header / Footer / Body
// ---------------------------------------------------------------------------

export interface DrawerHeaderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children, className, style }) => (
  <div
    className={className}
    style={{
      display:        'flex',
      alignItems:    'center',
      justifyContent: 'space-between',
      padding:       '20px 20px 16px',
      flexShrink:    0,
      ...style,
    }}
  >
    {children}
  </div>
);

export interface DrawerFooterProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children, className, style }) => (
  <div
    className={className}
    style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'flex-end',
      gap:            '8px',
      padding:        '16px 20px',
      borderTop:      `1px solid var(--mood-color-border-default, #e5e7eb)`,
      flexShrink:    0,
      ...style,
    }}
  >
    {children}
  </div>
);

export interface DrawerBodyProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DrawerBody: React.FC<DrawerBodyProps> = ({ children, className, style }) => (
  <div
    className={className}
    style={{
      padding:     '0 20px',
      flex:        '1 1 auto',
      overflowY:   'auto',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------------------
// Drawer Content
// ---------------------------------------------------------------------------

export interface DrawerContentProps {
  side?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  hideCloseButton?: boolean;
  unstyled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelledBy?: string;
  describedBy?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  (
    {
      side = 'right',
      size = 'md',
      hideCloseButton,
      unstyled,
      className,
      style,
      labelledBy = 'mood-drawer-title',
      describedBy = 'mood-drawer-description',
      onClose,
      children,
    },
    ref
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const combinedRef = mergeRefs(panelRef, ref);

    const panelClasses = drawerPanel({ side, size });

    useFocusTrap(panelRef, true, onClose);
    useScrollLock(true);
    useClickOutside(panelRef, () => onClose?.());

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose?.();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
      <>
        <div
          ref={backdropRef}
          className={drawerBackdrop()}
          style={{ animation: 'mood-fade-in 200ms cubic-bezier(0, 0, 0.2, 1)' }}
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={combinedRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
          className={unstyled ? className : panelClasses}
          tabIndex={-1}
          style={style}
        >
          {children}
          {!hideCloseButton && (
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position:     'absolute',
                top:          '16px',
                right:        '16px',
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
                width:        '32px',
                height:       '32px',
                borderRadius: '6px',
                color:        'var(--mood-color-text-muted, #9ca3af)',
                cursor:       'pointer',
                border:       'none',
                background:   'none',
                transition:   'background-color 100ms, color 100ms',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget;
                btn.style.backgroundColor = 'var(--mood-color-surface, #f9fafb)';
                btn.style.color = 'var(--mood-color-text-primary, #111827)';
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget;
                btn.style.backgroundColor = 'transparent';
                btn.style.color = 'var(--mood-color-text-muted, #9ca3af)';
              }}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </>
    );
  }
);

DrawerContent.displayName = 'DrawerContent';

// ---------------------------------------------------------------------------
// Composed Drawer API
// ---------------------------------------------------------------------------

export interface DrawerProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  children?: React.ReactNode;
  unstyled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface DrawerHandle {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export const Drawer = forwardRef<DrawerHandle, DrawerProps>(
  ({ open: controlledOpen, defaultOpen = false, onOpenChange, side, size, children, ...rest }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
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

    useImperativeHandle(ref, () => ({
      open:  () => setOpen(true),
      close: handleClose,
      isOpen: open,
    }), [open, setOpen, handleClose]);

    if (!open) return null;

    return (
      <DrawerContent side={side} size={size} onClose={handleClose} {...rest}>
        {children}
      </DrawerContent>
    );
  }
);

Drawer.displayName = 'Drawer';
