// src/App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useCart } from './hooks/useCart';
import { CartProvider } from './context/CartContext';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomeMain from './Components/Home/HomeMain';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import Dashboard from './Components/Admin/Layout/Dashboard';
import HomeCategoria from './Components/Sneaker_Categoria/HomeCategoria';
import DetalleSneaker from './Components/Sneaker_Detalle/DetalleSneaker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

function App() {
  const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart();
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/admin';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomeMain />} />

        {/* --- Login --- */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* --- List --- */}
        <Route path="/categoria" element={<HomeCategoria />} />
        <Route path="/detalle" element={<DetalleSneaker />} />

        {/* --- Admin --- */}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;
