import React from 'react'; // React library
import ReactDOM from 'react-dom/client'; // Renderer
import App from './App'; // Root component
import './styles.css';

// Creates root and renders App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
