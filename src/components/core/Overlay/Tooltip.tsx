/**
 * Tooltip Component — No External UI Libraries
 *
 * Accessible tooltip with hover/focus trigger, configurable placement.
 * Uses native React + useEffect for timing.
 */

import React, {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import { tooltipContent } from '../../../css/overlay.css';

// ---------------------------------------------------------------------------
// Arrow component (pure CSS triangle)
// ---------------------------------------------------------------------------

export interface TooltipArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

export const TooltipArrow: React.FC<TooltipArrowProps> = ({ className, style }) => (
  <svg
    className={className}
    style={{
      position: 'absolute',
      width:    '10px',
      height:   '5px',
      ...style,
    }}
    viewBox="0 0 10 5"
    aria-hidden="true"
  >
    <path
      d="M0 0 L5 5 L10 0 Z"
      fill="var(--mood-tooltip-bg, #1f2937)"
    />
  </svg>
);

// ---------------------------------------------------------------------------
// Tooltip Content
// ---------------------------------------------------------------------------

export interface TooltipContentProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ size = 'md', children, ...rest }, ref) => {
    const contentClasses = tooltipContent({ size });

    return (
      <div
        ref={ref}
        role="tooltip"
        className={contentClasses}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

TooltipContent.displayName = 'TooltipContent';

// ---------------------------------------------------------------------------
// Tooltip Trigger (stateless — controlled by parent)
// ---------------------------------------------------------------------------

export interface TooltipTriggerProps {
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
  children,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onClick,
}) => (
  <div
    className={className}
    style={style}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onFocus={onFocus}
    onBlur={onBlur}
    onClick={onClick}
  >
    {children}
  </div>
);

// ---------------------------------------------------------------------------
// Tooltip Root (state management)
// ---------------------------------------------------------------------------

export interface TooltipProps {
  /** Tooltip text content */
  content: React.ReactNode;
  /** Trigger element */
  children: React.ReactElement;
  /** Controlled open state */
  open?: boolean;
  /** Initial open state */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Delay before showing tooltip (ms) */
  delayShow?: number;
  /** Delay before hiding tooltip (ms) */
  delayHide?: number;
}

export interface TooltipHandle {
  open: () => void;
  close: () => void;
}

export const Tooltip = forwardRef<TooltipHandle, TooltipProps>(
  (
    {
      content,
      children,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      delayShow = 300,
      delayHide = 100,
    },
    ref
  ) => {
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

    const openTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimers = useCallback(() => {
      if (openTimer.current)  clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      openTimer.current  = null;
      closeTimer.current = null;
    }, []);

    const handleOpen = useCallback(() => {
      clearTimers();
      openTimer.current = setTimeout(() => setOpen(true), delayShow);
    }, [clearTimers, setOpen, delayShow]);

    const handleClose = useCallback(() => {
      clearTimers();
      closeTimer.current = setTimeout(() => setOpen(false), delayHide);
    }, [clearTimers, setOpen, delayHide]);

    const handleFocus = useCallback(() => {
      clearTimers();
      setOpen(true);
    }, [clearTimers, setOpen]);

    useImperativeHandle(ref, () => ({
      open:  handleOpen,
      close: handleClose,
    }), [handleOpen, handleClose]);

    // Clean up timers on unmount
    React.useEffect(() => {
      return () => clearTimers();
    }, [clearTimers]);

    return (
      <TooltipStateful
        content={content}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        onFocus={handleFocus}
      >
        {children}
      </TooltipStateful>
    );
  }
);

Tooltip.displayName = 'Tooltip';

// ---------------------------------------------------------------------------
// Internal stateful child (receives open state from parent)
// ---------------------------------------------------------------------------

interface TooltipStatefulProps {
  content: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactElement;
}

const TooltipStateful: React.FC<TooltipStatefulProps> = ({
  content,
  open,
  onOpen,
  onClose,
  onFocus,
  children,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    onOpen();
    children.props.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    onClose();
    children.props.onMouseLeave?.(e);
  };

  const handleFocus = (e: React.FocusEvent) => {
    onFocus();
    children.props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent) => {
    onClose();
    children.props.onBlur?.(e);
  };

  const triggerProps = {
    ...children.props,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  return (
    <>
      {React.cloneElement(children, triggerProps)}
      {open && (
        <div
          ref={tooltipRef}
          role="tooltip"
          style={{
            position:      'absolute',
            zIndex:        '1060',
            pointerEvents: 'none',
          }}
        >
          <div role="tooltip" className={tooltipContent({})}>
            {content}
          </div>
          <TooltipArrow
            style={{ bottom: '-5px', left: '50%', transform: 'translateX(-50%)' }}
          />
        </div>
      )}
    </>
  );
};
