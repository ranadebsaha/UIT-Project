import React from "react";
import './App.css';
import LoginAdmin from './components/AdminLogin';
import RegisterAdmin from './components/AdminRegister';
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
      
      {children}
      {location.pathname === "/" && <Footer />}
    </>
  );
}

function App() {
  return (
    
    <BrowserRouter>
    <MyNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/admin/register' element={<RegisterAdmin/>}/>
        <Route path='/admin/login' element={<LoginAdmin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
