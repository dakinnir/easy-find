import React from 'react'
import "../css/Recommendation.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox'


export default function Recommendations({title, photoUrl}) {
  return (
    <div className='recommend'>
        <div className="recommend_header">
            <img src={photoUrl}/>
            <h2>{title}</h2>
            
        </div>
    </div>
  )
}

