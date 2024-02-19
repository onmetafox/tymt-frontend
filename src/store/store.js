import { configureStore } from '@reduxjs/toolkit'
import modalshowSlice from '../utils/modalshowSlice'

export default configureStore({
  reducer: {
    modalshow: modalshowSlice
  },
})