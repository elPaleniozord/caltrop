import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState = {
  dark: localStorage && !!localStorage.getItem('darkMode')
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.dark ? document.body.classList.remove('dark') : document.body.classList.add('dark')
      state.dark = !state.dark 
    }
  }
})

export const { toggle } = darkModeSlice.actions

export const selectDarkMode = (state: RootState) => state.darkMode.dark

export default darkModeSlice.reducer