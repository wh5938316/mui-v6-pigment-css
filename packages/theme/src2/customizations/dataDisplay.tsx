
import { Components, Theme } from '@mui/material/styles';
import { svgIconClasses } from '@mui/material/SvgIcon';

/* eslint-disable import/prefer-default-export */
export const dataDisplayCustomizations: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        [`& .${svgIconClasses.root}`]: {
          fill: 'currentColor',
        },
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              height: '2rem',
              padding: '8px 12px',
              fontWeight: 600,
              [`& .${svgIconClasses.root}`]: {
                fontSize: '1rem',
              },
            },
          },
        ],
      }),
    },
  },
  MuiSvgIcon: {
    defaultProps: {
      fontSize: 'small',
    },
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
