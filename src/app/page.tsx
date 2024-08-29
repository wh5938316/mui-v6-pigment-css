import * as React from 'react';
import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material-pigment-css/Container';
import Grid from '@mui/material-pigment-css/Grid';
import Stack from '@mui/material-pigment-css/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material-pigment-css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <main sx={{ minHeight: '100lvh', display: 'grid', placeItems: 'center' }}>
      <DefaultPropsProvider
        value={{
          MuiChip: {
            label: 'Available in v6',
          },
        }}
      >
        <CssBaseline />
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography gutterBottom>The button below is expected to be `black`.</Typography>
          <Button
            variant='contained'
          >
            Test
          </Button>
        </Container>
      </DefaultPropsProvider>
    </main>
  );
}
