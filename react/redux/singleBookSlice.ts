import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface State {
    status: "idle" | "loading" | "error" | "complete"
    book: object
}

const initialState: State = {
    status: "idle",
    book: {},
}

export const fetchBook = createAsyncThunk("singleBook/fetchBook", async () => {
    return await fetch("api/v1/book/")
})

export const singleBook = createSlice({
    name: "singleBook",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(
            fetchBook.fulfilled,
            (state, action: PayloadAction<object>) => {
                state.status = "complete"
                state.book = action.payload
            }
        )
        builder.addCase(fetchBook.rejected, (state) => {
            state.status = "error"
        })
    },
})

export const {} = singleBook.actions

export default singleBook.reducer
