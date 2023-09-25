import React from 'react'
import './ContactCard.css'

function ContactCard({name, mobile}) {
    return (
    
        <div className='contact-card'>
            <h1>{name}</h1>
            <p>{mobile}</p>
        </div>
     
    )
}

export default ContactCard