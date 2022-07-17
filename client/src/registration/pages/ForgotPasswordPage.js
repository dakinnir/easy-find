import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from '../components/PasswordRecoveryHeader';
import Navbar from '../../homepage/components/Navbar';

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");

  const submitButtonHandler = () => {

  }

  const onChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="forgot-password_page">
      <Navbar />
      <div className="forgot-password_container">
        <form action="" className="fgp-form_container" onSubmit={submitButtonHandler}>
          <PasswordRecoveryHeader 
            image="../images/key-logo.png" 
            title="Forgot Password" 
            message="No worries, we'll send you an email to help with password recovery."
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            onChange={onChangeHandler}
            value={email}
            required
            className="form-control"
          />
          <button type="submit" className="form-control_btn">Reset Password</button>

          <p className="goto-login_link"> 
              Login?
              <span>
                <Link to="/login">Click here</Link>
              </span>
          </p>
        </form>
      </div>
    </div>
  )
}