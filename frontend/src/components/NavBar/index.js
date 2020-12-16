import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export default function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">AMAZONA</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div >
  )
}
