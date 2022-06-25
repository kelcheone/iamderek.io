import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../mobile.css'

const Navbar = () => {
    const navigate = useNavigate()
    const [ids, setIds] = useState({home: "active", port: "", hire: "", cv: ""});
    useEffect(()=>{
        if(window.location.pathname === "/"){
            setIds({home: "active", port: "", hire: "", cv: ""});
        }
        if(window.location.pathname === "/portfolio"){
            setIds({home: "", port: "active", hire: "", cv: ""})
        }
        if(window.location.pathname === "/hire_me"){
            setIds({home: "", port: "", hire: "active", cv: ""})
        }
    }, [])
  return (
    <nav id={window.location.pathname=="/portfolio" && 'portNavBar'}>
        <div>
        <button id={ids.home} 
        onClick={()=>navigate("/")} >Home</button>

        <button id={ids.port} onClick={()=>{
            window.location.pathname !== "/portfolio" && navigate("/portfolio")
        }}>Portfolio</button>

        <button id={ids.hire} onClick={()=>{
            window.location.pathname !== "/hire_me" && navigate("/hire_me")
        }}
        >Hire Me</button>


        <button id={ids.cv} 
        
        >Resum'e</button>
        </div>
    </nav>
  )
}

export default Navbar