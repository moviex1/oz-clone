import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Book } from "@/types/Book"

type State = {
    status: "idle" | "loading" | "error" | "complete"
    books: Book[]
}

const initialState: State = {
    status: "idle",
    books: [],
}

export const fetchBooks = createAsyncThunk(
    "books/fetchBook",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:8081/api/v1/book/")
            return await response.json()
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const books = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(
            fetchBooks.fulfilled,
            (state, action: PayloadAction<Book[]>) => {
                state.status = "complete"
                state.books = action.payload
            }
        )
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = "error"
            console.log(action.payload)
        })
    },
})

export const {} = books.actions

export default books.reducer
