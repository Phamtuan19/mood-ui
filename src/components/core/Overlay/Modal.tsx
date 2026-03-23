/**
 * Modal Component — No External UI Libraries
 *
 * Accessible modal dialog built with native <dialog> + React state + CSS animations.
 * Features: backdrop, sizes, header/footer slots, close button, focus trap, scroll lock.
 */

import React, {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import { modalBackdrop, modalDialog } from '../../../css/overlay.css';
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
// Modal Header
// ---------------------------------------------------------------------------

export interface ModalTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ children, className, style }) => (
  <h2
    id="mood-modal-title"
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

export interface ModalDescriptionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ModalDescription: React.FC<ModalDescriptionProps> = ({ children, className, style }) => (
  <p
    id="mood-modal-description"
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
// Modal Root
// ---------------------------------------------------------------------------

export interface ModalRootProps {
  children: React.ReactNode;
}

export const ModalRoot: React.FC<ModalRootProps> = ({ children }) => <>{children}</>;

// ---------------------------------------------------------------------------
// Modal Close Button (styled)
// ---------------------------------------------------------------------------

export interface ModalCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'icon' | 'text';
  'aria-label'?: string;
}

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ variant = 'icon', children, className, style, ...rest }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    if (variant === 'icon') {
      return (
        <button
          ref={ref}
          className={className}
          aria-label="Close"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            width:           '32px',
            height:          '32px',
            borderRadius:    '6px',
            color:           hovered
              ? 'var(--mood-color-text-primary, #111827)'
              : 'var(--mood-color-text-muted, #9ca3af)',
            backgroundColor: hovered ? 'var(--mood-color-surface, #f9fafb)' : 'transparent',
            cursor:          'pointer',
            border:          'none',
            transition:      'background-color 100ms, color 100ms',
            ...style,
          }}
          {...rest}
        >
          {children ?? <CloseIcon />}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={className}
        style={style}
        {...rest}
      >
        {children ?? 'Close'}
      </button>
    );
  }
);

ModalClose.displayName = 'ModalClose';

// ---------------------------------------------------------------------------
// Modal Content (the dialog)
// ---------------------------------------------------------------------------

export interface ModalContentProps {
  /** Size of the modal */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Hide the default close button (top-right) */
  hideCloseButton?: boolean;
  /** Strip MoodUI styling */
  unstyled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Modal title id — link with aria-labelledby on ModalTitle */
  labelledBy?: string;
  /** Modal description id — link with aria-describedby on ModalDescription */
  describedBy?: string;
  /** onClose callback — called when backdrop or close button is clicked, or Escape is pressed */
  onClose?: () => void;
  /** Children */
  children?: React.ReactNode;
}

export interface ModalHandle {
  /** Open the modal programmatically */
  open: () => void;
  /** Close the modal programmatically */
  close: () => void;
  /** Current open state */
  isOpen: boolean;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  (
    {
      size = 'md',
      hideCloseButton,
      unstyled,
      className,
      style,
      labelledBy = 'mood-modal-title',
      describedBy = 'mood-modal-description',
      onClose,
      children,
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const combinedRef = mergeRefs(dialogRef, ref);

    const dialogClasses = modalDialog({ size });

    useFocusTrap(dialogRef, true, onClose);
    useScrollLock(true);
    useClickOutside(dialogRef, () => onClose?.());

    // Close on Escape via keydown (focus trap also handles this)
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose?.();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Prevent body scroll
    useEffect(() => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow      = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow      = '';
        document.body.style.paddingRight = '';
      };
    }, []);

    return (
      <>
        <div
          ref={backdropRef}
          className={modalBackdrop()}
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
          className={unstyled ? className : dialogClasses}
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

ModalContent.displayName = 'ModalContent';

// ---------------------------------------------------------------------------
// Modal Header / Footer wrappers
// ---------------------------------------------------------------------------

export interface ModalHeaderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showDivider?: boolean;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className,
  style,
  showDivider = true,
}) => (
  <div
    className={className}
    style={{
      display:        'flex',
      alignItems:    'center',
      justifyContent: 'space-between',
      paddingBottom: '16px',
      marginBottom:  '16px',
      borderBottom:   showDivider ? `1px solid var(--mood-color-border-default, #e5e7eb)` : 'none',
      ...style,
    }}
  >
    {children}
  </div>
);

export interface ModalFooterProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showDivider?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
  style,
  showDivider = true,
}) => (
  <div
    className={className}
    style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'flex-end',
      gap:            '8px',
      paddingTop:     '16px',
      marginTop:      '16px',
      borderTop:       showDivider ? `1px solid var(--mood-color-border-default, #e5e7eb)` : 'none',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------------------
// Composed Modal API (state managed outside)
// ---------------------------------------------------------------------------

export interface ModalProps {
  /** Controlled open state */
  open?: boolean;
  /** Initial open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Children */
  children?: React.ReactNode;
  /** Strip MoodUI styling */
  unstyled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ open: controlledOpen, defaultOpen = false, onOpenChange, size = 'md', children, ...rest }, ref) => {
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
      <ModalContent size={size} onClose={handleClose} {...rest}>
        {children}
      </ModalContent>
    );
  }
);

Modal.displayName = 'Modal';
