import { style } from '@vanilla-extract/css';

export const searchBoxWrapper = style({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'flex-end',
  marginBottom: '2rem',
  padding: '0 1rem',

  // eslint-disable-next-line perfectionist/sort-objects
  '@media': {
    'screen and (min-width: 480px)': {
      padding: '0 2rem',
    },
  },
});

export const searchBox = style({
  padding: '0.5rem',
});
