import React from 'react';
import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomeMain from './Components/Home/HomeMain';

function App() {
  return (
    <>
      <Header/>
      <HomeMain></HomeMain>
      <Footer/>
    </>
  );
}

export default App;
