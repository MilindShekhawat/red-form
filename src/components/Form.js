import React, { useState } from 'react'
import style from '@/app/page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/input/inputSlice'

function Form() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

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
        const { name, value} = event.target
        setFormData((pre) => ({...pre, [name]: value}))
        console.log(formData)
    }

    const handleSubmit = (event) => {
        users.forEach(user => {
            if(user.phone != formData.phone && user.email != formData.email){
                console.log(user.phone + " " + formData.phone)
                console.log(user.email + " " + formData.email)
                event.preventDefault();
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
            else{
                alert(`User ${user.firstName} already exists.`)  
                console.log("Duplicate")
            }
        });
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

        <label>
            <span>City<span style={{color:'red'}}> *</span></span>   
            <input  name='city'          value={formData.city}           onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>State<span style={{color:'red'}}> *</span></span>    
        <input      name='state'         value={formData.state}          onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>Country<span style={{color:'red'}}> *</span></span>      
            <input  name='country'       value={formData.country}        onChange={handleInput} type='text' required/>
        </label>
        <label>
            <span>Pin Code<span style={{color:'red'}}> *</span></span>       
            <input  name='pincode'       value={formData.pincode}        onChange={handleInput} type='number' required/>
        </label>

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