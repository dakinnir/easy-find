import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterationPage from './registration/views/RegisterationPage';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import Signin from './registration/views/LogInPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterationPage />
  </React.StrictMode>
);
