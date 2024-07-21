import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM from react-dom/client for createRoot usage
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';
const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root using createRoot

root.render(
    <AuthProvider> <BrowserRouter>
      
    <App />

</BrowserRouter>
</AuthProvider>
   
);

reportWebVitals();
