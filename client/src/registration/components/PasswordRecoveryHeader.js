import React from 'react'
import '../css/PasswordRecoveryHeader.css'

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