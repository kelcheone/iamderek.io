import React from 'react'
import {FaHtml5, FaCss3, FaJs, FaReact, FaPython} from 'react-icons/fa'
import './comp.css'

const Stacks = (props) => {
  return (
    <div id={props.stacklass} className='vert-stack'>
        {props.stacks.map(stack=><a key={props.stacks.indexOf(stack)} 
        href={stack.href}>{stack.icon}</a>)}
    </div>
  )
}

export default Stacks