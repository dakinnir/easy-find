import React, {useState} from "react"
import CreateIcon from '@mui/icons-material/Create';
import Post from "../components/Post"
import InputOption from "../components/InputOption"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

import "../css/Feed.css"


export default function Feed() {

    // const [post, setPosts] = useState([]);
    
    // // Intregrate the sending of post from the webpage 
    // const sendPost = e =>{
    //     e.preventDefault();

    // }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit"> Send </button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" 
                    color="#371B58"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" 
                    color="#371B58"/>
                    <InputOption Icon={EventIcon} title="Event" 
                    color="#371B58"/>
                    <InputOption Icon={ArticleIcon} title="Write Article" color="#371B58"/>
                </div>
            </div>
            {/* Post */}
            {/* {post.map((post) =>{
                <Post />
            })} */}

            <Post 
                name="Kojo Don" 
                description="Carpentar at Silicon Rose" 
                message="Pleased to announce I will be joining Racetrack as a Musician" 
            />
            <Post 
                name="Daniel King" 
                description="Electrician at Empite Rose" 
                message="Pleased to announce I will be joining Silion as a Leader" 
            />
             <Post 
                name="Kojo Don" 
                description="Carpentar at Silicon Rose" 
                message="Pleased to announce I will be joining Racetrack as a Musician" 
            />
            <Post 
                name="Daniel King" 
                description="Electrician at Empite Rose" 
                message="Pleased to announce I will be joining Silion as a Leader" 
            />
             <Post 
                name="Kojo Don" 
                description="Carpentar at Silicon Rose" 
                message="Pleased to announce I will be joining Racetrack as a Musician" 
            />
            <Post 
                name="Daniel King" 
                description="Electrician at Empite Rose" 
                message="Pleased to announce I will be joining Silion as a Leader" 
            />
        </div>
    )
}