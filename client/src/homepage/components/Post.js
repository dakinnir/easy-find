import React from 'react'
import "../css/Post.css"

import InputOption from "../components/InputOption"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

export default function Post({name, description, message, photoUrl}) {
  return (
    <div className="post">
        <div className="post_header">
            <AccountCircleIcon className="avatar-img"/>
            <div className="post_info">
                <h2> {name} </h2>
                <p> {description} </p>
            </div>
        </div>
        <div className="post_body">
            <p> {message} </p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpIcon} title="Like" 
            color="#371B58"/>
            <InputOption Icon={CommentIcon} title="Comment" 
            color="#371B58"/>
            <InputOption Icon={ShareIcon} title="Share" 
            color="#371B58"/>
            <InputOption Icon={SendIcon} title="Send" 
            color="#371B58"/>
        </div>
    </div>
  )
}
