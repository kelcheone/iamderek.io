import React from 'react'

const SeeProjectBtn = ({link}) => {
    const openProject = () => {
        window.open(link, "_blank")
    }
  return (
    <button onClick={openProject} style={style}>
        👀See Project
    </button>
  )
}

const style = {
    backgroundColor: 'blueviolet',
    width: '8rem',
    height: '2rem',
    borderRadius: '5px'
}

export default SeeProjectBtn