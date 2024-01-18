import { style } from '@vanilla-extract/css';

export const page = style({
  padding: '1rem',

  // eslint-disable-next-line perfectionist/sort-objects
  '@media': {
    'screen and (min-width: 480px)': {
      padding: '0 2rem',
    },
  },
});
