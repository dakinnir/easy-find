import React from 'react'
import '../css/ForgotPasswordPage.css'
import { Link } from 'react-router-dom'
import PasswordRecoveryHeader from './components/PasswordRecoveryHeader'

export default function CheckEmailPage() {
  return (
      <div className="container">
        <div className="content">
            <PasswordRecoveryHeader 
            image="../images/mail-logo.png" 
            title="Check your email" 
            message="We sent a password reset link to user@gmail.com."
            />
            { /* form section */ }
            <form action="" className="form">

                <p className='already-user'> 
                        Didn't receive this email?
                        <span><Link to="/email-check"> Click to resend </Link></span>
                  </p>

                <Link className="back-link" to="/login">Back to log in</Link>
            </form>
        </div>
    </div>
  )
}
