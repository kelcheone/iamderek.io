import React from 'react'
import './comp.css'
import GithubBtn from './GithubBtn'
import SeeProjectBtn from './SeeProjectBtn'

const ShowProject = ({project}) => {
    let {title, image,description, stack, link, openGit, openStack, github } = project
    
  return (
    <div className='showProject'>
        <img src={image} alt="thumbnail" />
        <h1>{title}</h1>
        <p>{description}</p>
        <span>
            <p>Technologies: </p>
            {openStack ? <em>{stack.reduce((p,i)=>p + ", " + i)}</em> 
            : <em>For Client Discretion the stack remains secret</em>}
        </span>
        <span style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(40%, 1fr))'}}>
            <SeeProjectBtn link={link} />
            <GithubBtn gitLink={github} gitOpen={openGit} />
        </span>
    </div>
  )
}

export default ShowProject