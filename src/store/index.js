import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './slice.js'

export const store = configureStore({
  reducer: mainSlice,
})