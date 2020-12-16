import React from 'react';
import { Typography } from '@material-ui/core';

export default function CartScreen(props) {

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

  return (
    <div>
      <Typography variant="subtitle2">Cart Screen</Typography>
      <Typography variant="subtitle2">ADD TO CART: ProductID: {productId}, Qty: {qty}</Typography>
    </div>
  );
}
