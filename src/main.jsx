import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Components/Login.jsx'
import Success from './Components/Success.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Components/Success" element={<Success />} />

    </Routes>
    <App />
  </BrowserRouter>



)
