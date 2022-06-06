import React from 'react'
import '../css/style.css'

export default function LogInPage() {
  return (
    <div>
        <div className="form-section">
            <h4>EasyFind</h4>
            <div className="form">
                <h2>Sign In</h2>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password"/>

                    <button>Sign In</button>
                    <p>
                        Don't have an account? 
                        // eslint-disable-next-line
                        <span><a href="#"> Create One! </a></span>
                    </p>
                </form>
            </div>
        </div>
        <div className="image-section">
            {/* <h3 className="img-heading"> Sign In to join our network of professionals and create new opportunities! </h3> */}
            <img src="../images/background.png" alt="Logo"/>
        </div>
    </div>
  )
}
