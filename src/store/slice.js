import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: []
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setContacts: (state, action) => {
       state.contacts = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContacts } = mainSlice.actions

export default mainSlice.reducer