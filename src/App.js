import React from 'react'
import './css/Registration.css'

export default function App() {
  return (
    <div>
        <div className="form-section">
            <h4>EasyFind</h4>
            <div className="form">
                <h2>Sign Up</h2>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter name"/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password"/>

                    <label htmlFor="repassword">Confirm Password</label>
                    <input type="password" name="repassword" id="repassword" placeholder="Re-enter password"/>

                    <label htmlFor="account">Choose Account Type: </label>
                    <select name="account" id="account">
                        <option value="client">Client</option>
                        <option value="contractor">Contractor</option>

                    </select>
                    <button>Sign Up</button>
                    <p>
                        Already have an account? 
                        <span><a href="#">Log in</a></span>
                    </p>
                </form>
            </div>
        </div>
        <div className="image-section">
            <img src="../images/background.png" alt="Logo"/>
        </div>
    </div>
  )
}
