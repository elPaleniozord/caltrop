import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type VectorIdx = 'x' | 'y' | 'z'

export interface BoxState {
  rpm: number,
  rotationAxis: VectorIdx
}
const initialState: BoxState = {
  rpm: 5,
  rotationAxis: 'y'
}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    increaseRPM: (state) => {
      state.rpm += 1
    },
    decreaseRPM: (state) => {
      state.rpm -= 1
    },
    changeRotationAxis: (state) => {
      state.rotationAxis = state.rotationAxis === 'z' ? String.fromCharCode(120) as VectorIdx : String.fromCharCode(state.rotationAxis.charCodeAt(0) + 1) as VectorIdx
    }
  }
})

export const {increaseRPM, decreaseRPM, changeRotationAxis} = boxSlice.actions

export const selectBox = (state: RootState) => state.box

export default boxSlice.reducer