import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={"/Trivia-1/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
