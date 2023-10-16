'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/input/inputSlice'

function Form() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    const [formData, setFormData] = useState({
        firstName:    '1',
        middleName:   '1',
        lastName:     '1',
        addressLine1: '1',
        addressLine2: '1',
        city:         '1',
        state:        '1',
        country:      '1',
        pincode:      '1',
        phone:        '1'
    })

    function handleInput(event) {
        const { name, value} = event.target
        setFormData((pre) => ({...pre, [name]: value}))
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addUser(formData))
        console.log(formData)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>First Name</span>         
            <input  name='firstName'     value={formData.firstName}      onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>Middle Name</span>          
            <input  name='middleName'    value={formData.middleName}     onChange={handleInput} type='text' />
        </label>
        <label>
            <span>Last Name</span>        
            <input  name='lastName'      value={formData.lastName}       onChange={handleInput} type='text' required/>
        </label>

        <label>
            <span>Address Line 1</span>
            <input  name='addressLine1'  value={formData.addressLine1}   onChange={handleInput} type='text' required/>
        </label>

        <label>
            <span>Address Line 2</span>
            <input  name='addressLine2'  value={formData.addressLine2}   onChange={handleInput} type='text' />
        </label>
        <label>
            <span>City</span>   
            <input  name='city'          value={formData.city}           onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>State</span>    
        <input      name='state'         value={formData.state}          onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>Country</span>      
            <input  name='country'       value={formData.country}        onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>Pin Code</span>       
            <input  name='pincode'       value={formData.pincode}        onChange={handleInput} type='number' required/>
        </label>

        <label>
            <span>Phone Number</span>           
            <input  name='phone'         value={formData.phone}          onChange={handleInput} type='number' required/>
        </label>   

        <label>          
            <input name='submit'        value={formData.submit}         onChange={handleInput}  type='submit' required/>
        </label>   
    </form>
  )
}

export default Form