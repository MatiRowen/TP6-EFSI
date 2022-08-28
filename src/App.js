import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Detalle from './pages/detalle';


function App() {
  return (
    <BrowserRouter>
      <Routes>                  
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
