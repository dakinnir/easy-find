import React, { useState } from 'react'
import '../css/SettingsForm.css'
import InputField from './InputField';
import '../css/InputField.css'

export default function WorkHistorySettings() {
    const [inputValue, setInputValue] = useState({ profession: "", bio: ""});
    const { profession, bio } = inputValue;
  
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
                <InputField
                    type="text"
                    value={profession}
                    placeholder=""
                    label="Profession"
                    name="profession"
                    onChange={handleChange}
                />
                <div className="form-group">
                    <label htmlFor="input-field">Bio</label>
                    <textarea name="bio" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </form>
    )
}
