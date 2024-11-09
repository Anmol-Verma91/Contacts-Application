import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Form from './Form';
import { useContact } from '../contexts/ContactContext';
function Contacts({ eachContact }) {
    const {deleteContact} = useContact()
    const [openEdit, setOpenEdit] = useState(false)
    const [eachName, setEachName] = useState(eachContact.name)
    const [eachEmail, setEachEmail] = useState(eachContact.email)

    const deleteBtn = (id) =>{
           deleteContact(id)
    }
    return (
        <>
        <div className='w-[90%] h-14 mt-6 border-2 border-black rounded-lg m-auto flex items-center justify-between'>
            <IoMdContact className='text-5xl' />
            <div className=' w-[60%] overflow-hidden h-full'>
                <h1 className='text-xl font-bold'>{eachName}</h1>
                <p className='text-sm'>{eachEmail}</p>
            </div>
            <div className='flex text-3xl'>
                <FaEdit onClick={() => setOpenEdit(true)} />
                <IoTrashBinSharp className='text-red-600' onClick={() => deleteBtn(eachContact.id)} />
            </div>
        </div>
        { openEdit && <Form eachContact = {eachContact} openEdit = {openEdit} setOpenEdit = {setOpenEdit} setEachName = {setEachName}  eachName = {eachName} eachEmail={eachEmail} setEachEmail={setEachEmail}/> }
        </>
    )
}

export default Contacts
