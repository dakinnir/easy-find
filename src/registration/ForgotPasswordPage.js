import React from 'react'
import './styles/ForgotPasswordPage.css';
export default function ForgotPasswordPage() {
  return (
    <div class="container">
        <div className="header">
          <img className="header-key_image" src="../images/logo.png" alt="Logo"/>
          <h2 className="header-title">Forgot password?</h2>
          <p className="header-message">
              No worries, we'll send you an email to help with password recovery.
          </p>
        </div>
        <form action="" class="form">
            <span className="details">Email</span>
            <input type="email" class="input-box" placeholder="Enter your email" required/>
            <button className="reset-button">Reset Password </button>
        </form>
    </div>
  )
}
