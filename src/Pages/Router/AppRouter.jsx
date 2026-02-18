import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";

import CheckoutPage from "../components/Checkout/Checkout";

import Order from "../components/OrderSummary/OrderSummary";

import Login from "../Pages/Login";
import Products from "../Pages/AllProducts";
import ProductDetail from "../components/AllProductsPage/ProductDetail";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivacyPolicyPage from "../Pages/PrivacyPolicy";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/checkoutpage" element={<CheckoutPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<Login />} />
            <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage/>} />
    </Routes>
  );
}

export default AppRouter;
