import React from 'react'
import Content from "../components/Content"
import "../css/List.css"

export default function List() {
  return (
    <div className='list'>
        <h2> Looking for professionals? </h2>
        <p> We are here to help you find oppoortunities to increase your network and networth! </p>
        <div className="list-content">
        <Content 
            name="Engineer" 
            description="Sinuba Limited" 
            message="Pleased to announce I will be joining Silion as a Leader" 
            photoUrl="../images/bg-img-signup.jpeg"
        />
            <Content 
            name="Electrician" 
            description="Silicon Rose" 
            message="Pleased to announce I will be joining Racetrack as a Musician"
            photoUrl="../images/bg-img.jpeg" 
        />
        <Content 
            name="Entrepreneur" 
            description="Empite Rose" 
            message="Pleased to announce I will be joining Silion as a Leader"
            photoUrl="../images/bg-img.jpeg" 
        />
        </div>
    </div>
  )
}
