import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
    firstName: '',
    middleName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    phone: ''
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
                addressLine1: action.payload.addressLine1,
                addressLine2: action.payload.addressLine2,
                city:         action.payload.city,
                state:        action.payload.state,
                country:      action.payload.country,
                pincode:      action.payload.pincode,
                phone:        action.payload.phone
            }
            state.users.push(user)
        }
    }
})

export const {addUser} = inputSlice.actions
export default inputSlice.reducer