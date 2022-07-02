import React from 'react'
import '../css/Header.css'
import Navbar from '../../homepage/components/Navbar'

export default function Header({ image, name, profession }) {
    return (
        <div className="header-container">
            <div className="about-header">
                <img className="profile-image" 
                    src={ image } 
                    alt="profile-image" 
                />

                <div className="title">
                    <p className="name">
                        { name }
                    </p>
                    <p className="profession">
                        { profession }
                    </p>
                </div>
            </div>
            <div className="actions">
                <button className="cancel-button">Cancel</button>
                <button className="save-button">Save</button>
            </div>
        </div>
    )
}


