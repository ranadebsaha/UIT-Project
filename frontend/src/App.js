import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
