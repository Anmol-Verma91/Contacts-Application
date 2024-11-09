import { useContext } from 'react'
import {createContext} from 'react' 

export const ContactContext = createContext({
    openForm : false,
    setOpenForm : () => {},
    contacts : [],
    setContacts : () =>{},
    addContact : (name,email) => {},
    updateContact : (name, email,id) =>{},
    deleteContact : (id) =>{},
    setSearch : () =>{},
    search : ""
    
    })

export const useContact = () =>{
     return useContext(ContactContext)
}

export const ContactProvider = ContactContext.Provider