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
import AdminDashboard from './components/AdminDashboard';
import Footer from "./components/Footer";
import AdminUpdate from "./components/AdminUpdate";
import PatientUpdate from "./components/PatientUpdate";
import Upload from "./components/Upload";
import Profile from "./components/Profile";

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
        <Route path="/" element={<Landing />} />
        <Route path='/admin/register' element={<RegisterAdmin/>}/>
        <Route path='/admin/login' element={<LoginAdmin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/update' element={<AdminUpdate/>}/>
        <Route path='/patient/update' element={<PatientUpdate/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
