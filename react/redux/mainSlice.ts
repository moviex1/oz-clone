import { createSlice } from "@reduxjs/toolkit"
import { Book } from "@/types/Book"

type State = {
    status: "idle" | "loading" | "error" | "complete"
    books: Book[]
}

const initialState: State = {
    status: "idle",
    books: [],
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
})

export default mainSlice.reducer
