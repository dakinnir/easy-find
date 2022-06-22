import React from 'react'
import '../css/Signin.css'
import { Link } from 'react-router-dom'
import RegisterationHeader from '../components/RegisterationHeader'
import RegisterationContainer from '../components/RegisterationContainer'
import Form from '../components/Form'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import Navbar from "../components/Navbar"

export default function LogInPage() {

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log("Submitted button clicked!")
    }

    const passwordInputChanged = event => {
        event.preventDefault();
        console.log("Entry changed")
    }

    return (
        <div>
            <Navbar />
            <div className="split left-div">
                <RegisterationContainer>
                    <RegisterationHeader 
                        title="Sign In" 
                        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sapiente dignissimos atque, architecto neque perferendis illum 
                                modi cupiditate repudiandae."

                    />
                    <Form onSubmit={ formSubmitHandler }>
                        <FormInput 
                            type="email" labelText="Email" 
                            placeholder="Enter email" required 
                        />
                        <FormInput 
                            type="password" labelText="Password" onChange={ passwordInputChanged }
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
            <div className="split right-div">
                <img src="../images/bg-img.jpeg " alt="bg-img"/>
            </div>
        </div>
    )
}


