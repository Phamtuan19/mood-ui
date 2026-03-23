/**
 * Badge Component
 */

import React from 'react';
import { badge, type BadgeVariants } from '../../../css/badge.css';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface BadgeOwnProps {
  /** Render as a different element (e.g. 'span', 'div') */
  as?: keyof JSX.IntrinsicElements;
  /** Dot-only mode (no text) */
  dot?: boolean;
}

export type BadgeProps = Omit<React.HTMLAttributes<HTMLSpanElement>, keyof BadgeOwnProps> &
  BadgeOwnProps &
  Partial<BadgeVariants>;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant,
      colorScheme,
      size,
      dot,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const badgeClasses = badge({ variant, colorScheme, size });
    const classes = [badgeClasses, className].filter(Boolean).join(' ');

    if (dot) {
      return (
        <span
          ref={ref}
          className={classes}
          style={{
            width: '8px',
            height: '8px',
            minWidth: '8px',
            padding: 0,
            borderRadius: '50%',
            ...style,
          }}
          aria-hidden="true"
          {...rest}
        />
      );
    }

    return (
      <span ref={ref} className={classes} style={style} {...rest}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
