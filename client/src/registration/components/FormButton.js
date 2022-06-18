import React from 'react'


export default function FormButton(props) {
    
    const buttonStyle = {
        appearance:'none',
        webkitAppearance:'none',
        backgroundColor: '#371B58',
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        border: 'none',
        marginTop: '20px',
        width: '100%',
        height: '35px',
        fontSize: 'small'
    } 
    
    return (
        <button 
            text={props.text} 
            type={props.type}
            style={buttonStyle}> { props.text }
        </button>
    )
}
