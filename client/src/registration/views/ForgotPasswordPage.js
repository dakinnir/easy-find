import React from 'react'
import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from './components/PasswordRecoveryHeader';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  return (
    <div class="container">
      <div className="content">
        <PasswordRecoveryHeader 
          image="../images/key-logo.png" 
          title="Forgot Password" 
          message="No worries, we'll send you an email to help with password recovery."
        />
        { /* form section */ }
        <form action="" class="form">
            <span className="details">Email</span>
            <input type="email" class="input-box" placeholder="Enter your email" required/>
            <Link to="/email-check">
              <button className="reset-button">Reset Password </button>
            </Link>
        </form>
      </div>
    </div>
  )
}

