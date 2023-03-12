import React from 'react'
import ContactForm from '../Components/ContactForm'
import HireMeBtns from '../Components/HireMeBtns'
import './page.css'

const ContactPage = () => {
  return (
    <div className='page' id='contact-page'>
        <div className='container'>
            <div className='sub-cont'>
                <ContactForm />    
            </div>
            <div className='sub-cont' id='hire-me'>
                <h2 id='major-h2'>Hire Me on 3rd Party</h2>
                <HireMeBtns upwork />
                <HireMeBtns />
                <p>
                    *You can post a link to your job posts on any of the sites
                    above or any other site to the message section
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContactPage