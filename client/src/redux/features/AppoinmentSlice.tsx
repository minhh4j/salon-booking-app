import { endpoint } from '@/app/api/endpoints';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Service {
  _id: string;
  serviceName: string;
  price: number;
}

export interface Appointment {
  _id: string;
  userId: string;
  barberId: string;
  serviceId: Service[];
  date: string;
  timeSlot: string;
  status: 'pending' | 'approved' | 'declined';
  price: number;
  paymentStatus: 'paid' | 'unpaid';
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AppointmentState {
  appointment: Appointment | null;
  loading: boolean;
  error: string | null;
  success: boolean;
  myBookings: Appointment[];
  allBookings: Appointment[];
}

const initialState: AppointmentState = {
  appointment: null,
  loading: false,
  error: null,
  success: false,
  myBookings: [],
  allBookings: [],
};


export const createAppointment = createAsyncThunk<
  Appointment,
  any,
  { rejectValue: string }
>('appointment/create', async (payload, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      `http://localhost:5001/api${endpoint.BOOKING.BOOK}`,
      payload
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || 'Failed to create appointment'
    );
  }
});

export const getAllAppointments = createAsyncThunk<
  Appointment[],
  void,
  { rejectValue: string }
>('appointment/getAllAppointments', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `http://localhost:5001/api${endpoint.BOOKING.ALL_GET}`
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || 'Failed to fetch all appointments'
    );
  }
});


export const getMyBookings = createAsyncThunk<
  Appointment[],
  string,
  { rejectValue: string }
>('appointment/getMyBookings', async (userId, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `http://localhost:5001/api${endpoint.BOOKING.GET_BY_GET(userId)}`
    );
    return res.data;
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || 'Failed to fetch bookings'
    );
  }
});

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    resetAppointment: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.appointment = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(
        createAppointment.fulfilled,
        (state, action: PayloadAction<Appointment>) => {
          state.loading = false;
          state.success = true;
          state.appointment = action.payload;
        }
      )
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || 'Something went wrong';
      })

      // Get user bookings
      .addCase(getMyBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getMyBookings.fulfilled,
        (state, action: PayloadAction<Appointment[]>) => {
          state.loading = false;
          state.myBookings = action.payload;
        }
      )
      .addCase(getMyBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch bookings';
      })
      .addCase(getAllAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllAppointments.fulfilled,
        (state, action: PayloadAction<Appointment[]>) => {
          state.loading = false;
          state.myBookings = action.payload;
        }
      )
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch all appointments';
      });

  },
});

export const { resetAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
