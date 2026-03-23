/**
 * Alert Component
 *
 * Displays a contextual feedback message.
 */

import React, { forwardRef } from 'react';
import { alert } from '../../../css/alert.css';

// ---------------------------------------------------------------------------
// Icon mapping
// ---------------------------------------------------------------------------

const icons: Record<string, React.ReactNode> = {
  info: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  success: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  ),
  danger: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface AlertOwnProps {
  /** Strip MoodUI styling */
  unstyled?: boolean;
  /** Hide the default icon */
  hideIcon?: boolean;
  /** Custom icon — replaces the default icon for this colorScheme */
  icon?: React.ReactNode;
  /** Description text below the title */
  description?: React.ReactNode;
}

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof AlertOwnProps> &
  AlertOwnProps & {
  size?: 'sm' | 'md';
  variant?: 'subtle' | 'solid' | 'outline';
  colorScheme?: 'info' | 'success' | 'warning' | 'danger';
};

type AlertRef = HTMLDivElement;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const Alert = forwardRef<AlertRef, AlertProps>(
  (
    {
      // Style variants
      size,
      variant,
      colorScheme,

      // Own props
      unstyled,
      hideIcon,
      icon,
      description,
      className,
      style,
      children,

      // HTML attrs
      ...rest
    },
    ref
  ) => {
    const defaultIcon = icons[colorScheme ?? 'info'];

    if (unstyled) {
      return (
        <div ref={ref} className={className} style={style} {...rest}>
          {children}
          {description}
        </div>
      );
    }

    const alertClasses = alert({ size, variant, colorScheme });
    const classes = [alertClasses, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} role="alert" className={classes} style={style} {...rest}>
        {!hideIcon && (icon ?? defaultIcon) && (
          <span
            aria-hidden="true"
            style={{ display: 'flex', alignItems: 'flex-start', flexShrink: 0, marginTop: '1px' }}
          >
            {icon ?? defaultIcon}
          </span>
        )}
        <div style={{ flex: '1 1 auto', minWidth: '0' }}>
          {children && (
            <p style={{ fontWeight: '600', margin: '0', fontSize: 'inherit' }}>{children}</p>
          )}
          {description && (
            <p style={{ margin: description && children ? '4px 0 0' : '0', fontWeight: '400', opacity: '0.9' }}>
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
