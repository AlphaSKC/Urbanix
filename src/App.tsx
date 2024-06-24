import React from 'react';
import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomeMain from './Components/Home/HomeMain';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from './Components/Admin/Layout/Dashboard';

import HomeCategoria from './Components/Categorias/HomeCategoria';

function App() {
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
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
