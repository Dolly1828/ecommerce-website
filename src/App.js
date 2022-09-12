// import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React, { useState, useEffect } from "react";

import Buynow from "./components/Buynow";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    uniShop();
  }, []);

  const uniShop = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response)
    const jsonData = await response.json();
    // console.log(jsonData)
    setProducts(jsonData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home products={products} />}></Route>
          <Route exact path={`/buy/:id`} element={<Buynow />}></Route>
          <Route exact path="/men" element={<Products category="men's clothing" />}></Route>
          <Route exact path="/women" element={<Products category="women's clothing" />}></Route>
          <Route exact path="/jewelery" element={<Products category="jewelery" />}></Route>
          <Route exact path="/electronic" element={<Products category="electronics" />}></Route>
          <Route exact path="/cart/:id" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
