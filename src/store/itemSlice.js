import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchAllItems = createAsyncThunk(
  'items/fetchItems',
  async (thunkAPI) => {
    const response = await axios.get('http://localhost:3333/products/all');
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
  entities: [],
  loading: 'idle',
};

// Then, handle actions in your reducers:
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllItems.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = 'succeeded';
      state.entities = action.payload;
    })
  },
});

export const {} = itemsSlice.actions

export default itemsSlice.reducer;