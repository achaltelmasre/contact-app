import React, { useEffect, useState } from 'react';
import  {phonebook}  from "../../data/phoneBook";
import ContactCard from "../../component/ContactCard/ContactCard";
import "./App.css";

function App() {
  const [contacts, setcontacts] = useState(phonebook);
  const [searchTeam, setSearchTeam] = useState('');

  useEffect(() => {
     const filteredContacts = phonebook.filter((contact) => {
      const name = contact.name.toLowerCase();
      const mobile = contact.mobile.toString();
      
      const query = searchTeam.toLocaleLowerCase();

      return (name.includes(query) || mobile.includes(query))  
     })

     setcontacts(filteredContacts);

  }, [searchTeam])

  return (
    <>
      <h1 className="text-center">Contact Book</h1>

      <input
        type="text"
        placeholder="Search"
        className="search"
        value={searchTeam}
        onChange={(e) => {setSearchTeam(e.target.value) }}
      />

      <div>
        {contacts.map((contact, index) => {
          const { name, mobile } = contact;

          return <ContactCard key={index} name={name} mobile={mobile} />;
        })}
      </div>
      {
        contacts.length === 0 ? <h2 className='text-center'>No contact found</h2> : null
      }
    </>
  );
}

export default App;
