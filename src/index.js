import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const RootApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));
root.render(<RootApp />);
