import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
    firstName: 'Milind',
    middleName: 'Singh',
    lastName: 'Shekhawat',
    address: 'DLF Phase 3',
    city: 'Gurugram',
    state: 'Haryana',
    country: 'India',
    pincode: '122010',
    phone: '9818121212',
    email: 'milindshekhawat10@gmail.com'
    }]
}

export const inputSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                //Import individual object values and assign them
                firstName:    action.payload.firstName,
                middleName:   action.payload.middleName,
                lastName:     action.payload.lastName,
                address:      action.payload.address,
                city:         action.payload.city,
                state:        action.payload.state,
                country:      action.payload.country,
                pincode:      action.payload.pincode,
                phone:        action.payload.phone,
                email:        action.payload.email
            }
            //Push the user "object" to users "List"
            state.users.push(user)
            console.log(user)
        },
    }
})

export const {addUser} = inputSlice.actions
export default inputSlice.reducer