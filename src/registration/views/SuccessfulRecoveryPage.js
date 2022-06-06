import React from 'react'
import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from './components/PasswordRecoveryHeader';
import { Link } from 'react-router-dom';

export default function SuccessfulRecoveryPage() {
  return (
  <div className="container">
      <div className="content">
        <PasswordRecoveryHeader 
          image="../images/check-logo2.png" 
          title="Password reset" 
          message="Your password has been successfully reset. Click the continue button below to log in to your page"
        />
        { /* form section */ }
        <form action="" className="form">
            <Link to="/">
              <button className="reset-button">Continue</button>
            </Link>
            <Link className="back-link" href="#">Back to log in</Link>
        </form>
      </div>
    </div>
  )
}
