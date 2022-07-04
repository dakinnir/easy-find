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
            <img src={photoUrl}/>
            <div className="post_info">
                <h2 className='namee-post'> {name} </h2>
                <p className='description-post'> {description} </p>
                <p className='message-post'> {message} </p>
                <button> Send Message </button>
            </div>
        </div>
    </div>
  )
}