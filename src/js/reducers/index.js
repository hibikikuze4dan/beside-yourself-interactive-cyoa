import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data,
    location: window.location.href.split("/").pop() ?? "",
    summoning: [],
    desummoning: [],
    posse: [],
    independence: [],
    perks: [],
    drawbacks: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    updateSingleChoice: (state, action) => {
      state[state.location] = [action.payload];
    },
    updateMultiChoice: (state, action) => {
      const { title } = action.payload;
      const location = state.location;
      const choices = state[location];
      const exists = choices.map((choice) => choice.title).includes(title);
      state[location] = exists
        ? [...choices.filter((choice) => choice.title !== title)]
        : [...choices, action.payload];
    },
  },
});

export const {
  setLocation,
  updateMultiChoice,
  updateSingleChoice,
} = dataSlice.actions;

export default dataSlice.reducer;
