import React from 'react';
// import Rating from '../Rating';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Product(props) {

  const { product } = props;

  return (
    <Card key={product._id}>
      <CardActionArea>
        <Link to={`product/${product._id}`}>
          <CardMedia image={`product/${product._id}`} title={product.name} />
        </Link>
        <CardContent>
          {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
          <Link to={`product/${product._id}`}>
            <Typography variant="h5" gutterBottom>{product.name}</Typography>
          </Link>
          <Typography variant="body2" gutterBottom>{product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
