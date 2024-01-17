import { style } from '@vanilla-extract/css';

export const nav = style({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  width: '100%',
});

export const navItem = style({
  color: 'var(--misty-rose)',
  textTransform: 'capitalize',
});
