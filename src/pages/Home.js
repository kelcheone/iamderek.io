import React, { useEffect, useLayoutEffect } from 'react'
import Pbutton from '../components/Pbutton'
import './pagecss.css'
import profile from '../images/profile.png'
import Stacks from '../components/Stacks'
import {stack, contacts} from '../ListNfuncs'


const Home = (props) => {
  useEffect(()=>{
    document.querySelector(".home").style.animationPlayState="running";
  }, [])
  return (
    <div id='page' className='home'>
        {props.navbar}
        <div className='curvy-bar'></div>
        <Stacks stacklass={"vert-left"} stacks={stack} />
        <Stacks stacklass={"vert-right"} stacks={contacts} />
        <div className='bodyTxt'>
          <span id='name'><h3>Hello, I'm</h3><h2>Derek Pesa</h2></span>
          <h1 id='title'>Software Developer</h1>
          <p>
            Hello, I’m Derek. I’m a full stack developer.
            I would love to be part of your project. 
            Just reach out
          </p>
          <Pbutton text="hire me" />
        </div>
        <img className='myprofile' src={profile} />

    </div>
  )
}

export default Home