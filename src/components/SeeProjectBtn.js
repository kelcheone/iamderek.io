import React from 'react'

const SeeProjectBtn = ({link}) => {
    const openProject = () => {
        window.open(link, "_blank")
    }
  return (
    <button onClick={openProject} style={Btnstyle}>
        👀See Project
    </button>
  )
}

export const Btnstyle = {
    backgroundColor: 'blueviolet',
    height: '2rem',
    width: "90%",
    borderRadius: '5px',
    fontSize: "16px"
}

export default SeeProjectBtn