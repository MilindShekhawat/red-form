import React from 'react'

function Form() {
  return (
    <form>
        <label>
            <span>First Name</span>         
            <input name='first_name' type='text' required/>
        </label>
        <label>
            <span>Middle Name</span>          
            <input name='middle_name' type='text'/>
        </label>
        <label>
            <span>Last Name</span>        
            <input name='last_name' type='text' required/>
        </label>

        <label>
            <span>Address Line 1</span>
            <input name='address_line_1' type='text' required/>
        </label>

        <label>
            <span>Address Line 2</span>
            <input name='address_line_2' type='text'/>
        </label>
        <label>
            <span>City</span>   
            <input name='city' type='text' required/>
        </label>
        <label>
            <span>State</span>    
        <input name='state' type='text' required/>
        </label>
        <label>
            <span>Country</span>      
            <input name='country' type='text' required/>
        </label>
        <label>
            <span>Pin Code</span>       
            <input name='pincode' type='number' required/>
        </label>

        <label>
            <span>Phone Number</span>           
            <input name='phone' type='number' required/>
        </label>   

        <label>          
            <input name='submit' type='submit' required/>
        </label>   
    </form>
  )
}

export default Form