import * as React from 'react';
import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material-pigment-css/Container';
import { Button, List, ListItem, ListItemButton } from '@mui/material';

export default function Home() {
  return (
    <List sx={{
      border: '1px solid'
    }}>
      <ListItem>
        <ListItemButton>the</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>correct</ListItemButton>
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
  );
}
