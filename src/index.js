import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import ForgotPasswordPage from './registration/views/ForgotPasswordPage';
// import Signin from './registration/views/Signin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ForgotPasswordPage />
  </React.StrictMode>
);
