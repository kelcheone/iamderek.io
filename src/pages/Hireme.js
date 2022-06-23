import React from 'react'
import ContForm from '../components/ContForm'
import {SiFiverr, SiUpwork} from 'react-icons/si'

const Hireme = (props) => {
  return (
    <div id='page' className='hireMe'>
        {props.navbar}
        <div className='hiremebody'>
            <ContForm />
            <div id='links'>
                <button><a href=''>hire me on  </a><SiFiverr id='fiv' /></button>
                <button><a href=''>hire me on  </a><SiUpwork id='upw' /></button>
            </div>
        </div>
    </div>
  )
}

export default Hireme