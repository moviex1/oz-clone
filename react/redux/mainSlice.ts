import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
})

export const {} = counterSlice.actions

export default counterSlice.reducer
