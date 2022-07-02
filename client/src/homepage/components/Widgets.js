import React from 'react'
import "../css/Widgets.css"
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import Recommendations from './Recommendations';


export default function Widgets() {


  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2> Professionals Near You!  </h2>
            <CasesRoundedIcon />
        </div>
        <Recommendations
            photoUrl="../images/EasyFind.jpeg"
            title="Electrician"
        />
        <Recommendations
            photoUrl="../images/bg-img-signup.jpeg"
            title="Engineer"
        />
        <Recommendations
            photoUrl="../images/bg-img.jpeg"
            title="Electrician"
        />
        <Recommendations
            photoUrl="../images/EasyFind.jpeg"
            title="Carpenter"
        />
    </div>

  )
}
