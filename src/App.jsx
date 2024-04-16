import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <HeaderNav></HeaderNav>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
