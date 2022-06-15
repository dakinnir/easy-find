import React from 'react'
import '../css/ForgotPasswordPage.css'
import { Link } from 'react-router-dom'
import RegisterationHeader from './components/RegisterationHeader'

export default function LogInPage() {
  return (
    <div className='page'>
        <h4>EasyFind</h4>
        <div className='container'>
            <div className='content'>
                <form action="" className='form'>
                    <RegisterationHeader 
                    title="Sign In" 
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sapiente dignissimos atque, architecto neque perferendis illum 
                            modi cupiditate repudiandae."

                            />

                        {/* <label htmlFor="email">Email</label> */}
                    <span className="details">Email</span>
                    <input type="email" className="input-box" placeholder="Enter email..." required/>

                    {/* <label htmlFor="password">Password</label> */}
                    <span className="details">Password</span>
                    <input type="password" className="input-box" placeholder="Enter password..." required/>

                    <button className='reset-button'> Sign In</button>
                    <p className='already-user'> 
                        Don't have an account? 
                        <span><Link to="/"> Create One! </Link></span>
                    </p>
                    <p className='already-user'> 
                        Forgot Password? 
                        <span><Link to="/forgot-password"> Click here! </Link></span>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}
