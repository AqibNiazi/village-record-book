import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false, // Start with the sidebar closed
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
