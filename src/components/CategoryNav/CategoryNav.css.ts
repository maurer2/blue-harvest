import { style, styleVariants } from '@vanilla-extract/css';

export const nav = style({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  width: '100%',
});

const navItemBase = style({
  textTransform: 'capitalize',
});

export const navItem = styleVariants({
  active: [
    navItemBase,
    {
      color: 'var(--blush)',
      textDecoration: 'underline',
    },
  ],
  inactive: [navItemBase, { color: 'var(--misty-rose)' }],
});
