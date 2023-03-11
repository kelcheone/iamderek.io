import React, { useMemo, useState } from 'react'
import NavBtn from './NavBtn'
import './comp.css'
import DropDownNav from './DropDownNav'

const NavBar = () => {
    let [winSize, setWinSize] = useState(window.innerWidth)

    let isPc = useMemo(()=>{
        return window.innerWidth > 599
    }, [winSize])

    window.addEventListener('resize', ()=>{
        setWinSize(window.innerWidth)
    })
  return (
    <nav className='mainNav'>
        <a href='/' style={logo}>iamDerek</a>
        {isPc ? <div>
            <NavBtn text={"home"} path="/" />
            <NavBtn text={"portfolio"} path='/portfolio' />
            <NavBtn text={"contacts"} path='/contacts' />
            <NavBtn text={"cv"} path="/download" />
        </div> :
        <DropDownNav />
        }
    </nav>
    )
}

const logo = {
    textDecoration: 'none',
    fontSize: '1.2em',
    marginTop: 'auto',
    marginBottom:'auto',
    fontWeight: 'bold'
}

export default NavBar