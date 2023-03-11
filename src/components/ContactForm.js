import React from 'react'
import Button1 from './Button1'
import TextInput from './TextInput'

const ContactForm = () => {

  return (
    <>
    <h1 id='major-h2'>Leave me a message</h1>
    <form>
        <TextInput keyN="name" ph="Name/Company" type='text' />
        <TextInput keyN="email" ph='Your Email' type="email" />
        <TextInput keyN="phone" ph="Phone Number" type="tel" />
        <textarea name='message' placeholder='Leave your message or brief project description, I will get back to you' />
        <Button1 text="Send Message" type='submit' />
    </form>
    </>
  )
}

export default ContactForm