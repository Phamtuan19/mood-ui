/**
 * Input Component
 *
 * Controlled/uncontrolled input with size and status variants.
 * Supports addons (left/right prefix/suffix) and inline icons.
 */

import React, { forwardRef } from 'react';
import { input } from '../../../css/input.css';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InputAddonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface InputOwnProps {
  /** Addon rendered on the left side of the input */
  leftAddon?: React.ReactNode;
  /** Addon rendered on the right side of the input */
  rightAddon?: React.ReactNode;
  /** Icon rendered inside the input on the left */
  leftIcon?: React.ReactNode;
  /** Icon rendered inside the input on the right */
  rightIcon?: React.ReactNode;
  /** Full-width input */
  fullWidth?: boolean;
  /** Strip MoodUI styling */
  unstyled?: boolean;
}

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps> &
  InputOwnProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  status?: 'default' | 'error' | 'success';
};

type InputRef = HTMLInputElement;

// ---------------------------------------------------------------------------
// Addon — rendered as a non-interactive prefix/suffix
// ---------------------------------------------------------------------------

const Addon: React.FC<InputAddonProps> = ({ children, className, style }) => (
  <span
    className={className}
    style={{
      display:      'flex',
      alignItems:   'center',
      padding:      '0 10px',
      color:        'inherit',
      fontSize:     'inherit',
      lineHeight:   '1',
      whiteSpace:   'nowrap',
      userSelect:   'none',
      flexShrink:   '0',
      ...style,
    }}
  >
    {children}
  </span>
);

// ---------------------------------------------------------------------------
// Input Element (stateless)
// ---------------------------------------------------------------------------

export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      // Style variants
      size,
      status,

      // Own props
      leftAddon,
      rightAddon,
      leftIcon,
      rightIcon,
      fullWidth,
      unstyled,
      className,
      style,
      disabled,

      // HTML attrs
      id,
      placeholder,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const hasLeftAddon  = Boolean(leftAddon);
    const hasRightAddon = Boolean(rightAddon);
    const hasLeftIcon   = Boolean(leftIcon) && !hasLeftAddon;
    const hasRightIcon  = Boolean(rightIcon) && !hasRightAddon;

    // ── Unstyled mode ──────────────────────────────────────────────────────
    if (unstyled) {
      return (
        <input
          ref={ref}
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          style={{ width: fullWidth ? '100%' : undefined, ...style }}
          {...rest}
        />
      );
    }

    const inputRecipeClasses = input({ size, status });
    const inputClasses = [inputRecipeClasses, className].filter(Boolean).join(' ');

    return (
      <div
        style={{
          position:  'relative',
          display:   'inline-flex',
          alignItems: 'stretch',
          width:      fullWidth ? '100%' : undefined,
        }}
      >
        {/* Left Addon */}
        {hasLeftAddon && (
          <Addon
            className={inputClasses}
            style={{
              borderRight:             'none',
              borderTopRightRadius:    '0',
              borderBottomRightRadius: '0',
              backgroundColor: 'var(--mood-color-surface, #f9fafb)',
              color:           'var(--mood-color-text-secondary, #4b5563)',
              border:          `1px solid var(--mood-color-border-default, #e5e7eb)`,
            }}
          >
            {leftAddon}
          </Addon>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={hasLeftAddon || hasRightAddon ? undefined : inputClasses}
          style={{
            width:           fullWidth ? '100%' : undefined,
            flex:            '1 1 auto',
            minWidth:        '0',
            borderRadius:    hasLeftAddon  ? '0'
                           : hasRightAddon ? '0'
                           : undefined,
            borderLeftColor: hasLeftAddon  ? 'transparent' : undefined,
            borderRightColor: hasRightAddon ? 'transparent' : undefined,
            paddingLeft:     hasLeftIcon ? '36px' : undefined,
            paddingRight:    hasRightIcon ? '36px' : undefined,
            ...style,
          }}
          {...rest}
        />

        {/* Right Addon */}
        {hasRightAddon && (
          <Addon
            className={inputClasses}
            style={{
              borderLeft:              'none',
              borderTopLeftRadius:      '0',
              borderBottomLeftRadius:   '0',
              backgroundColor: 'var(--mood-color-surface, #f9fafb)',
              color:           'var(--mood-color-text-secondary, #4b5563)',
              border:          `1px solid var(--mood-color-border-default, #e5e7eb)`,
            }}
          >
            {rightAddon}
          </Addon>
        )}

        {/* Left Icon */}
        {hasLeftIcon && (
          <span
            aria-hidden="true"
            style={{
              position:      'absolute',
              left:          '10px',
              top:           '50%',
              transform:     'translateY(-50%)',
              color:         'var(--mood-color-text-muted, #9ca3af)',
              pointerEvents: 'none',
              display:       'flex',
            }}
          >
            {leftIcon}
          </span>
        )}

        {/* Right Icon */}
        {hasRightIcon && (
          <span
            aria-hidden="true"
            style={{
              position:      'absolute',
              right:         '10px',
              top:           '50%',
              transform:     'translateY(-50%)',
              color:         'var(--mood-color-text-muted, #9ca3af)',
              pointerEvents: 'none',
              display:       'flex',
            }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
