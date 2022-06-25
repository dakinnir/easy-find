import React from 'react'
import '../css/MenuOption.css'

// import Avatar from "@mui/icons-material/core"

function MenuOption( { text, Icon, avatar }) {
  return (
    <div className="menu-option">
        { Icon && <Icon className="menu-option_icon" />}
        {/* { avatar &&
          <Avatar className="menu-option_icon" src={avatar}/>
        } */}
        <p className="menu-option_title"> { text } </p>
    </div>
  )
}

export default MenuOption