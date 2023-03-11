import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './comp.css'

const NavBtn = ({text, path}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const navTo = () => navigate(path)

    const getLoc = () => {
        if(pathname === path) return {width: "max-content", borderBottom: "1px solid white"}
        return {width: "max-content", borderBottom: "1px solid transparent"}
    }
  return (
    <div className='navBtnDiv' style={getLoc()}>
        <button onClick={navTo}>{text}</button>
    </div>
  )
}

export default NavBtn