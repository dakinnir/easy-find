import React from 'react'
import '../../css/ForgotPasswordPage.css'

export default function RegisterationHeader(props) {
  return (
    <div className='header'>
        <h2>{ props.title }</h2>
        <p className='message'>
            { props.message }
        </p>
    </div>
  )
}
