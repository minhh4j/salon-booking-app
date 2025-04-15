import { configureStore } from "@reduxjs/toolkit";
import  BarberSlice  from "../features/BarberSlice";
const store = configureStore({
    reducer:{
        barber:BarberSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store ; 