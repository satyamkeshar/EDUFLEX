import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthUser: (state,payload) => {
      return {
        user: payload.payload.user
      }
    }
  },
})


// Action creators are generated for each case reducer function
export const { setAuthUser } = userSlice.actions

export default userSlice.reducer