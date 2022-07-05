import React from 'react'
// import InputOption from "../components/InputOption"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

import "../css/Content.css"

export default function Post({name, description, message, photoUrl}) {
  return (
    <div className="post">
        <div className="post_header">
          <div className="post_image">
            <img src={photoUrl}/>
          </div>
          <div className="post_info">
            <h2 s
            gitclassName='name-post'> {name} </h2>
            <p className='description-post'> {description} </p>
            <p className='message-post'> {message} </p>
          </div>
          <div className="post_contact">
            <button> Send Message </button>
          </div>
        </div>
    </div>
  )
}
