import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppRouter } from './routes/routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter>
        <App />
      </AppRouter>
  </React.StrictMode>,
)