import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
