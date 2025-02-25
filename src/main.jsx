import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// // import ReactDOM from 'react-dom/client'
// import { Layout } from './components/layout'
// import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import { Nav } from './compponents/Nav/Nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
