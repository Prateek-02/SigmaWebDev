import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//steps:
// 1. Create store
// 2. Wrap app component under provider
// 3. Create slice
// 4. Register reducer in store