import React from 'react'
import '../css/MenuOption.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MenuOption( { text, Icon, avatar }) {
  return (
    <div className="menu-option">
        { Icon && <Icon className="menu-option_icon" />}
        { avatar &&
          <AccountCircleIcon className="menu-option_icon" src={avatar}/>
        }
        <p className="menu-option_title"> { text } </p>
    </div>
  )
}

export default MenuOption