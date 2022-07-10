import React from 'react'
import "../css/Content.css"

export default function Content({name, description, message, photoUrl}) {
  return (
    <div className="content">
        <div className="content_header">
          <div className="content_image">
            <img src={photoUrl}/>
          </div>
          <div className="content_info"> 
            <h2 className='name-content'> {name} </h2>
            <p className='description-content'> {description} </p>
            <p className='message-content'> {message} </p>
          </div>
          <div className="content_contact">
            <button> Send Message </button>
          </div>
        </div>
    </div>
  )
}
