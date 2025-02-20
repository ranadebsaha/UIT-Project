import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPatient from './components/Register';
import LoginAdmin from './components/AdminLogin';
import LoginPatient from './components/Login';
import RegisterAdmin from './components/AdminRegister';



function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPatient/>}/>
        <Route path='/login' element={<LoginPatient/>}/>
        <Route path='/admin/register' element={<RegisterAdmin/>}/>
        <Route path='/admin/login' element={<LoginAdmin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
