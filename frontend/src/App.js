import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import RegisterPatient from './components/Register';
import LoginAdmin from './components/AdminLogin';
import LoginPatient from './components/Login';
import RegisterAdmin from './components/AdminRegister';

=======
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
>>>>>>> 882206ba8553ee44359f9b8a415f07e763d5b380


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
