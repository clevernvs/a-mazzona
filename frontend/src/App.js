import React from 'react';
// import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  // const cart = useSelector(state => state.cart);
  // const { cartItems } = cart;

  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </BrowserRouter >
  );
}

export default App;
