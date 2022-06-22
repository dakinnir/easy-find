import React from 'react'
import '../css/MenuOption.css'

function MenuOption( { text, Icon }) {
  return (
    <div className="menu-option">
        { Icon && <Icon className="menu-option_icon" />}
        <p className="menu-option_title"> { text } </p>
    </div>
  )
}

export default MenuOption