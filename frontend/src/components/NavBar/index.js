import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Badge, Button, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default function NavBar() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to={'/'}>
            <Typography variant="h6">AMAZONA</Typography>
          </Link>
          <Link to={'/cart'}>
            {
              cartItems.length > 0 ? (
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              ) : (
                  <Badge badgeContent={0} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                )
            }
          </Link>
          <Link to={'/signin'}>
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div >
  )
}
