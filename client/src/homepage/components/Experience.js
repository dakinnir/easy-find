import React from 'react'

import "../css/Experience.css"

export default function Experience ({title, company, message}) {
  return (
    <div className="experience">
        <div className="experience-body">
            <h4> {title} </h4>
            <h5>{company}</h5>
            <p className='experience-message'> {message} </p>
        </div>
    </div>
  )
}
