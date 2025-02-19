import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPatient from './components/Register_Patient';
import LoginAdmin from './components/Login_Admin';
import LoginPatient from './components/Login_Patient';
import RegisterAdmin from './components/Register_Admin';



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
