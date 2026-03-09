import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx'; // Removed the .tsx extension (can also just be './App')
import './index.css';

// Removed the '!' after getElementById('root')
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);