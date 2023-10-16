import { configureStore } from '@reduxjs/toolkit'
import { addUser } from './features/input/inputSlice'

export const store = configureStore({reducer: addUser})
