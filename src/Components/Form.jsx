import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { useContact } from '../contexts/ContactContext'

function Form({ eachContact, openEdit, setOpenEdit, setEachName, eachName, setEachEmail, eachEmail }) {


    const { setOpenForm, addContact, updateContact } = useContact()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const InputRef = useRef(null)

    useEffect(() =>{
        InputRef.current.focus()
    },[name])

    const handleAddContact = (e) => {
        e.preventDefault()
        if (name === "" || email === "") {
            setError(true)
        }
        else {
            addContact(name, email)
            setOpenForm(false)
            setEmail("")
            setName("")
        }

    }

    const handleUpdateContact = (e) => {
        e.preventDefault()
        updateContact(eachName, eachEmail, eachContact.id)
        setOpenEdit(false)
    }
    return (
        <div className='w-full h-full backdrop-blur-sm absolute top-0 flex items-center'>
            <div className='w-full h-1/4 bg-white relative border-2 border-black'>
                <form className='m-6' onSubmit={openEdit ? handleUpdateContact : handleAddContact} >
                    <div>
                        <label htmlFor="name">Name&nbsp; </label>
                        <input type="text" ref={InputRef}  required id='name' value={openEdit ? eachName : name} onChange={openEdit ? (e) => setEachName(e.target.value) : (e) => setName(e.target.value)} className='border-2 border-black outline-none pl-2 ' />
                    </div>
                    <div>
                        <label htmlFor="email"> &nbsp;Email &nbsp;</label>
                        <input type="text" required id='email' value={openEdit ? eachEmail : email} onChange={openEdit ? (e) => setEachEmail(e.target.value) : (e) => setEmail(e.target.value)} className='border-2 border-black outline-none pl-2 mt-2' />
                    </div>
                    <Button className={"absolute bottom-3 right-3 text-sm bg-black text-white"} >{openEdit ? "Update" : "Add"} Contact</Button>
                </form>
                <Button className={"absolute bottom-3 left-3 text-sm border-2 border-black bg-white text-black"} onClick={() => { openEdit ? setOpenEdit(false) : setOpenForm(false) }}>Close</Button>
                {error &&
                    <div className='w-full h-full bg-white text-xl absolute top-0 flex flex-col items-center justify-center'>
                        <h1>Please fill the Contact</h1>
                        <Button className={" text-sm bg-black text-white "} onClick={() => setError(false)} type = {"button"}>Ok</Button>

                    </div>
                }
            </div>

        </div>
    )
}

export default Form
