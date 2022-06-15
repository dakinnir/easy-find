import React from "react"
import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from "./components/PasswordRecoveryHeader"

export default function CreateNewPasswordPage() {
  return (
    <div class="container">
      <div className="content">
        <PasswordRecoveryHeader 
          image="../images/key-logo.png" 
          title="Set new password" 
          message="Your new password must be different to previously used passwords."
        />
        { /* form section */ }
        <form action="" class="form">
            <span className="details">Password</span>
            <input type="password" class="input-box" placeholder="Enter new password..." required/>

            <span className="details">Confirm Password</span>
            <input type="password" class="input-box" placeholder="Confirm new password..." required/>

            <button className="reset-button">Reset Password </button>
        </form>
      </div>
    </div>
  )
}
