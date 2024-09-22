import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpened = !state.isOpened;
    },
    closeSidebar: (state) => {
      state.isOpened = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
