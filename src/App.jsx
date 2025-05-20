import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SeasonIndicator } from './components/layout/SeasonIndicators.jsx'
import { LiturgicalProvider } from './contexts/LiturgicalContext.jsx'
import './App.css'
import './index.css'; // ou App.css selon ton organisation


function App() {
  const [count, setCount] = useState(0)

  return (
    <LiturgicalProvider>
  
    <SeasonIndicator />
 </LiturgicalProvider> )
}

export default App
