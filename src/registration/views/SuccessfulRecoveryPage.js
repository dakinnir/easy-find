import React from 'react'
import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from './components/PasswordRecoveryHeader';

export default function SuccessfulRecoveryPage() {
  return (
  <div class="container">
      <div className="content">
        <PasswordRecoveryHeader 
          image="../images/check-logo2.png" 
          title="Password reset" 
          message="Your password has been successfully reset. Click the continue button below to log in to your page"
        />
        { /* form section */ }
        <form action="" class="form">
            <button className="reset-button">Continue</button>
            <a className="back-link" href="#">Back to log in</a>
        </form>
      </div>
    </div>
  )
}
