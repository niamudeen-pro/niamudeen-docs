import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './features/sidebarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice
  },
})