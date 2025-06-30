

import React from "react";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Brandpage from "./Components/Brandpage";
import MenuPage from "./Components/Pages/MenuPage"; // Create a new page
import LocationPage from "./Components/Pages/LocationPage";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import LoginPage from "./Components/Pages/LoginPage";
import CartPage from "./Components/Pages/CartPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Navbar";
import ProductDetail from "./Components/Pages/ProductDetail"



function App(){
  const [cart, setCart] = useState([]);

const addToCart = (product) => { //when userclick addtocar to ye call hoga or idhr product ka data aayega as props
  setCart((prevCart) => { //prevcart is current value of cart state bfore update
    const exists = prevCart.find((item) => item.id === product.id); //check if item already exist 
    return exists
      ? prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } : item
            // if yes toh increase quantity ,...item copies all key-value pairs from item object into a new object else keep it as
        )
      : [...prevCart, { ...product, quantity: 1 }];//if new item toh quantity 1
  });
};

// ❌ Remove from cart handler
  const removeFromCart = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 } //if item matches toh reduce quantity by 1
          : item //else item as it is
      )
      .filter((item) => item.quantity > 0);//keep item only if quantity>0 else filter/remove
    setCart(updatedCart);
  };
    return(
       
    <Router>
     <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Brandpage />}/>
          <Route path="/men" element={<MenuPage />} />
          <Route path="/women" element={<LocationPage />} />
          <Route path="/kid" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage cart={cart}  removeFromCart={removeFromCart}/>}/>
          <Route path="/login" element={<LoginPage/>}/>
           <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
        <Footer/>
      </Router>);
}
export default App;