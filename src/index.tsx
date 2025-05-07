import React from 'react';
import ReactDOM from 'react-dom/client';
import Nameset from './pages/Nameset';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nameset />
  </React.StrictMode>
);
