import React from 'react'
import './PasswordRecoveryHeader.css'

export default function PasswordRecoveryHeader(props) {
  return (
    <div className="header">
          <img className="header-key_image" src={ props.image } alt="Logo"/>
          <h2 className="header-title"> { props.title } </h2>
          <p className="header-message">
              { props.message }
          </p>
        </div>
  )
}

// ../images/logo.png

// No worries, we'll send you an email to help with password recovery.
