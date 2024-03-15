import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem("lang")?localStorage.getItem("lang"):"en",
}
export const languageSlice = createSlice({
    name:"language",
    initialState,
    reducers: {
        setLang: (state, action)=>{
            state.lang = action.payload
            localStorage.setItem("lang", action.payload)
        },
    }
});
export const getLang = (state) => state.lang.lang;
export const {setLang} = languageSlice.actions;

export default languageSlice.reducer;