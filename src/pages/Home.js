import React from 'react'
import './page.css'
import data from '../data/personal.json'

const Home = () => {
    
  return (
    <div className='page' id='home-page'>
        <div className='container'>
            <div className='part1'>
                <h1 id='major-h1'>
                    {"Softw/\\r<"}
                </h1>
                <h1 id='major-h1'>
                    {"D<v<lop<r"}
                </h1>
            </div>
            <div className='part2'>
                <div className='personal-info'>
                    <span >
                        <p style={{fontSize: '2rem'}} role='term'>Derek Pesa</p>
                    </span>
                    <span>
                        <p>Nairobi, Kenya (remote)</p>
                    </span>
                </div>
                <div className='intro-txt'>
                    <p>
                        {data.introText}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home