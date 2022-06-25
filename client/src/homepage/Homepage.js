import React from "react"
import Navbar from "../homepage/components/Navbar"
import Sidebar from "./components/Sidebar"
import "./css/Homepage.css"


export default function Homepage(){
    return(
        <div className="homepage">
            <Navbar />

            
            <div className="homepage-body">
                <Sidebar />
                {/* <Feed />
                <Widgets /> */}
            </div>
        </div>
    )
}