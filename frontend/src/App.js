import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
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
        <Route path="/signup" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
