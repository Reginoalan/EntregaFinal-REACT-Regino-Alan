// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import Catalogo from './components/Catalogo';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <CartWidget />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/set/:name" element={<Catalogo />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;







