
import { svgIconClasses } from '@mui/material';
import { Components, Theme } from '@mui/material/styles';

/* eslint-disable import/prefer-default-export */
export const dataDisplayCustomizations: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        [`& .${svgIconClasses.root}`]: {
          fontSize: '1rem',
        },
      }
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        fill: 'currentColor',
        color: 'inherit',
        variants: [
          {
            props: {
              fontSize: 'small',
            },
            style: {
              fontSize: '1rem',
            },
          },
        ],
      },
    },
  },
};
