import React, { useState } from 'react'
import style from '@/app/page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/input/inputSlice'

function Form() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    //Created a set that will contain all phone and emails
    const duplicacy = new Set();

    const [formData, setFormData] = useState({
        firstName:    '',
        middleName:   '',
        lastName:     '',
        address:      '',
        city:         '',
        state:        '',
        country:      '',
        pincode:      '',
        phone:        '',
        email:        ''
    })


    const handleInput = (event) => {
        // We take name and value from current event.target and input them to SetFormData
        const { name, value} = event.target
        // we save the previous state to add data onto
        setFormData((pre) => ({...pre, [name]: value}))
        console.log(formData)
    }


    const handleSubmit = (event) => {
        //First we import users from store an loop through all of them
        //Importing from store is needed as set is cleaned on new state
        users.forEach(user => {
            //Then we add phone and email of each user in duplicacy set.
            duplicacy.add(user.phone)
            duplicacy.add(user.email.toLowerCase())
        });
        //console.log(duplicacy)

        //now if we add duplicate phone or email, we wont be able to
        if(duplicacy.has(formData.phone) || duplicacy.has(formData.email)){
            event.preventDefault();
            alert(`Someone already has this phone number or email.`)
        }
        else {
            //Otherwise add new phone and email to set
            duplicacy.add(formData.phone)
            duplicacy.add(formData.email.toLowerCase())
            //console.log(duplicacy)
            event.preventDefault();

            //Send data to store and reset all input boxes
            dispatch(addUser(formData))
            alert("Form Submitted")
            setFormData({
                firstName:    '',
                middleName:   '',
                lastName:     '',
                address:      '',
                city:         '',
                state:        '',
                country:      '',
                pincode:      '',
                phone:        '',
                email:        '' 
            })
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>First Name<span style={{color:'red'}}> *</span></span>         
            <input  name='firstName'     value={formData.firstName}      onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>Middle Name</span>          
            <input  name='middleName'    value={formData.middleName}     onChange={handleInput} type='text' />
        </label>
        <label>
            <span>Last Name<span style={{color:'red'}}> *</span></span>        
            <input  name='lastName'      value={formData.lastName}       onChange={handleInput} type='text' required/>
        </label>

        <label>
            <span>Local<span style={{color:'red'}}> *</span></span>
            <input  name='address'       value={formData.address}        onChange={handleInput} type='text' required/>
        </label>

        <div>
            <label>
                <span>City<span style={{color:'red'}}> *</span></span>   
                <input  name='city'          value={formData.city}           onChange={handleInput} type='text' required/>
            </label>
            <label>
                <span>State<span style={{color:'red'}}> *</span></span>    
            <input      name='state'         value={formData.state}          onChange={handleInput} type='text' required/>
            </label>
        </div>

        <div>
            <label>
                <span>Country<span style={{color:'red'}}> *</span></span>      
                <input  name='country'       value={formData.country}        onChange={handleInput} type='text' required/>
            </label>
            <label>
                <span>Pin Code<span style={{color:'red'}}> *</span></span>       
                <input  name='pincode'       value={formData.pincode}        onChange={handleInput} type='number' required/>
            </label> 
        </div>
        
        <label>
            <span>Phone Number<span style={{color:'red'}}> *</span></span>           
            <input  name='phone'         value={formData.phone}          onChange={handleInput} type='number' required/>
        </label>
        <label>
            <span>Email<span style={{color:'red'}}> *</span></span>           
            <input  name='email'         value={formData.email}          onChange={handleInput} type='email' required/>
        </label>   

        <label className={style.submit}>          
            <input name='submit' type='submit' className={style.submitBtn}/>
        </label>   
    </form>
  )
}

export default Form