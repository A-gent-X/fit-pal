import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthContextProvider } from './store/AuthContext.jsx'
import App from './App.jsx'
import Footer from './pages/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthContextProvider>
    <App />
   </AuthContextProvider>
  </React.StrictMode>,

)
