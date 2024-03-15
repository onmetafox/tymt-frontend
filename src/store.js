import { configureStore } from '@reduxjs/toolkit'
import modalshowSlice from './utils/modalshowSlice'
import languageSlice from "./utils/languageSlice";
export default configureStore({
  reducer: {
    modalshow: modalshowSlice,
    lang: languageSlice
  },
})