import { useEffect, useState } from "react"
import Home from "./Components/Home"
import { ContactProvider } from "./contexts/ContactContext"
function App() {

    const[openForm, setOpenForm] = useState(false)
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')
    const addContact = (name, email) =>{
        setContacts((prev) => [{id : Date.now(), name : name , email : email }, ...prev])
    }

    const updateContact = (name,email,id) =>{
        setContacts((prev)=> prev.map((eachContact) =>(
            eachContact.id === id ? {name : name, id : id , email: email} : eachContact
        )))
    }

    const deleteContact = (id) =>{
        setContacts((prev) => prev.filter((eachContact) => id !== eachContact.id))
    }

    useEffect(()=>{
        const contacts = JSON.parse(localStorage.getItem("contacts"));

        if (contacts && contacts.length) {
          setContacts(contacts);
        }
    },[])
    
    useEffect(()=>{
        localStorage.setItem("contacts", JSON.stringify(contacts))
    },[contacts])
    
    return (
       <ContactProvider value={{openForm, setOpenForm, addContact, contacts, setContacts, updateContact, deleteContact, setSearch, search}}>
        <Home/>
       </ContactProvider>
        
       
    )
}

export default App
