import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Badge, Link, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default function NavBar() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h5">
            <Link component={RouterLink} to={'/'} color="inherit">
              AMAZONA
            </Link>
          </Typography>

          <Link component={RouterLink} to={'/cart'} color="inherit">
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

          <Typography variant="h6">
            <Link component={RouterLink} to={'/signin'} color="inherit">
              Sign In
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div >
  )
}
