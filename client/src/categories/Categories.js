import React from 'react'
import Navbar from './components/Navbar'
import Widgets from './components/Widgets'
import List from './components/List'

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
