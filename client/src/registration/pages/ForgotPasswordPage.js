import React from 'react'
import '../css/ForgotPasswordPage.css'
import PasswordRecoveryHeader from '../components/PasswordRecoveryHeader';
import { Link } from 'react-router-dom';
import ForgotPasswordContainer from '../components/ForgotPasswordContainer';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function ForgotPasswordPage() {
  return (
    <ForgotPasswordContainer>
      <PasswordRecoveryHeader 
          image="../images/key-logo.png" 
          title="Forgot Password" 
          message="No worries, we'll send you an email to help with password recovery."
        />
        <Form>
            <FormInput 
                type="email" labelText="Email" 
                placeholder="Enter email" required 
            />

            <Link to="/email-check">
            <FormButton type="submit" text="Reset Password"/>

            </Link>
        </Form>
    </ForgotPasswordContainer>
  )
}