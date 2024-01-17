import { style } from '@vanilla-extract/css';

export const grid = style({
  counterReset: 'box',
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
  counterIncrement: 'box',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'min-content 1fr',
  margin: 0,
  padding: '1rem',
  position: 'relative',

  // eslint-disable-next-line perfectionist/sort-objects
  '::before': {
    color: 'var(--eerie-black)',
    content: 'counter(box)',
    fontSize: '5rem',
    lineHeight: 0.75,
    opacity: 0.2,
    paddingRight: 'inherit',
    paddingTop: 'inherit',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
