/* eslint-disable perfectionist/sort-objects */
import { style } from '@vanilla-extract/css';

export const page = style({
  padding: '1rem',

  '@media': {
    'screen and (min-width: 480px)': {
      padding: '0 2rem',
    },
  },
});
