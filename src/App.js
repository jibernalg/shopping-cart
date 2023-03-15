import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Iphone from "./components/Iphone";
import MacBook from "./components/MacBook";
import IphoneSE from "./components/IphoneSE";
import Iphone12 from "./components/Iphone12";
import Iphone13 from "./components/Iphone13";
import Iphone14 from "./components/Iphone14";
import Iphone14pro from "./components/Iphone14pro";
import AirM1 from "./components/AirM1";
import AirM2 from "./components/AirM2";
import Pro13 from "./components/Pro13";
import Pro14 from "./components/Pro14";
import Pro16 from "./components/Pro16";
import Imac from "./components/IMac";

function App() {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product,quantity) => {
    const itemExists = cartItems.find((item) => item.product.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: parseInt(item.quantity) + parseInt(quantity) }
            : item
        )
      );
    }else{
      setCartItems([...cartItems,{product,quantity}]);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphoneSE" element={<IphoneSE addToCart={addToCart} />} />
        <Route path="/iphone12" element={<Iphone12 addToCart={addToCart} />} />
        <Route path="/iphone13" element={<Iphone13 addToCart={addToCart} />} />
        <Route path="/iphone14" element={<Iphone14 addToCart={addToCart} />} />
        <Route
          path="/iphone14pro"
          element={<Iphone14pro addToCart={addToCart} />}
        />
        <Route path="/macbook" element={<MacBook />} />
        <Route path="/airM1" element={<AirM1 addToCart={addToCart} />} />
        <Route path="/airM2" element={<AirM2 addToCart={addToCart} />} />
        <Route path="/pro13" element={<Pro13 addToCart={addToCart} />} />
        <Route path="/pro14" element={<Pro14 addToCart={addToCart} />} />
        <Route path="/pro16" element={<Pro16 addToCart={addToCart} />} />
        <Route path="/imac" element={<Imac addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
