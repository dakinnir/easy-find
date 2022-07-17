import React from 'react';
import { Route, Routes } from "react-router-dom";
import RegisterationPage from './registration/pages/RegisterationPage';
import Homepage from './homepage/Homepage';
import LoginPage from './registration/pages/LoginPage'
import ForgotPasswordPage from './registration/pages/ForgotPasswordPage'

export default function App() {
    return(
        <div className='app-body'>
            <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/register" element={<RegisterationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Routes>
        </div>
    )
}