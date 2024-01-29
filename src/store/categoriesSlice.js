import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchAllCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (thunkAPI) => {
    const response = await axios.get('http://localhost:3333/categories/all');
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
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = 'succeeded';
      state.entities = action.payload;
    })
  },
});

export const {} = categoriesSlice.actions

export default categoriesSlice.reducer;