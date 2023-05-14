import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Private,
  Product,
  Products,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />

        <Route
          path="checkout"
          element={
            <Private>
              <Checkout />
            </Private>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
