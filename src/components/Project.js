import React from 'react'
import Pbutton from './Pbutton'
import './comp.css'

const Project = (props) => {
  return (
    <div className='project'>
        <img src={props.image} />
        <div className='descr'>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h5>{props.stack}</h5>
            <div>
                <Pbutton text={"View Project"} 
                  href={props.link}
                />
                <Pbutton text={"Source Code"}  
                  href={props.link}
                />
            </div>
        </div>
    </div>
  )
}

export default Project