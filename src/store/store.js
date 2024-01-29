import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import itemsSlice from './itemSlice';
import basketSlice from './basketSlice';
import couponSlice from './couponSlice';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch();

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    basket: basketSlice,
    coupon: couponSlice,
  },
});
