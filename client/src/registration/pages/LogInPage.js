import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../css/Login.css'
import Navbar from '../../homepage/components/Navbar'

export default function LoginPage() {

    // Used for navigation
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = ({currentInput: input}) => {
        setData({...data, [input.name]: input.value});
    }

    const submitButtonHandler = async (event) => {
        event.preventDefault();
        try {
            const url = 'http://localhost:4000/api/login';
            const { data: res} = await axios.post(url, data);
            navigate("/");
            console.log(res.message)
        }
        catch (err) {
            console.log("Error Occurred")
        }
    }

    const passwordInputChanged = event => {
        event.preventDefault();
        console.log("Entry changed")
    }

    return (
        <div className="login-page">
            <Navbar />
            <div className="login-container">
                <div className="login-form_container">
                    {/* The left side view: form */}
                    <div className="login-form_container_left">
                        <form action="" className="form-container" onSubmit={submitButtonHandler}>
                            <h1>Login to your Account</h1>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                name="email"
                                onChange={onChangeHandler}
                                value={data.email}
                                required
                                className="form-control"
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                onChange={onChangeHandler}
                                value={data.password}
                                required
                                className="form-control"
                            />
                            <button type="submit" className="form-control_btn">Login</button>
                            <p className='forgot-password_option'> 
                                Forgot Password? 
                                <span><Link to="/forgot-password">Click here!</Link></span>
                            </p>
                        </form>
                    </div>
                    
                    {/* The right side view: option for new members */}
                    <div className="login-form_container_right">
                        <h1>New Member?</h1>
                        {/* Link to go to register page */}
                        <Link to="/register">
                            <button type='button' className='white-btn'>Create Account</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}