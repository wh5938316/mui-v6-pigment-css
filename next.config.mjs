import { withPigment } from '@pigment-css/nextjs-plugin';
import { createTheme } from '@mui/material';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, {
  theme: createTheme({
    cssVariables: true,
    components: {
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
    }
  }),
  transformLibraries: ['@mui/material'],
});
