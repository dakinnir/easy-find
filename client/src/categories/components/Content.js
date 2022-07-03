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
                <h2> {name} </h2>
                <p> {description} </p>
                <p> {message} </p>
            </div>
            {/* <div className="post_buttons">
                <button> Send Message </button>
            </div> */}
        </div>
    </div>
  )
}
