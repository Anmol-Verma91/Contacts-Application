import { useState } from "react"
import Button from "./Button"
import Contacts from "./Contacts"
import Form from "./Form"
import Search from "./Search"
import { useContact } from "../contexts/ContactContext"

function Home() {
    const {openForm, setOpenForm, contacts, search, setSearch} = useContact()
    return (
        <div className="w-[350px] min-h-[667px] border-2 border-black rounded-xl m-auto relative overflow-hidden
        max-[427px]:border-none">
           <div className="h-20 w-full bg-black flex justify-center items-center">
            <h1 className="text-3xl text-white "> Contact App</h1>
           </div>
           <Search/>
           <div className="w-1/2 m-auto mt-3 flex justify-center items-center">
           <Button className={"text-md bg-black text-white"} onClick={() =>{ setOpenForm(true)
             setSearch('') }} >Add Contact</Button>
           </div>
           {
            contacts.filter((eachContact) => search.toLowerCase() === "" ? eachContact :  eachContact.name.toLowerCase().includes(search.toLowerCase())).map((eachContact) => 
                 <Contacts key={eachContact.id} eachContact = {eachContact}/>
            )
           }
          {openForm && <Form/>}
        </div>
    )
}

export default Home
