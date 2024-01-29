import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const makeOrder = createAsyncThunk(
  'basket/makeOrder',
  async (thunkAPI) => {
    const response = await axios.post('http://localhost:3333/order/send');
    console.log('response', response);
    return response.data
  }
)

const initialState = {
  entities: [],
  sendOrder: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      console.log('add to basket', action);
      return {
        ...state,
        entities: [...state.entities, action.payload]
      };
    },
    removeFromBasket(state, action) {
      const basketCopy = [...state.entities];
      basketCopy.splice(basketCopy.findIndex(item => item.id === action.payload), 1)
      return {
        ...state,
        entities: basketCopy
      };
    },
    removeAllFromBasket(state, action) {
      
      return {
        ...state,
        entities: state.entities.filter(item => item.id !== action.payload)
      };
    },
    clearBasket(state, action) {
      return {
        ...state,
        entities: []
      };
    },
    setBasketSend(state, action) {
      return {
        ...state,
        sendOrder: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(makeOrder.fulfilled, (state, action) => {
      // Add user to the state array
      state.sendOrder = true;
      state.entities = [];
    })
  },
});

export const {addToBasket, removeFromBasket, setBasketSend, removeAllFromBasket} = basketSlice.actions;

export default basketSlice.reducer;