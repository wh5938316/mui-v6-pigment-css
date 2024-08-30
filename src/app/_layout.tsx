import * as React from 'react';
import { Button, CssBaseline, List, ListItem, ListItemButton } from '@mui/material';
import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import Container from '@mui/material-pigment-css/Container';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultPropsProvider
      value={{
        MuiChip: {
          label: 'Available in v6',
        },
      }}
    >
      <CssBaseline />

      <main sx={{ minHeight: '100lvh', display: 'grid', placeItems: 'center' }}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <List sx={{
            border: '1px solid'
          }}>
            <ListItem>
              <ListItemButton>the</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>wrong</ListItemButton>
            </ListItem>
            <List
              component="div"
              sx={{
                padding: 4,
              }}>
              <ListItem>
                <ListItemButton>style</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>priority</ListItemButton>
              </ListItem>
            </List>
          </List>
          {children}
        </Container>
      </main>
    </DefaultPropsProvider>
  );
}
