import React from 'react'
import "../css/Widgets.css"
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import Recommendations from './Recommendations';


export default function Widgets() {


  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2> Job Recommendations </h2>
            <CasesRoundedIcon />
        </div>
        <div className="widgets_info">
            <Recommendations
                title="Electrician"
                description="PepsiCo"
                location="Atlanta, GA"
            />
            <Recommendations
                title="Engineer"
                description="Apple"
                location="Atlanta, GA"
            />
            <Recommendations
                title="Electrician"
                description="Algo LTM"
                location="Atlanta, GA"
            />
        </div>
    </div>

  )
}
