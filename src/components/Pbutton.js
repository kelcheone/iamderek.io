import React from 'react'
import './comp.css'

const Pbutton = (props) => {
  return (
    <button className='pbutton'
    onClick={props.function} 
        >{props.text}
        <a href={props.href} /></button>
  )
}

export default Pbutton