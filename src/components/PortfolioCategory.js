import React, { useState } from 'react'
import ShowProject from './ShowProject'
import './comp.css'

const PortfolioCategory = ({category, projects=[]}) => {
    const [under, setUnder] = useState(false)

    const underline = () => under ? "underline" : "none"
  return (
    <div className='portfolio-categ' id={category+"x"} onMouseOver={()=>setUnder(true)} 
        onMouseOut={()=>setUnder(false)}
    >
        <h1 className='h1' style={{textDecoration: underline()}} >{category}</h1>
        <div className='projects'>
            {projects.map((project, indx)=><ShowProject key={indx} project={project} />)}
        </div>
    </div>
  )
}

export default PortfolioCategory