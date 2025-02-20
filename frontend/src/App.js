import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import Footer from "./components/Footer";

function Layout({ children }) {
  const location = useLocation();


  return (
    <>
      <MyNavbar />
      {children}
      {location.pathname === "/" && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout><Landing /></Layout>} />
      
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
