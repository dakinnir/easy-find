import React from 'react'
import "../css/Widget.css"
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import RecommendationCard from './RecommendationCard';

export default function Widgets() {


  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2> Professionals Near You!  </h2>
            {/* <CasesRoundedIcon /> */}
        </div>
        <RecommendationCard
            photoUrl="../images/painting.jpeg"
            title="Electrician"
        />
        <RecommendationCard
            photoUrl="../images/bg-img-signup.jpeg"
            title="Engineer"
        />
        <RecommendationCard
            photoUrl="../images/bg-img.jpeg"
            title="Electrician"
        />
        <RecommendationCard
            photoUrl="../images/painting.jpeg"
            title="Carpenter"
        />
    </div>

  )
}
