import React, { useState } from 'react'
import NavBtn from './NavBtn'
import './comp.css'
import DropDownNav from './DropDownNav'

const NavBar = () => {
    let [isPc, setIsPc] = useState(window.innerWidth > 599)

    window.addEventListener('resize', ()=>{
        setIsPc(window.innerWidth > 599)
    })

  return (
    <nav className='mainNav'>
        <a href='/' style={logo}>iamDerek</a>
        {isPc && 
        <div>
            <NavBtn text={"home"} path="/" />
            <NavBtn text={"portfolio"} path='/portfolio' />
            <NavBtn text={"contacts"} path='/contacts' />
            <NavBtn text={"cv"} path="/download" />
        </div>}
        {!isPc &&
        <DropDownNav />
        }
    </nav>
    )
}

export default NavBar;

const logo = {
    textDecoration: 'none',
    fontSize: '1.2em',
    marginTop: 'auto',
    marginBottom:'auto',
    fontWeight: 'bold'
}
