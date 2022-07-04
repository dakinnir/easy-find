import React from 'react'
import Navbar from './components/Navbar'
import Widgets from './components/Recommend_Widgets'
import List from './components/Categories'

import "./css/Categories.css"


export default function Categories() {
  return (
    <div>
        <Navbar />
        <div className='categories-section'>
            <Widgets />
            <List />
        </div>
    </div>
  )
}
