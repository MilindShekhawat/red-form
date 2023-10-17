import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
    firstName: 'Milind',
    middleName: 'Singh',
    lastName: 'Shekhawat',
    address: 'V-38/9, DLF Phase 3',
    city: 'Gurugram',
    state: 'Haryana',
    country: 'India',
    pincode: '122010',
    phone: '9818742181',
    email: 'milindshekhawat10@gmail.com'
    }]
}

export const inputSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
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
            state.users.push(user)
            console.log(user)
        },
    }
})

export const {addUser} = inputSlice.actions
export default inputSlice.reducer