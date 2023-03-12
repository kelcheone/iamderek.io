import React from 'react'
import './page.css'
import projects from '../data/projects'
import PortfolioCategory from '../Components/PortfolioCategory'

const Portfolio = () => {
    let categories = Object.keys(projects)
  return (
    <div className='page' id='portfolio'>
        <div className='page-content'>
            {categories.map((categ, indx)=><PortfolioCategory key={indx} category={categ} projects={projects[categ]} />)}
        </div>
    </div>
  )
}

export default Portfolio