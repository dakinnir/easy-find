import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage';
import SuccessfulRecoveryPage from './registration/views/SuccessfulRecoveryPage';
// import ForgotPasswordPage from './registration/views/ForgotPasswordPage';

// import RegisterationPage from './registration/views/RegisterationPage';
// import ForgotPasswordPage from './registration/views/ForgotPasswordPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SuccessfulRecoveryPage />
  </React.StrictMode>
);
