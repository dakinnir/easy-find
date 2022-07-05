import React, { useState } from 'react'
import './css/SettingsPage.css'
import Header from './components/Header'
import { Link } from 'react-router-dom';
import SidebarOptions from './components/SidebarOptions';
import Navbar from '../homepage/components/Navbar';
import WorkHistorySettings from './components/WorkHistorySettings';
import UserSettings from './components/UserSettings';


export default function SettingsPage() {
    return (
        <React.Fragment>
            <div className="settings-page">
                <Navbar />
                <div className="container">
                    <div className="sidebar">
                        <SidebarOptions />
                    </div>

                    <div className="body-container">
                        <div className="header">
                            <Header image="../images/test-img.jpeg" name="Anita Cruz" profession="UX Designer"/>
                        </div>
                        <UserSettings />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
