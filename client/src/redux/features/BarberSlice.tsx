import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpoint } from '../../app/api/endpoints';
import { log } from 'console';
export interface Barber {
  _id: string;
  employeeName: string;
  employeeFees: number;
  specialCut: string;
  description?: string;
  employeeImage?: string;
}

interface BarberState {
  barbers: Barber[];
  loading: boolean;
  error: string | null;
}

const initialState: BarberState = {
  barbers: [],
  loading: false,
  error: null,
};


export const fetchBarbers = createAsyncThunk('barbers/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`http://localhost:5001/api/${endpoint.BARBER.GET}`);
    return res.data.employees as Barber[];
  } catch (error: any) {
    console.log(error,"hh");
    
    return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch barbers');

  }
});

export const deleteBarber = createAsyncThunk(
  'barbers/deleteBarber',
  async (barberId: string, thunkAPI) => {
    console.log(barberId, "fsdfsfdsf")
    try {
      await axios.delete(`http://localhost:5001/api/${endpoint.ADMIN.BARBER.DELETE(barberId)}`);
      console.log(barberId , "barber id");
      
      return barberId;
    } catch (error: any) {
      console.log(error , " sdfghjkl ");
      
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to delete barber');
    }
  }
);

const barberSlice = createSlice({
  name: 'barbers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarbers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBarbers.fulfilled, (state, action: PayloadAction<Barber[]>) => {
        state.loading = false;
        state.barbers = action.payload;
      })
      .addCase(fetchBarbers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      .addCase(deleteBarber.fulfilled, (state, action: PayloadAction<string>) => {
        state.barbers = state.barbers.filter(barber => barber._id !== action.payload);
      })
      .addCase(deleteBarber.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      
  },
});

export default barberSlice.reducer;
