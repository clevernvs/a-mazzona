import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
// import Rating from '../../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct());
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty={qty}`);
  };

  return (
    <div>
      {
        loading ? (<LoadingBox></LoadingBox>)
          : error ? (<MessageBox>{error}</MessageBox>)
            : (
              <div>
                <Link to="/">Voltar</Link>

                <Container maxWidth="lg">
                  <Grid container spicing={3}>

                    {/* Product Image */}
                    <Grid item xs={12} md={4} lg={6}>
                      <img className="large" src={product.image} alt={product.name} />
                    </Grid>

                    {/* Product Info */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Typography variant="h6" gutterBottom>{product.name}</Typography>
                      <Typography variant="subtitle2" gutterBottom>Preço: R${product.price}</Typography>
                      <Typography variant="subtitle2" gutterBottom>Descrição</Typography>
                      <Typography variant="subtitle2" gutterBottom>{product.description}</Typography>
                    </Grid>

                    {/* Card Info */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="subtitle2">Preço</Typography>
                          <Typography variant="h6">R${product.price}</Typography>
                          <Typography variant="subtitle2">Status</Typography>
                          <div>
                            {product.countInStock > 0 ? (
                              <Typography variant="subtitle2" color="textPrimary">Em estoque</Typography>
                            ) : (
                                <Typography variant="subtitle2" color="textSecondary">Esgotado</Typography>
                              )}
                          </div>
                          <CardActions>
                            {product.countInStock > 0 && (
                              <>
                                <li>
                                  <Typography variant="subtitle2">Qty</Typography>
                                  <div>
                                    <select value={qty} onChage={e => setQty(e.target.value)}></select>
                                    {
                                      [...Array(product.countInStock)
                                        .keys()
                                        .map(x => (<option key={x + 1} value={x + 1}>{x + 1}</option>))
                                      ]
                                    }
                                  </div>
                                </li>

                                <Button
                                  variant="contained"
                                  color="primary"
                                  size="small"
                                  onClick={addToCartHandler}
                                  disableElevation>
                                  Adicionar ao carrinho
                                </Button>
                              </>
                            )}
                          </CardActions>
                        </CardContent>
                      </Card>
                    </Grid>

                  </Grid>
                </Container>
              </div>
            )
      }

    </div >
  );
}
