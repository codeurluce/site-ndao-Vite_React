import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SeasonIndicator } from './components/layout/SeasonIndicators.jsx'
import { LiturgicalProvider } from './contexts/LiturgicalContext.jsx'
import  Navbar  from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import './App.css'
import './index.css'; // ou App.css selon ton organisation


function App() {
  return (
    <LiturgicalProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <SeasonIndicator />
          </div>
          <Footer />
        </div>
      </Router>
    </LiturgicalProvider>)
}

export default App
