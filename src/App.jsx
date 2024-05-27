
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import CustomerSingUp from "./components/Auth/CustomerSingUp";
import FarmersSingUp from "./components/Auth/FarmersSingUp";
import LandingPage from "./components/LandingPage";

import Login from "./components/Auth/LogIn";

import { HomePage } from "./components/HomePage";
import SignUp from "./components/Auth/SignUp";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { CartProvider } from "react-use-cart";

import { SingleProduct } from "./components/SingleProduct";


import FarmerPage from "./components/Farmer/FarmerPage";
import Error from "./components/Error";

import FarmerIndexPage from "./components/Farmer/FarmerIndexPage";
import Orders from "./components/Farmer/Orders";
import NewProducts from "./components/Farmer/NewProducts";
import ProductForm from "./components/Farmer/ProductForm";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/customerSignUp" element={<CustomerSingUp />} />
          <Route path="/farmerSignUp" element={<FarmersSingUp />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path="/SingleProduct/:id" element={<SingleProduct />} />

          <Route path="/farmer" element={<FarmerPage />}>
            <Route index element={<FarmerIndexPage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<NewProducts />} />
            <Route path="createProduct" element={<ProductForm />} />
          </Route>
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
