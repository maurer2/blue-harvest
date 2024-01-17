import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
});

export const gridTitle = style({
  gridColumn: '1 / -1',
  margin: 0,
});

export const gridBox = style({
  background: 'var(--murrey)',
  color: 'var(--misty-rose)',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'min-content 1fr',
  margin: 0,
  padding: '1rem',
});
