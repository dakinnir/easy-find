import { Select, MenuItem } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import "../css/CountryDropdown.css"


var countries = require("i18n-iso-countries");

// Support english language.
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// Returns an object not a list
const countryObj = countries.getNames('en', {select: "official"})

var countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
        label: value,
        value: key
    }
})

export default function CountryDropdown({id}) {

    const [selectedCountry, setSelectedCountry] = useState("");
    const selectCountryHandler = (value) => setSelectedCountry(value);

    return (
        <div className="dropdown">
            <Select className="dropdown-item" id={id}
                value={selectedCountry} 
                onChange={(e) => selectCountryHandler(e.target.value)} 
                style={{fontSize: "12px"}}
            >
                {!!countryArr?.length && countryArr.map(({label, value}) => (
                    <MenuItem key={value} value={value} style={ {fontSize: "12px"} }>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}
