import React from "react"
import "../css/Sidebar.css"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Experience from "./Experience";



export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar--top">
                <div className="sidebar-heading">
                    <img 
                        src="../images/bg-img.jpeg" 
                        alt="background--img"
                    />
                    <AccountCircleIcon className="sidebar-avatar"/>
                </div>
                <div className="sidebar--details">
                    <h2 className="sidebar-name"> Kojo Don </h2>
                    <h4 className="sidebar-title"> Carpentar at Silicon Rose </h4>
                    <p className="sidebar-descrip"> I want to continue to expand my learning and expertise of the carpentry business by contracting work. </p>
                </div>
                <div className="sidebar--experience">
                    <hr /> <h3>Work Experience</h3> <hr />
                    
                    <Experience 
                        title="Supply Chain" 
                        company="Pint Studio"
                        message="Pleased to announce I will be joining Racetrack as a Musician" 
                    />
                    <Experience 
                        title="Software Engineeer" 
                        company="Pint Studio"
                        message="Building products that will change the way we operate" 
                    />
                    <Experience 
                        title="Software Engineeer" 
                        company="Pint Studio"
                        message="Building products that will change the way we operate" 
                    />
                    <Experience 
                        title="Software Engineeer" 
                        company="Pint Studio"
                        message="Building products that will change the way we operate" 
                    />
                </div>
            </div>
        </div>
    )
}