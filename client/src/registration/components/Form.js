import React from 'react'

export default function Form(props) {
    const formStyle = {
        width: '60%',
        margin: 'auto'
    }
  return (
    // Add method later and action
    <form style={ formStyle }>
        {props.children}
    </form>
  )
}
