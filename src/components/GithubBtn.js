import React from 'react'
import { Btnstyle } from './SeeProjectBtn'

const GithubBtn = ({gitLink, gitOpen}) => {

    const openGit = () => {
        gitOpen && window.open(gitLink, "_blank")
    }
  return (
    <button onClick={openGit} style={Btnstyle}>
        {gitOpen ? "See Code" : "Code Withheld"}
    </button>
  )
}

export default GithubBtn