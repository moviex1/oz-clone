import { configureStore } from "@reduxjs/toolkit"
import authSlice from "@/redux/authSlice"
import mainSlice from "@/redux/mainSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        main: mainSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
