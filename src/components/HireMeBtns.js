import React from 'react'

const HireMeBtns = ({upwork}) => {

    const gotoHire = () => {

    }

    const style = {
        minHeight: "60px",
        // height: 'fit-content',
        padding: "2px",
        fontSize: "1.8rem",
        fontWeight: "500",
        color: upwork ? "white" : "#14a800",
        backgroundColor: upwork ? "#14a800" : "white"
    }

  return (
    <button style={style} onClick={gotoHire}>
        {"Hire me on " + (upwork ? "Upwork" : "Fiverr")}
    </button>
  )
}

export default HireMeBtns