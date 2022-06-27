import React from 'react'
import './css/ProfileSetupPage.css'
import CountryDropdown from './components/CountryDropdown'

export default function ProfileSetupPage() {
  return (
    <div className="container">
        <div className="form">
            <h1>Tell us more about yourself.</h1>

            <form action="">
                <div className="side-by-side">
                    <div className="input-box">
                        <label> First Name: <input className="input-text" type="text" value="Daniel"/></label>
                    </div>
                    <div className="input-box">
                        <label> Last Name: <input className="input-text" type="text" value="Akinniranye"/></label>
                    </div>
                </div>

                <div className="full">
                    <div className="input-box">
                        <label> Email: <input className="input-text" type="text" value="dakinnir@gmail.com"/></label>
                    </div>
                </div>

                <div className="full">
                    <div className="input-box">
                        <label> Address: <input className="input-text" type="text"/></label>
                    </div>
                </div>

                <div className="side-by-side"> 
                    <div className="input-box">
                        <label> City: <input className="input-text" type="text"/></label>
                    </div>
                    <div className="input-box">
                        <label> State: <input className="input-text" type="text"/></label>
                    </div>
                </div>

                <div className="side-by-side"> 
                    <div className="input-box">
                        <label> Zip Code: <input className="input-text" type="text"/></label>
                    </div>
                    <div className="input-box">
                        <label> Country: <CountryDropdown /> </label>
                    </div>
                </div>
                <input className="submit-input" type="submit" value="Save and Continue"/>
            </form>
        </div>
    </div>
  )
}
