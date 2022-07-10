import React from 'react';
import '../styles/SignUp.css'
import FormInput from '../../components/FormInput';

function SignUp() {
  return (
    <div className="container">
        <div className="split left">
            <form action="" className="form">
                <div className="form-control">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="" id="fname" />
                </div>

                <div className="form-control">
                    <label htmlFor="fname">Last Name</label>
                    <input type="text" name="" id="fname" />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="" id="email" />
                </div>
                
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" />
                </div>
                
                <div className="form-control">
                    <label htmlFor="confpassword">Confirm Password</label>
                    <input type="password" name="" id="confpassword" />
                </div>
                
            </form>
        </div>
        <div className="split right">
            <img src="bg.jpg" alt="Background Image" />
        </div>
    </div>
  )
}

export default SignUp