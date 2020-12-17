import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid, Link,
  MenuItem,
  Paper,
  Select,
  Typography
} from '@material-ui/core';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };

  return (
    <div>

      <Typography variant="subtitle2">
        Shopping Cart
      </Typography>

      <Divider />

      {cartItems.length === 0
        ? (
          <MessageBox>
            O carrinho está vazio.
            <Link component={RouterLink} to={'/'}>Retornar as compras.</Link>
          </MessageBox>
        )
        : (
          <Grid container>
            <Grid item direction="column" spacing={2}>
              {cartItems.map((item) => (

                <Grid container direction="row" alignItems="center" spacing={3}>
                  <li key={item.product}>
                    <Paper variant="outlined">

                      <Grid item xs={3} md={3} lg={3}>
                        <img src={item.image} alt={item.name} />
                      </Grid>

                      <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="subtitle2" gutterBottom>
                          <Link component={RouterLink} to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Typography>
                      </Grid>

                      <Grid item xs={3} md={3} lg={3}>
                        <FormControl variant="outlined">
                          <Select
                            id="qty-product"
                            value={item.qty}
                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                            label="Quantidade">
                            {[...Array(item.countInStock).keys()]
                              .map((x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              ))
                            }
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="subtitle2" gutterBottom>
                          {item.price}
                        </Typography>
                      </Grid>

                      <Grid item xs={3} md={3} lg={3}>
                        <Button
                          variant="contained"
                          onClick={() => removeFromCartHandler(item.product)}
                          disableElevation>
                          Remover
                        </Button>
                      </Grid>
                    </Paper>

                  </li>
                </Grid>
              ))
              }

              < Grid item lg={4} >
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                      Subtotal: ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                      </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      R${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.lenght === 0}>
                      Checkout
                      </Button>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Grid>
        )
      }

    </div>

  )
}
