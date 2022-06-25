import React, { useEffect, useLayoutEffect, useState } from 'react'
import Project from '../components/Project'
import Spinner from '../components/Spinner'
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
            const response = await fetch("https://myportfolioprojects.herokuapp.com/")
            .then((res)=>res.json())
            .catch((err)=>console.log(err));
            setProjects(response);
        }
        getProjects();
    })
    if (typeof(projects) !== 'undefined'){
        return (
            <div id='page' className='portfolio'>
                {props.navbar}
                <div>
                    {projects.map(project=><Project 
                        key={projects.indexOf(project)}
                        title={project.projectName}
                        image={"https://myportfolioprojects.herokuapp.com/" + project.projectImage}
                        stack={project.projectStack}
                        description={project.projectDescription}
                    />)}
                </div>
            </div>
        )
        } else {
            return <Spinner />
        }
}

export default Portfolio