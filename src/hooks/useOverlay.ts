/**
 * Overlay utility hooks — no external UI libraries required.
 */

import { useEffect, useRef } from 'react';

/**
 * Calls handler when a click/touch occurs outside the given element.
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true
) {
  const savedHandler = useRef(handler);
  savedHandler.current = handler;

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      savedHandler.current(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, enabled]);
}

/**
 * Traps keyboard focus within the given element.
 * Pressing Escape releases the trap and calls onEscape.
 */
export function useFocusTrap(
  ref: React.RefObject<HTMLElement | null>,
  active: boolean,
  onEscape?: () => void
) {
  const prevFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || !ref.current) return;

    // Remember what was focused before opening
    prevFocusedRef.current = document.activeElement as HTMLElement;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    const getFocusable = (): HTMLElement[] =>
      Array.from(ref.current!.querySelectorAll<HTMLElement>(focusableSelectors));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape?.();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) { e.preventDefault(); return; }

      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    // Move focus into the trap
    const focusable = getFocusable();
    if (focusable.length > 0) focusable[0].focus();
    else (ref.current as HTMLElement).focus();

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus when closing
      prevFocusedRef.current?.focus();
    };
  }, [active, ref, onEscape]);
}

/**
 * Returns scroll lock (prevent body scroll) and restore functions.
 */
export function useScrollLock(lock: boolean) {
  const originalStyle = useRef<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    if (!lock) return;

    originalStyle.current = window.getComputedStyle(document.body);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow      = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow      = originalStyle.current?.overflow ?? '';
      document.body.style.paddingRight = originalStyle.current?.paddingRight ?? '';
    };
  }, [lock]);
}

/**
 * Returns a callback ref that merges multiple refs.
 */
export function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<T | null>).current = node;
    });
  };
}
