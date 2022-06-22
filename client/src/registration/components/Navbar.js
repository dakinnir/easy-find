import React from 'react'
import MenuOption from './MenuOption';

// importing external css 
import '../css/Navbar.css'

// importing icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';

function Navbar() {
  return (
    <div className="navbar">
        <img src="../images/EasyFind.jpeg" alt="easyfind-logo"/>
        <div className="navbar-left">
            {/* <div className="searchbar">
                <SearchOutlinedIcon />
                <input className="input-field" type="text" placeholder="Search for People, Jobs..." />
            </div> */}
        </div>
        <div className="navbar-right">
            <MenuOption text="Sign In" Icon={ HomeRoundedIcon }/>
            <MenuOption text="Join Us" Icon={ CasesRoundedIcon } />
            {/* <MenuOption text="About" Icon={ SupervisorAccountRoundedIcon } /> */}
        </div>
    </div>
  )
}

export default Navbar