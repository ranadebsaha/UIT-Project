import React from "react";
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import RegisterPatient from './components/Register';
import LoginAdmin from './components/AdminLogin';
import LoginPatient from './components/Login';
import RegisterAdmin from './components/AdminRegister';

=======
=======
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Landing from './components/Landing';
>>>>>>> d6695555e78c9edf48fd9bb2b9db7e39b63be512
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
>>>>>>> 882206ba8553ee44359f9b8a415f07e763d5b380

import Footer from "./components/Footer";

function Layout({ children }) {
  const location = useLocation();


  return (
    <>
<<<<<<< HEAD
    <div>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/register' element={<RegisterPatient/>}/>
        <Route path='/login' element={<LoginPatient/>}/>
        <Route path='/admin/register' element={<RegisterAdmin/>}/>
        <Route path='/admin/login' element={<LoginAdmin/>}/>
=======
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
>>>>>>> 882206ba8553ee44359f9b8a415f07e763d5b380
      </Routes>
      </BrowserRouter>
    </div>
=======
      <MyNavbar />
      {children}
      {location.pathname === "/" && <Footer />}
>>>>>>> d6695555e78c9edf48fd9bb2b9db7e39b63be512
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
