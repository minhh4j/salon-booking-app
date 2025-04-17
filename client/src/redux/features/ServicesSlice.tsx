import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpoint } from '../../app/api/endpoints';

export interface Service {
  _id: string;
  serviceName: string;
  serviceCharge: number;
  duration: string;
  serviceDescription?: string;
  image?: string;
}

interface ServiceState {
  service: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  service: [],
  loading: false,
  error: null,
};

export const fetchServices = createAsyncThunk(
  'services/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:5001/api/${endpoint.SERVICE.GET}`);
      console.log("Fetched services:", res.data);
      return res.data.services  as Service[]; 
    } catch (error: any) {
      console.log("Service fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch services'
      );
    }
  }
);


export const deleteService = createAsyncThunk(
  'services/delete',
  async (serviceId: string, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:5001/api/${endpoint.ADMIN.SERVICE.DELETE(serviceId)}`);
      return serviceId; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to delete service'
      );
    }
  }
);


export const addService = createAsyncThunk(
  'services/add',
  async (newService: Partial<Service>, thunkAPI) => {
    try {
      const res = await axios.post(`http://localhost:5001/api/${endpoint.ADMIN.SERVICE.ADD}`, newService);
      return res.data.service as Service;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to add service'
      );
    }
  }
);



const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action: PayloadAction<Service[]>) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteService.fulfilled, (state, action: PayloadAction<string>) => {
        state.service = state.service.filter(service => service._id !== action.payload);
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      .addCase(addService.fulfilled, (state, action: PayloadAction<Service>) => {
        state.service.push(action.payload);
      })
      .addCase(addService.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      
  },
});

export default serviceSlice.reducer;
