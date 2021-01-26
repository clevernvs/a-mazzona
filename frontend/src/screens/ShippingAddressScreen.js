import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen(props) {

  const userSignIn = useSelector(state => state.userSignIn);
  const { userInfo } = userSignIn;
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.Country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));
    props.history.push('/payment');
  };


  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <Typography variant='body-2'>Shipping Address</Typography>

      <form noValidate onSubmit={submitHandler}>
        <TextField
          id="fullName"
          label="Nome Completo"
          name="fullName"
          variant="outlined"
          margin="normal"
          fullWidth
          autoComplete="fullName"
          autoFocus
          required
          onChange={e => setFullName(e.target.value)}
        />
        <TextField
          id="address"
          label="Endereco"
          name="address"
          variant="outlined"
          margin="normal"
          fullWidth
          autoComplete="address"
          autoFocus
          required
          onChange={e => setAddress(e.target.value)}
        />
        <TextField
          id="city"
          name="city"
          label="City"
          variant="outlined"
          margin="normal"
          fullWidth
          autoComplete="city"
          required
          onChange={e => setCity(e.target.value)}
        />
        <TextField
          id="postalCode"
          name="postalCode"
          label="Código Postal"
          variant="outlined"
          margin="normal"
          fullWidth
          autoComplete="postalCode"
          required
          onChange={e => setPostalCode(e.target.value)}
        />
        <TextField
          id="country"
          name="country"
          label="País"
          variant="outlined"
          margin="normal"
          fullWidth
          autoComplete="country"
          required
          onChange={e => setCountry(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Continue
          </Button>

      </form>

    </div>
  )
}
