import React from 'react'
import '../css/Registeration.css'

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

