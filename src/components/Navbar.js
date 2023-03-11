import React from 'react'
import NavBtn from './NavBtn'
import './comp.css'

const NavBar = () => {
    
  return (
    <nav className='mainNav'>
        <h1>iamDerek</h1>
        <div>
            <NavBtn text={"home"} path="/" />
            <NavBtn text={"portfolio"} path='/portfolio' />
            <NavBtn text={"contacts"} path='/contacts' />
            <NavBtn text={"cv"} path="/download" />
        </div>
    </nav>
    )
}

export default NavBar