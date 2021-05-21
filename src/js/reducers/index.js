import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data,
    location: window.location.href.split("/").pop() ?? "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = dataSlice.actions;

export default dataSlice.reducer;
