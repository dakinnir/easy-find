import React from 'react'
import Content from "../components/Content"
import "../css/List.css"

export default function List() {
  return (
    <div className='list'>
        <h2 className='list-heading'> Looking for professionals? </h2>
        <p className='list-para'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
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
            message=" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. qui officia deserunt mollit anim id est laborum."
            photoUrl="../images/bg-img.jpeg" 
          />
          <Content 
            name="Entrepreneur" 
            description="Empite Rose" 
            message="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            photoUrl="../images/bg-img.jpeg" 
          />
          <Content 
            name="Carpenter" 
            description="Empire Building" 
            message="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            photoUrl="../images/background.jpeg" 
          />
        </div>
    </div>
  )
}
