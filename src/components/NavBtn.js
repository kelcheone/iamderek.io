import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './comp.css'

const NavBtn = ({show, text, path, mobile}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    // const downloadCv = () => {

    // }
    const navTo = () =>{
        try {
            show(false)
            navigate(path)
        } catch (error) {
            navigate(path)
        }
        
    }

    const getLoc = () => {
        if(pathname === path) return {width: "max-content", borderBottom: "1px solid white"}
        return {width: "max-content", borderBottom: "1px solid transparent"}
    }
    if(mobile) return (
        <button onClick={navTo} className='navBtnMobile'>
            {text}
        </button>
    )
  return (
    <div className='navBtnDiv' style={getLoc()}>
        <button onClick={navTo}>{text}</button>
    </div>
  )
}

export default NavBtn