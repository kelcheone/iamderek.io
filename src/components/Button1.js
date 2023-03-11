import React from 'react'
import './comp.css'

const Button1 = ({text, action=()=>null, type}) => {
  return (
    <button className='button1' onClick={action}
     type={type}>
        {text}
    </button>
  )
}

export default Button1