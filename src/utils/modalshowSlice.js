import { createSlice } from '@reduxjs/toolkit'

export const modalshowSlice = createSlice({
  name: 'modalshow',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggle } = modalshowSlice.actions

export default modalshowSlice.reducer