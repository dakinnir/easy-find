import React from 'react'
import '../css/ForgotPasswordPage.css'

export default function LogInPage() {
  return (
    <div className='page'>
        <h4>EasyFind</h4>
        <div className='container'>
            <div className='content'>
                <form action="" className='form'>
                    <div className='header'>
                        <h2>Sign In</h2>
                        <p className='message'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sapiente dignissimos atque, architecto neque perferendis illum 
                            modi cupiditate repudiandae.
                        </p>
                    </div>
                        {/* <label htmlFor="email">Email</label> */}
                    <span className="details">Email</span>
                    <input type="email" className="input-box" placeholder="Enter email..." required/>

                    {/* <label htmlFor="password">Password</label> */}
                    <span className="details">Password</span>
                    <input type="password" className="input-box" placeholder="Enter password..." required/>

                    <button className='reset-button'> Sign In</button>
                    <p className='already-user'> 
                        Don't have an account? 
                        <span><a href="#"> Create One! </a></span>
                    </p>
                    <p className='already-user'> 
                        Forgot Password? 
                        <span><a href="#"> Click here! </a></span>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}
