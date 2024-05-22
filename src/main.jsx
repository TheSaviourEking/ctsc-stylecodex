import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css';
import './bootstrap.min.css';
import './variables.css';
import './global.css';

import "@fontsource/inter"; // Defaults to weight 400

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)