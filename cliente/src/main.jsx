import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppRouter } from './routes/routes.jsx';
import { AuthProvider } from './context/authProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <AppRouter>
        <App />
    </AppRouter>
  </AuthProvider>
)
