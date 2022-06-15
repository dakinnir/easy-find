import React from 'react'
import '../css/ForgotPasswordPage.css'
import { Link } from 'react-router-dom'
import RegisterationHeader from './components/RegisterationHeader'

export default function RegisterationPage() {

    const signUpButtonHandler = () => {
        console.log("Sign up button clicked");
    }
    return (
        <div className="page">
            <h4>EasyFind</h4>
                <div className="container">
                    <div className="content">
                        <form action="" className="form">
                            <RegisterationHeader 
                                title="Let's Get Started!" 
                                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Sapiente dignissimos atque, architecto neque perferendis illum 
                                        modi cupiditate repudiandae."
                                />

                            <span className="details">Name</span>
                            <input type="name" className="input-box" placeholder="Enter your full name..." required/>

                            <span className="details">Email</span>
                            <input type="email" className="input-box" placeholder="Enter email..." required/>

                            <span className="details">Password</span>
                            <input type="password" className="input-box" placeholder="Enter password..." required/>

                            <span className="details">Confirm Password</span>
                            <input type="password" className="input-box" placeholder="Confirm password..." required/>

                            <label htmlFor="account">Choose Account Type: </label>
                            <select name="account" id="account">
                                <option value="client">Client</option>
                                <option value="contractor">Contractor</option>

                            </select>
                            <button onClick= { signUpButtonHandler } className="reset-button"> Sign Up</button>
                            <p className="already-user">
                                Already have an account? 
                                <span>
                                    <Link to="/login"> Log in</Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
        </div>
    )
}
