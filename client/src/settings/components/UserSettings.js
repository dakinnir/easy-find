import React, { useState } from 'react'
import '../css/SettingsForm.css'
import '../css/SettingsPage.css'
import CountryDropdown from './CountryDropdown';
import InputField from './InputField';

export default function UserSettings() {

    const [inputValue, setInputValue] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const { firstName, lastName, email, password } = inputValue;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(inputValue);
    };
    
    return (
        <form action="">
            <div className="input-container">
                <div className="inline-inputs">
                    <InputField
                        type="text"
                        value={firstName}
                        placeholder=""
                        label="First name"
                        name="firstName"
                        onChange={handleChange}
                    />

                    <InputField
                        type="text"
                        value={lastName}
                        placeholder=""
                        label="Last name"
                        name="lastName"
                        onChange={handleChange}
                    />
                </div>

                <InputField
                    type="email"
                    value={email}
                    placeholder=""
                    label="Email"
                    name="email"
                    onChange={handleChange}
                />

                <InputField
                    type="password"
                    value={password}
                    placeholder=""
                    label="Password"
                    name="password"
                    onChange={handleChange}
                />

                <InputField
                    type="password"
                    value={password}
                    placeholder=""
                    label="Address"
                    name="address"
                    onChange={handleChange}
                />

                {/********* City & State Input ******* */}
                <div className="inline-inputs">
                    <InputField
                        type="text"
                        placeholder=""
                        label="City"
                        name="city"
                        onChange={handleChange}
                    />
                    <InputField
                        type="text"
                        placeholder=""
                        label="State"
                        name="state"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="country">Country</label>
                    <CountryDropdown id="country" />
                </div>
            </div>
        </form>
    )
}
