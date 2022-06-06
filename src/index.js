import React from 'react';
import ReactDOM from 'react-dom/client';
// import RegisterationPage from './registration/views/RegisterationPage';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ForgotPasswordPage />
  </React.StrictMode>
);
