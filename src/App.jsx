import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SeasonIndicator } from './components/layout/SeasonIndicators.jsx'
import { LiturgicalProvider } from './contexts/LiturgicalContext.jsx'
import  Navbar  from './components/layout/Navbar.jsx'
import './App.css'
import './index.css'; // ou App.css selon ton organisation


function App() {
  const [count, setCount] = useState(0)

  return (
    <LiturgicalProvider>
     <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    <SeasonIndicator />
 </LiturgicalProvider> )
}

export default App
