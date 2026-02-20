import React from "react";
import { Routes, Route } from "react-router-dom";












import Home from "../Home";
import Order from "../OrderSummary";
import HomeLogin from "../Login";
import Products from "../AllProducts";
import ProductDetail from "../../components/AllProductsPage/ProductDetail";
import About from "../About";
import Contact from "../Contact";
import PrivacyPolicyPage from "../PrivacyPolicy";
import Checkout from "../Checkout";



function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
<Route path="/checkout" element={<Checkout />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Order" element={<Order/>} />
      <Route path="/About" element={<About />} />
      <Route path="/loginP" element={<HomeLogin/>} />
            <Route path="/PrivacyPolicyPage" element={<PrivacyPolicyPage/>} />
    </Routes>
  );
}

export default AppRouter;
