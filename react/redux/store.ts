import { configureStore } from "@reduxjs/toolkit"
import authSlice from "@/redux/authSlice"
import mainSlice from "@/redux/mainSlice"
import singleBookSlice from "@/redux/singleBookSlice"
import booksSlice from "@/redux/booksSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        books: booksSlice,
        singleBook: singleBookSlice,
        main: mainSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
