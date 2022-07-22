import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Registeration.css'
import Navbar from '../../homepage/components/Navbar';
import axios from 'axios';

export default function RegisterationPage() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        accountType: ''
    })
    const onChangeHandler = ({currentTarget: input}) => {
        // Spread operator: Update every value in object then update the recently changed
        setData({...data, [input.name]: input.value});
    };


    const submitButtonHandler = async (event) => {
        event.preventDefault();
        try {
            const url = 'http://localhost:4000/api/register';
            const { data: res} = await axios.post(url, data);
            navigate("/");
            console.log(res.message)
        }
        catch (err) {
            console.log("Error Occurred")
        }
    }
    
    return (
        // The page
        <div className="register-page">
            <Navbar />
            <div className="register-container">
                <div className="register-form_container">
                    {/* The left side view: option for already members */}
                    <div className="form-container_left">
                        <h1>Welcome Back</h1>
                        {/* Link to go to login page */}
                        <Link to="/login">
                            <button type='button' className='white-btn'>Log in</button>
                        </Link>
                    </div>
                    {/* The right side view: form */}
                    <div className="form-container_right">
                        <form action="" className="form-container" onSubmit={submitButtonHandler}>
                            <h1>Create an Account</h1>
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName"
                                onChange={onChangeHandler}
                                value={data.firstNaeme}
                                required
                                className="form-control"
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName"
                                onChange={onChangeHandler}
                                value={data.lastName}
                                required
                                className="form-control"
                            />                    
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
                            <input 
                                type="password"
                                placeholder="Confirm Password" 
                                name="confirmPassword"
                                onChange={onChangeHandler}
                                value={data.confirmPassword}
                                required
                                className="form-control"
                            />
                            <div className="select-control">
                                <label htmlFor="account">Account Type: </label>
                                <select name="accountType" id="account">
                                    <option value={data.accountType}>Client</option>
                                    <option value={data.accountType}>Contractor</option>
                                </select>
                            </div>
                            <button type="submit" className="form-control_btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
