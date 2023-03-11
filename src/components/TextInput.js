import React from 'react'

const TextInput = ({type, keyN, ph}) => {

    const style = {

    }
  return (
    <input role="textbox" style={style} type={type} name={keyN} placeholder={ph} />
  )
}

export default TextInput