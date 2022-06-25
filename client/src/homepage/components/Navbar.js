import React from 'react'
import MenuOption from './MenuOption';

// importing external css 
import '../css/Navbar.css'

// importing icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Navbar() {
  return (
    <div className="navbar">
        <img src="../images/EasyFind.jpeg" alt="easyfind-logo"/>
        <div className="navbar-left">
            <div className="searchbar">
                <SearchOutlinedIcon />
                <input className="input-field" type="text" placeholder="Search for People, Jobs..." />
            </div>
        </div>
        <div className="navbar-right">
            <MenuOption text="Home" Icon={ HomeRoundedIcon }/>
            <MenuOption text="Profile" Icon={ SupervisorAccountRoundedIcon } />
            <MenuOption text="Job Recommendations" Icon={ CasesRoundedIcon } />
            <MenuOption text="Messages" Icon={MessageIcon}/>
            <MenuOption text="Settings" Icon={SettingsIcon}/>
            {/* <MenuOption avatar = "./images/bg-img.jpeg" title="Hello"/> */}
            

        </div>
    </div>
  )
}
