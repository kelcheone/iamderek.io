import React, { useState } from 'react'
import DropBtn from './DropBtn'
import NavBtn from './NavBtn'
import './comp.css'

const DropDownNav = () => {
    const [drop, setDrop] = useState(false)
    
  return (
    <div className='dropDownNavs' onBlur={()=>setDrop(false)} >
        <DropBtn state={[drop, setDrop]} />
        {drop && 
        <div id='btns'>
            <NavBtn show={setDrop} mobile text="home" path='/' />
            <NavBtn show={setDrop} mobile text="portfolio" path="/portfolio" />
            <NavBtn show={setDrop} mobile text="contacts" path="/contacts" />
            <NavBtn show={setDrop} mobile text="cv" path="cv" />
        </div>}
    </div>
  )
}

export default DropDownNav