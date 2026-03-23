/**
 * CSS Reset — Vanilla Extract globalStyle
 */

import { globalStyle, keyframes } from '@vanilla-extract/css';

// Define keyframes
const spin = keyframes({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } });
const fadeIn = keyframes({ from: { opacity: '0' }, to: { opacity: '1' } });
const slideInTop = keyframes({ from: { transform: 'translateY(-8px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } });
const slideInBottom = keyframes({ from: { transform: 'translateY(8px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } });
const scaleIn = keyframes({ from: { transform: 'scale(0.95)', opacity: '0' }, to: { transform: 'scale(1)', opacity: '1' } });
const pulse = keyframes({ '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } });
const slideInLeft = keyframes({ from: { transform: 'translateX(-100%)', opacity: '0' }, to: { transform: 'translateX(0)', opacity: '1' } });
const slideInRight = keyframes({ from: { transform: 'translateX(100%)', opacity: '0' }, to: { transform: 'translateX(0)', opacity: '1' } });

// Re-export for use in other files
export { spin, fadeIn, slideInTop, slideInBottom, scaleIn, pulse, slideInLeft, slideInRight };

// Prevent flash of unstyled content
globalStyle('html', {
  fontFamily: 'sans-serif',
  fontSize: '16px',
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: '0',
  padding: '0',
});

globalStyle('html, body, #root', {
  height: '100%',
  minHeight: '100vh',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('button', {
  cursor: 'pointer',
  background: 'none',
  border: 'none',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: '0',
});
