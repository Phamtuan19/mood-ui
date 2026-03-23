/**
 * Card Component
 *
 * A flexible container component for grouping related content.
 */

import React, { forwardRef } from 'react';
import { card } from '../../../css/card.css';

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, style }) => (
  <div
    className={className}
    style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '20px 20px 0',
      ...style,
    }}
  >
    {children}
  </div>
);

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className, style }) => (
  <div
    className={className}
    style={{
      padding: '20px',
      ...style,
    }}
  >
    {children}
  </div>
);

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
  <div
    className={className}
    style={{
      display:        'flex',
      alignItems:     'center',
      gap:            '8px',
      padding:        '16px 20px',
      borderTop:      `1px solid var(--mood-color-border-default, #e5e7eb)`,
    }}
  >
    {children}
  </div>
);

export interface CardDividerProps {
  className?: string;
}

export const CardDivider: React.FC<CardDividerProps> = ({ className }) => (
  <hr
    className={className}
    style={{
      border:       'none',
      borderTop:     `1px solid var(--mood-color-border-default, #e5e7eb)`,
      margin:        '0',
    }}
  />
);

export interface CardTitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  style?: React.CSSProperties;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  as: Tag = 'h3',
  className,
  style,
}) => (
  <Tag
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
  </Tag>
);

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
  style,
}) => (
  <p
    className={className}
    style={{
      fontSize:   '14px',
      lineHeight: '1.6',
      color:      'var(--mood-color-text-secondary, #4b5563)',
      margin:     '4px 0 0',
      ...style,
    }}
  >
    {children}
  </p>
);

// ---------------------------------------------------------------------------
// Card Root
// ---------------------------------------------------------------------------

export interface CardOwnProps {
  /** Strip MoodUI styling */
  unstyled?: boolean;
  /** Render as a different HTML element */
  as?: React.ElementType;
}

export type CardProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof CardOwnProps> &
  CardOwnProps & {
  size?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Remove default border */
  borderless?: boolean;
};

type CardRef = HTMLDivElement;

export const Card = forwardRef<CardRef, CardProps>(
  (
    {
      // Style variants
      size,
      shadow,
      rounded,

      // Own props
      unstyled,
      borderless,
      as: Tag = 'div',
      className,
      style,
      children,

      // HTML attrs
      ...rest
    },
    ref
  ) => {
    if (unstyled) {
      return (
        <Tag ref={ref} className={className} style={style} {...rest}>
          {children}
        </Tag>
      );
    }

    const cardClasses = card({ size, shadow, rounded });
    const classes = [cardClasses, className].filter(Boolean).join(' ');

    return (
      <Tag
        ref={ref}
        className={classes}
        style={{
          border: borderless ? 'none' : undefined,
          ...style,
        }}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Card.displayName = 'Card';
