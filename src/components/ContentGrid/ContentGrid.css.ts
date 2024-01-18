import { style } from '@vanilla-extract/css';

export const grid = style({
  counterReset: 'box',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
});

export const gridHeader = style({
  alignItems: 'center',
  display: 'flex',
  gridColumn: '1 / -1',
});

export const gridTitle = style({
  marginBottom: 0,
  marginRight: 'auto',
  marginTop: 0,
});

export const gridOrderToggle = style({
  border: 'none',
  margin: 0,
  padding: '0.5rem',
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
