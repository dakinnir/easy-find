import React from 'react'
import "../css/RecommendationCard.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox'


export default function RecommendationCard({title, photoUrl}) {
  return (
    <div className='recommend'>
        <img src={photoUrl}/>
        <div className="recommend_header">
            <p className="title">{title}</p>
        </div>
    </div>
  )
}

