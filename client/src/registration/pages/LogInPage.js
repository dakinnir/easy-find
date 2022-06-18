import React from 'react'
import '../css/ForgotPasswordPage.css'
import { Link } from 'react-router-dom'
import RegisterationHeader from '../components/RegisterationHeader'
import RegisterationContainer from '../components/RegisterationContainer'
import Form from '../components/Form'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

export default function LogInPage() {
  return (
    <div className='page'>
        <h4>EasyFind</h4>
        <RegisterationContainer>
            <RegisterationHeader 
                title="Sign In" 
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sapiente dignissimos atque, architecto neque perferendis illum 
                        modi cupiditate repudiandae."

            />
            <Form>
                <FormInput 
                    type="email" labelText="Email" 
                    placeholder="Enter email" required 
                />
                <FormInput 
                    type="password" labelText="Password" 
                    placeholder="Enter password" required 
                />

                <FormButton type="submit" text="Sign Up"/>
                <p className='already-user'> 
                    Don't have an account? 
                    <span><Link to="/"> Create One! </Link></span>
                </p>
                <p className='already-user'> 
                    Forgot Password? 
                    <span><Link to="/forgot-password"> Click here! </Link></span>
                </p>
            </Form>
        </RegisterationContainer>
    </div>
  )
}
