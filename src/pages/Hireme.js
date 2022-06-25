import React from 'react'
import ContForm from '../components/ContForm'
import {SiFiverr, SiUpwork} from 'react-icons/si'

const Hireme = (props) => {
  return (
    <div id='page' className='hireMe'>
        {props.navbar}
        <div className='hiremebody'>
            <ContForm />
            You can also hire me on
            <div id='links'>
                <button id='fiv'><a href=''><SiFiverr /></a></button>
                <button id='upw'><a href=''><SiUpwork  /></a></button>
            </div>
        </div>
    </div>
  )
}

export default Hireme