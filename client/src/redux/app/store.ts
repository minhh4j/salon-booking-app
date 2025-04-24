import { configureStore } from "@reduxjs/toolkit";
import  BarberSlice  from "../features/BarberSlice";
import ServiceSlice  from "../features/ServicesSlice"
import AppointmentReducer from "../features/AppoinmentSlice"
const store = configureStore({
    reducer:{
        barber:BarberSlice,
        service:ServiceSlice,
        appointment: AppointmentReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store ; 