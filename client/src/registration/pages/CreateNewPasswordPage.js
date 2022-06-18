import React from "react"
import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from '../components/PasswordRecoveryHeader'
import FormContainer from "../components/FormContainer"
import FormButton from "../components/FormButton"
import Form from '../components/Form.js'
import FormInput from "../components/FormInput"

export default function CreateNewPasswordPage() {
  return (
    <div class="container">
      <div className="content">
        <PasswordRecoveryHeader 
          image="../images/key-logo.png" 
          title="Set new password" 
          message="Your new password must be different to previously used passwords."
        />
        <FormContainer>
            <Form>
              <FormInput 
                type="password" labelText="Password" 
                placeholder="Enter new password..." required 
              />
              <FormInput 
                type="password" labelText="Confirm Password" 
                placeholder="Confirm new password..." required
              />
              <FormButton type="submit" text="Reset Password"/>
            </Form>
        </FormContainer>
      </div>
    </div>
  )
}
