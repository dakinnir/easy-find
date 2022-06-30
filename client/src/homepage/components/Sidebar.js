import React from "react"
import "../css/Sidebar.css"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar--top">
                <img 
                    src="../images/bg-img.jpeg" 
                    alt="background--img"
                />
                <AccountCircleIcon className="sidebar-avatar"/>
                <h2> Kojo Don </h2>
                <h4> Carpentar at Silicon Rose </h4>
                <p>
                    I want to continue to expand my learning and expertise of the carpentry business by contracting work. 
                </p>
            </div>
        </div>
    )
}