import { useState, useEffect } from "react";
import axios from 'axios'
import Contact from './components/Contact'
import serverService from './components/server'
import Notification from './components/Error'

const App = () =>{
  const [contacts, setContacts] = useState([])
  const[newContact, setNewContact] = useState('')
  const[newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [className, setClassName] = useState('')

  useEffect(()=>{
    serverService 
      .getAll()
      .then(response=>{
        setContacts(response.data)
      })
  },[])

  const addContact = (event) => {
    event.preventDefault()

    const lastContact = contacts.at(-1).id

    const personObject = {
      name: newContact,
      number: newNumber,
      id: lastContact + 1
    }

    const alreadyContact = contacts.filter(contact => contact.name === personObject.name)
    
    if (alreadyContact.length === 0) {
      serverService
        .create(personObject)
        .then(response =>{
          setContacts(contacts.concat(response.data))
          setNewContact('')
          setNewNumber('')
        })
        setErrorMessage(`Added User ${personObject.name}`)
        setClassName('add')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
    } else {
      const response = window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)
      if (response !== null) {
        serverService
          .update(alreadyContact[0].id, personObject)
          
        serverService 
          .getAll()
          .then(response=>{
            setContacts(response.data)
          })
      }
    }
    
    setNewContact('')
    setNewNumber('')
  }
  

  const deleteContact = (props) => {
    
    const response = window.confirm(`Remove user ${props.name}?`)
    if (response !== null) {
      serverService
        .remove(props.id)
        .then(response=>{
          console.log(response.data);
          setContacts(response.data)
        })
        .catch( error =>{
          setErrorMessage(`User ${props.name} has already been removed from server`)
          setClassName('error')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })

        setContacts(contacts.filter(contact => contact.id !== props.id) )
    } 

    
  }

  const handleContactChange = (event) =>{
    setNewContact(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }
  

  return(
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} classCSS={className}/>
      <h1>Add a New Contact</h1>
      <form onSubmit={addContact}>
        <div>
          name:<input 
            value={newContact}
            onChange={handleContactChange}
            />
        </div>
        <div>
        number:<input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h1>Contact Overview</h1>
      <u>
        {
          contacts.map((contact,id) =>(
            <div key={id}>
              <Contact 
                id={contact.id}
                name={contact.name}
                number={contact.number}
                />
              <button onClick={deleteContact.bind(this, contact)}>
                delete
              </button>
            </div>
          ))
        }
      </u>
    </div>
  )

}

export default App