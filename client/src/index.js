import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WaitingListsContextProvider } from './context/waitingListsContext';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WaitingListsContextProvider>
        <App />
      </WaitingListsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


