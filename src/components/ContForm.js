import React, { useState } from 'react'
import Pbutton from './Pbutton'
import './comp.css'

const ContForm = () => {
    const [contForm, setForm] = useState({name: "", email:"", message: " "});
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
    <form onSubmit={handleSubmit}>
        <h5>Send Me a Message</h5>
            <input type='text' value={contForm.name} placeholder="Your name" 
                onChange={(e)=>setForm(
                    prev=>({...prev, name: e.target.value})
                )}
            />
            <input type='email' value={contForm.email} placeholder="johnjanedoe@gmail.com" 
                onChange={(e)=>setForm(
                    prev=>({...prev, email: e.target.value})
                )}
            />
        <textarea value={contForm.message} placeholder="Write message here"
            onChange={(e)=>setForm(
                prev=>({...prev, message: e.target.value})
            )}
        ></textarea>
        <Pbutton text="Send"/>
    </form>
  )
}

export default ContForm