import { fromJS } from "immutable";
import { UPDATE_TAB } from "../constants/action-types";
import text from "../../choices/script.json";

const initialState = fromJS({
  choices: text,
  currentTab: 0,
  decisions: [],
  points: 50
});

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_TAB) {
    return state.set("currentTab", action.payload);
  }
  return state;
}

export default rootReducer;
