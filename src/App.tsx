import React from 'react';
import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login"
            element={<Login />} />
          <Route path='/abouts' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
