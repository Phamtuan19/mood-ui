/**
 * Button Component — Dual Mode (Styled + Unstyled, No External UI Libs)
 *
 * Styled mode (default): fully themed with recipe() CSS classes.
 * Unstyled mode: renders an unstyled <button>, user controls all styles.
 * Uses native React polymorphic rendering (as prop) instead of Radix Slot.
 */

import React, { forwardRef } from 'react';
import { button, buttonUnstyledRecipe, type ButtonVariants } from '../../../css/button.css';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type AsProp<C extends React.ElementType> = { as?: C };

type PropsOf<C extends React.ElementType> = React.ComponentPropsWithoutRef<C>;

type PolymorphicProps<C extends React.ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<PropsOf<C>, keyof Props | keyof AsProp<C>>;

type PolymorphicRef<C extends React.ElementType> = React.ComponentRef<C>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: PolymorphicProps<C, ButtonOwnProps & Partial<ButtonVariants>>
) => React.ReactElement | null;

export interface ButtonOwnProps {
  /** Icon rendered before the label */
  leftIcon?: React.ReactNode;
  /** Icon rendered after the label */
  rightIcon?: React.ReactNode;
  /** Show a loading spinner and optional loading text */
  loading?: boolean;
  /** Text to show when loading (replaces children) */
  loadingText?: string;
  /** Strip all MoodUI styling — renders a bare element */
  unstyled?: boolean;
}

export interface ButtonProps
  extends
    PolymorphicProps<'button', ButtonOwnProps & Partial<ButtonVariants>> {}

type ButtonRef = HTMLButtonElement;

// ---------------------------------------------------------------------------
// Spinner
// ---------------------------------------------------------------------------

const Spinner: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ animation: 'mood-spin 0.7s linear infinite', display: 'inline-block', flexShrink: 0 }}
    aria-hidden="true"
  >
    <circle
      cx="12" cy="12" r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="32"
      strokeDashoffset="12"
      opacity="0.25"
    />
    <circle
      cx="12" cy="12" r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="32"
      strokeDashoffset="48"
    />
  </svg>
);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const Button = forwardRef<ButtonRef, ButtonProps>(
  (
    {
      // Style variants
      variant,
      colorScheme,
      size,
      fullWidth,
      rounded,
      loading,

      // Own props
      leftIcon,
      rightIcon,
      loadingText,
      unstyled,

      // Polymorphic
      as,
      className,
      style,
      disabled,

      // HTML attrs
      children,
      onClick,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const content    = loading && loadingText ? loadingText : children;
    const Comp       = (as ?? 'button') as React.ElementType;

    // ── Unstyled mode ──────────────────────────────────────────────────────
    if (unstyled) {
      return (
        <Comp
          ref={ref as React.Ref<PolymorphicRef<'button'>>}
          className={buttonUnstyledRecipe({ className })}
          disabled={isDisabled as boolean}
          onClick={isDisabled ? undefined : onClick as React.MouseEventHandler}
          type={Comp === 'button' ? (type as 'button') : undefined}
          aria-disabled={isDisabled}
          aria-busy={loading}
          {...rest}
        >
          {loading && <Spinner size={14} />}
          {!loading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
          {content}
          {!loading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
        </Comp>
      );
    }

    // ── Styled mode ────────────────────────────────────────────────────────
    const buttonClasses = button({
      variant,
      colorScheme,
      size,
      fullWidth,
      rounded,
      loading: loading ? true : undefined,
    });
    const classes = [buttonClasses, className].filter(Boolean).join(' ');

    return (
      <Comp
        ref={ref as React.Ref<PolymorphicRef<'button'>>}
        className={classes}
        disabled={isDisabled as boolean}
        onClick={isDisabled ? undefined : onClick as React.MouseEventHandler}
        type={Comp === 'button' ? (type as 'button') : undefined}
        style={{
          width:       fullWidth ? '100%' : undefined,
          ...(style as React.CSSProperties),
        }}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {loading && <Spinner size={14} />}
        {!loading && leftIcon && <span aria-hidden="true" style={{ display: 'flex' }}>{leftIcon}</span>}
        {content}
        {!loading && rightIcon && <span aria-hidden="true" style={{ display: 'flex' }}>{rightIcon}</span>}
      </Comp>
    );
  }
) as ButtonComponent;
