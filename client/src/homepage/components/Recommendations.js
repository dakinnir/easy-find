import React from 'react'
import "../css/Recommendations.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox'


function Recommendations({title, description, location}) {
  return (
    <div className='recommend'>
        <div className="recommend_header">
            {/* replace the icon to be more square shape */}
            {/* <AccountBoxIcon className="avatar-img"/> */}
            <h2>{title}, <span>{description}</span></h2>
            <p>{location}</p>
            {/* <div className="recommend_info">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{location}</p>
            </div> */}
        </div>
    </div>
  )
}

export default Recommendations