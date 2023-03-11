import React from 'react'
import './comp.css'

const DropBtn = ({state}) => {
    const [drop, setDrop] = state

  return (
    <button className='dropBtn' onClick={()=>setDrop(!drop)}>
        <div id='a' style={{width: drop ? "90%" : "100%"}} />
        <div id='b' style={{width: drop ? "50%" : "100%"}} />
        <div id='c' style={{width: drop ? "70%" : "100%"}} />
    </button>
  )
}

export default DropBtn