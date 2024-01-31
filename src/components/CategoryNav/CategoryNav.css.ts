/* eslint-disable perfectionist/sort-objects */
import { style, styleVariants } from '@vanilla-extract/css';

export const nav = style({
  background: 'var(--gunmetal)',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  padding: '0',

  '@media': {
    'screen and (min-width: 480px)': {
      justifyContent: 'start',
      padding: '0 2rem',
    },
  },
});

const navItemBase = style({
  borderLeft: '1px dotted var(--misty-rose)',
  color: 'var(--misty-rose)',
  padding: '1rem',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'capitalize',

  ':last-child': {
    borderRight: '1px dotted var(--misty-rose)',
  },

  ':focus': { color: 'var(--misty-rose)' },
  ':link': { color: 'var(--misty-rose)' },
  ':hover': { color: 'var(--misty-rose)', background: 'var(--murrey)' },
  ':active': { color: 'var(--misty-rose)' },
});

export const navItem = styleVariants({
  active: [
    navItemBase,
    {
      background: 'var(--eerie-black)',
    },
  ],
  inactive: [navItemBase],
});
