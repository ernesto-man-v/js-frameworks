import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const getCoupon = createAsyncThunk(
  'coupon/getCoupon',
  async (thunkAPI) => {
    const response = await axios.post('http://localhost:3333/sale/send');
    console.log('response', response);
    return response.data
  }
)

/*
interface UsersState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}*/

const initialState = {
  received: false,
};

// Then, handle actions in your reducers:
export const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCoupon.fulfilled, (state, action) => {
      // Add user to the state array
      state.received = true;
    })
  },
});

export const {} = couponSlice.actions

export default couponSlice.reducer;