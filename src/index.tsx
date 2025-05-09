import React from 'react';
import ReactDOM from 'react-dom/client';
import Nameset from './pages/Nameset';
import Ranking from './pages/Ranking';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Ranking />
  </React.StrictMode>
);
