import { configureStore } from '@reduxjs/toolkit'
import cartSlices from './slices/cartSlices'
import restaruantSlice from './slices/restaruantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlices,
    restaurant: restaruantSlice
  },
})