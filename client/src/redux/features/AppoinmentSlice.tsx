import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Appointment {
  _id: string;
  userId: string;
  barberId: string;
  serviceId: string[];
  date: string;
  timeSlot: string;
  status: string;
  price: number;
  paymentStatus: string;
  createdAt: string;
  updatedAt: string;
}

interface AppointmentState {
  allAppointments: Appointment[];
  userAppointments: Appointment[];
  selectedAppointment: Appointment | null;
  loading: boolean;
  error: string | null | unknown;
}

const initialState: AppointmentState = {
  allAppointments: [],
  userAppointments: [],
  selectedAppointment: null,
  loading: false,
  error: null,
};

export const getAllAppointments = createAsyncThunk<Appointment[], void, { rejectValue: unknown }>(
  'appointments/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Appointment[]>('/api/appointments');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAppointmentsByUser = createAsyncThunk<Appointment[], string, { rejectValue: unknown }>(
  'appointments/getByUser',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Appointment[]>(`/api/appointments/my/${userId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAppointmentById = createAsyncThunk<Appointment, string, { rejectValue: unknown }>(
  'appointments/getById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Appointment>(`/api/appointments/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(getAllAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAppointments.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
        state.loading = false;
        state.allAppointments = action.payload;
      })
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(getAppointmentsByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppointmentsByUser.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
        state.loading = false;
        state.userAppointments = action.payload;
      })
      .addCase(getAppointmentsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(getAppointmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppointmentById.fulfilled, (state, action: PayloadAction<Appointment>) => {
        state.loading = false;
        state.selectedAppointment = action.payload;
      })
      .addCase(getAppointmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appointmentSlice.reducer;
