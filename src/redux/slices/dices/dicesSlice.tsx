import { createSlice } from "@reduxjs/toolkit";

export interface DicesState {
  dices: Array<number>
}

const initialState = {
  dices: []
}

export const dicesSlice = createSlice({
  name: 'dices',
  initialState,
  reducers: {
    addDice: (state) => {
      
    },
    removeDice: () => {

    }
  }
})