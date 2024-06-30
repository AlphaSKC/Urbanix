// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomeMain from './Components/Home/HomeMain';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import Dashboard from './Components/Admin/Layout/Dashboard';
import HomeCategoria from './Components/Categorias/HomeCategoria';
import { CartProvider } from './context/CartContext';
import { useCart } from './hooks/useCart';

function App() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/admin';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/categoria" element={<HomeCategoria />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;
