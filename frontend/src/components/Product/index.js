import React from 'react';
import Rating from '../Rating';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

export default function Product(props) {

  const { product } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia image={`product/${product._id}`} title={product.name} />
        <CardContent>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Typography variant="h5" gutterBottom>{product.name}</Typography>
          <Typography variant="body2" gutterBottom>{product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
