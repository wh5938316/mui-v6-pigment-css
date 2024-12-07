import * as React from 'react';
import { HomeIcon } from '@repo/icons';
import SvgIcon from '@mui/material/SvgIcon';

export default function Home() {
  return (
    <div>
      {/* <HomeIcon fontSize="small" /> */}
      <SvgIcon fontSize='small'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </SvgIcon>
    </div>
  );
}
