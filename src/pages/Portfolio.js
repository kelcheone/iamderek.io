import React, { useEffect, useLayoutEffect, useState } from 'react'
import Project from '../components/Project'
import './pagecss.css'

const Portfolio = (props) => {
    const [projects, setProjects] = useState()
    useLayoutEffect(()=>{
        function load(){
            try {
                document.querySelector(".portfolio").style.animationPlayState = "running";
            } catch (error) {
                setTimeout(() => {
                    load();
                }, 1000);
            }
        }
        load();
    }, [])
    useEffect(()=>{
        
        async function getProjects(){
            const response = await fetch("http://localhost:4000")
            .then((res)=>res.json())
            .catch((err)=>console.log(err));
            setProjects(response);
        }
        getProjects();
    })
  return ((typeof(projects) !== "undefined") &&(
    <div id='page' className='portfolio'>
        {props.navbar}
        <div>
            {projects.map(project=><Project 
                key={projects.indexOf(project)}
                title={project.projectName}
                image={"http://localhost:4000/" + project.projectImage}
                stack={project.projectStack}
                description={project.projectDescription}
            />)}
        </div>
    </div>)
  )
}

export default Portfolio