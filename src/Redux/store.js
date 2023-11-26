import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import userReducer from './userSlice'
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: []
})