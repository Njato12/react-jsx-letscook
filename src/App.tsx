import React, { useState, useEffect } from 'react';
import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SingUp from './pages/singUp/SingUp';
function App() {
  const [del, setDel] = useState<boolean>(true)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home del={del} setDel={setDel} />} />
          <Route path="/login"
            element={<Login del={del} setDel={setDel} />} />
          <Route path='/singUp' element={<SingUp del={del} setDel={setDel}/>}/>
          <Route path='/abouts' element={<About />} />
        </Routes>
        {del && <Footer />}
      </BrowserRouter>
    </div >
  );
}

export default App;
