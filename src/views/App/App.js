import React, { useState } from 'react'
import { phonebook } from '../../data/phoneBook'
import './App.css'
import ContactCard from '../../component/ContactCard/ContactCard';

function App() {
   const [contacts, setcontacts] = useState(phonebook);
    return (
        <>
   
         <div>
            {contacts.map((contact, index) =>{
              const {name, mobile}  = contact;

              return <ContactCard key={index} name={name} mobile={mobile} />
            })}
         </div>

        </>
    )
}

export default App