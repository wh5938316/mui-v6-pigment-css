import { withPigment } from '@pigment-css/nextjs-plugin';
import { createTheme, svgIconClasses } from '@mui/material';
// import { getTheme } from '@repo/theme';
// import svgIconClasses from '@mui/material/SvgIcon/svgIconClasses';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/icons']
};
export default withPigment(nextConfig, {
  theme: createTheme({
    cssVariables: true,
    // ...getTheme('light'),
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
