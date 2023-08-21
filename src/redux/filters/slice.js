import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: ""
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter (state, action) {
      state.filter = action.payload;
    }
  }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;