import React from 'react'
import '../css/Signup.css'
import { Link } from 'react-router-dom'
import RegisterationHeader from '../components/RegisterationHeader'
import RegisterationContainer from '../components/RegisterationContainer'
import Form from '../components/Form'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import Navbar from "../components/Navbar"

export default function RegisterationPage() {

    const signUpButtonHandler = () => {
        console.log("Sign up button clicked");
    }
    
    return (
        <div>
            < Navbar/>
            <div className="split left-div">
                <RegisterationContainer>
                    <RegisterationHeader 
                        title="Let's Get Started!" 
                        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sapiente dignissimos atque, architecto neque perferendis illum 
                                modi cupiditate repudiandae."
                        />
                    <Form>
                        <FormInput 
                            type="name" labelText="Name" 
                            placeholder="Enter your full name" required 
                        />
                        <FormInput 
                            type="email" labelText="Email" 
                            placeholder="Enter email" required 
                        />
                        <FormInput 
                            type="password" labelText="Password" 
                            placeholder="Enter password" required 
                        />
                        <FormInput 
                            type="password" labelText="Confirm Password" 
                            placeholder="Confirm password" required 
                        />
                        
                        <label htmlFor="account">Choose Account Type: </label>
                        <select name="account" id="account">
                            <option value="client">Client</option>
                            <option value="contractor">Contractor</option>

                        </select>
                        <FormButton type="submit" text="Sign Up"
                            onClick= { signUpButtonHandler }
                        />
                        <p className="already-user">
                            Already have an account? 
                            <span>
                                <Link to="/login"> Log in</Link>
                            </span>
                        </p>
                    </Form>
                </RegisterationContainer>
            </div>
            <div className="split right-div">
                <img src="../images/bg-img-signup.jpeg" alt="bg-img"/>

            </div>
            
        </div>
    )
}
