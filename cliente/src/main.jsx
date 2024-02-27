import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppRouter } from './routes/routes.jsx';
import { AuthProvider } from './context/authProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <AuthProvider>
    <AppRouter>
        <App />
    </AppRouter>
  </AuthProvider>
</React.StrictMode>,
)



// // app.jsx o index.jsx

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import { AuthProvider } from './context/authProvider.jsx';
// import { AppRouter } from './routes/routes.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <AppRouter>
//         <App />
//       </AppRouter>
//     </AuthProvider>
//   </React.StrictMode>
// );
