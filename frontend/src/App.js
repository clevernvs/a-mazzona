import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { signout } from './features/actions/userActions';
import AdminRoute from './components/AdminRoute';
import SearchBox from './components/SearchBox';
import PrivateRoute from './components/PrivateRoute';
import { listProductCategories } from './features/actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';

import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderPage from './pages/OrderPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import SignInPage from './pages/SignInPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import SellerRoute from './components/SellerRoute';
import SellerPage from './pages/SellerPage';
import SearchPage from './pages/SearchPage';
import MapPage from './pages/MapPage';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/cart/:id?" component={CartPage}></Route>
      <Route path="/product/:id" component={ProductPage}></Route>
      <Route path="/signin" component={SignInPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/shipping" component={ShippingAddressPage}></Route>
      <Route path="/" component={HomePage} exact></Route>

      <main>
        <Route path="/seller/:id" component={SellerPage}></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/product/:id" component={ProductPage} exact></Route>
        <Route path="/product/:id/edit" component={ProductEditPage} exact></Route>
        <Route path="/signin" component={SignInPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/shipping" component={ShippingAddressPage}></Route>
        <Route path="/payment" component={PaymentMethodPage}></Route>
        <Route path="/placeorder" component={PlaceOrderPage}></Route>
        <Route path="/order/:id" component={OrderPage}></Route>
        <Route path="/orderhistory" component={OrderHistoryPage}></Route>
        <Route path="/search/name/:name?" component={SearchPage} exact></Route>
        <Route path="/search/category/:category" component={SearchPage} exact></Route>
        <Route path="/search/category/:category/name/:name" component={SearchPage} exact></Route>
        <Route
          path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
          component={SearchPage}
          exact
        ></Route>
        <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
        <PrivateRoute path="/map" component={MapPage}></PrivateRoute>
        <AdminRoute path="/productlist" component={ProductListPage} exact></AdminRoute>
        <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListPage} exact></AdminRoute>
        <AdminRoute path="/orderlist" component={OrderListPage} exact></AdminRoute>
        <AdminRoute path="/userlist" component={UserListPage}></AdminRoute>
        <AdminRoute path="/user/:id/edit" component={UserEditPage}></AdminRoute>
        <SellerRoute path="/productlist/seller" component={ProductListPage}></SellerRoute>
        <SellerRoute path="/orderlist/seller" component={OrderListPage}></SellerRoute>

        <Route path="/" component={HomePage} exact></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </BrowserRouter >
  );
}
