import { style, styleVariants } from '@vanilla-extract/css';

export const nav = style({
  background: 'var(--gunmetal)',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  padding: '0',

  // eslint-disable-next-line perfectionist/sort-objects
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
  textTransform: 'capitalize',

  // eslint-disable-next-line perfectionist/sort-objects
  ':last-child': {
    borderRight: '1px dotted var(--misty-rose)',
  },

  // eslint-disable-next-line perfectionist/sort-objects
  ':focus': { color: 'var(--misty-rose)' },
  ':link': { color: 'var(--misty-rose)' },
  // eslint-disable-next-line perfectionist/sort-objects
  ':hover': { color: 'var(--misty-rose)', background: 'var(--murrey)' },
  // eslint-disable-next-line perfectionist/sort-objects
  ':active': { color: 'var(--misty-rose)' },
});

export const navItem = styleVariants({
  active: [
    navItemBase,
    {
      background: 'var(--eerie-black)',
      textDecoration: 'underline',
    },
  ],
  inactive: [navItemBase, { textDecoration: 'none' }],
});
