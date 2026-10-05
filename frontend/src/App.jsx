import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Analyze from './pages/Analyze'
import Dashboard from './pages/Dashboard'
import RegionalAnalysis from './pages/RegionalAnalysis'
import Trends from './pages/Trends'
import Comparison from './pages/Comparison'
import About from './pages/About'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/regional" element={<RegionalAnalysis />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App