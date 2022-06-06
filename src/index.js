import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import Signin from './Signin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateNewPasswordPage />
  </React.StrictMode>
);
