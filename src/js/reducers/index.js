import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data,
    location: window.location.href.split("/").pop() ?? "",
    saveTitle: "",
    modals: {
      breakdown: false,
      save: false,
    },
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
    updateExtraChoice: (state, action) => {
      const { title, cost } = action.payload;
      const location = state.location;
      const choices = state[location];
      const differentCost = choices.map((choice) => choice.cost).includes(cost);
      const exists = choices.map((choice) => choice.title).includes(title);
      console.log(cost, exists, differentCost);
      state[location] =
        !exists || !differentCost
          ? [
              ...choices.filter((choice) => choice.title !== title),
              action.payload,
            ]
          : [...choices.filter((choice) => choice.title !== title)];
    },
    toggleModal: (state, action) => {
      state.modals = {
        ...state.modals,
        [action.payload]: !state.modals[action.payload],
      };
    },
    loadSave: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
    updateSaveTitle: (state, action) => {
      state.saveTitle = action.payload;
    },
  },
});

export const {
  setLocation,
  updateMultiChoice,
  updateSingleChoice,
  updateExtraChoice,
  toggleModal,
  loadSave,
  updateSaveTitle,
} = dataSlice.actions;

export default dataSlice.reducer;
