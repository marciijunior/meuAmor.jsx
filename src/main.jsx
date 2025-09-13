import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

// CORREÇÃO: Importa o style.css, que é o seu ficheiro principal de estilos
import './styles/style.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);