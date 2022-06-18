import React from 'react'

export default function FormInput(props) {
    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        color: 'black',
        fontSize: '15px',
        opacity: 0.6
    }

    const inputStyle = {
        fontFamily:'inherit',
        fontSize: 'small',
        width: '100%',
        height: '30px',
        border: '1px solid #eee',
        paddingLeft: '5px',
        borderRadius: '5px',
        marginBottom: '20px'
    }

    return (
        <React.Fragment>
            <span 
                style={ labelStyle }> {props.labelText}
            </span>
            <input 
                type={props.type} style={ inputStyle } 
                placeholder={props.placeholder} required
            />
        </React.Fragment>
    )
}
