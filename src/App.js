import React from 'react';
import CreateNewPasswordPage from './registration/views/CreateNewPasswordPage';
import ForgotPasswordPage from './registration/views/ForgotPasswordPage';
import SuccessfulRecoveryPage from './registration/views/SuccessfulRecoveryPage';
import RegisterationPage from './registration/views/RegisterationPage';
import LogInPage from './registration/views/LogInPage'


export default function App(){
    return(
        <div>
            <RegisterationPage />
        </div>
    )
}