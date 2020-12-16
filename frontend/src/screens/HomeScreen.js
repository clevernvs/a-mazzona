import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Grid } from '@material-ui/core';

export default function HomeScreen() {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      { loading ? (<LoadingBox></LoadingBox>)
        : error ? (<MessageBox>{error}</MessageBox>)
          : (
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Product product={product} ></Product>
                </Grid>
              ))}
            </Grid>
          )}
    </div>
  );
}
