import React from 'react';
import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomeMain from './Components/Home/HomeMain';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeMain/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
