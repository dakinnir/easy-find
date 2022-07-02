import React from 'react'
import './css/SettingsPage.css'
import CountryDropdown from './components/CountryDropdown'
import Header from './components/Header'
import { Link } from 'react-router-dom';

export default function SettingsPage() {
  return (
    
    <React.Fragment>
        <div className="container">
            <div className="option-menu">
                <div className="options">
                    <button>User Settings</button>
                    <button>Work History</button>
                </div>
            </div>
            {/* <div className="midde">

            </div> */}
            <div className="body-container">
                <Header image="../images/test-image.png" name="Anita Cruz" profession="UX Designer"/>
                <form action="">
                    <div className="input-container">
                        <div className="input-field">
                            <label htmlFor="first-name">First name</label>
                            <input type="text" id="first-name" className="input-box" required value="Anita"/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="last-name">Last name</label>
                            <input type="text" id="last-name" className="input-box" required value="Cruz"/>
                        </div>

                        <div className="input-field">
                            <label h
                            tmlFor="email">Email</label>
                            <input type="email" id="email" className="input-box" required value="you@example.com"/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="profession">Profession</label>
                            <input type="text" id="profession" className="input-box" />
                        </div>

                        {/* <div className="input-field">
                            <label htmlFor="country">Country</label>
                            <CountryDropdown id="country" />
                        </div> */}

                        <div className="input-field">
                            <label htmlFor="bio">Bio</label>
                            <textarea name="" id="bio" cols="30" rows="10">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Voluptate, incidunt? Cupiditate expedita modi officiis ad 
                                quibusdam nostrum, hic possimus qui magni, dicta rem consequuntur? 
                                Exercitationem ipsa in nisi distinctio praesentium?
                            </textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}