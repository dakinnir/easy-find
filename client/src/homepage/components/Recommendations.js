import React from 'react'
import "../css/Recommendations.css"

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
