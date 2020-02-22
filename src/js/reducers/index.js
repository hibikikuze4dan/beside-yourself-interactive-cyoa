import { fromJS } from "immutable";
import {
  UPDATE_TAB,
  UPDATE_SUMMONING,
  UPDATE_DESUMMONING,
  UPDATE_POSSE
} from "../constants/action-types";
import text from "../../choices/script.json";

const defaultDecisions = {
  summoning: [],
  desummoning: [],
  posse: [],
  independence: [],
  perks: [],
  drawbacks: []
};

const initialState = fromJS({
  choices: text,
  currentTab: 0,
  decisions: defaultDecisions,
  points: 50
});

function rootReducer(state = initialState, action) {
  const { type } = action;
  if (type === UPDATE_TAB) {
    return state.set("currentTab", action.payload);
  } else if (type === UPDATE_SUMMONING) {
    const decisions = state.get("decisions");
    return state.set(
      "decisions",
      decisions.set("summoning", action.payload.decisions)
    );
  } else if (type === UPDATE_DESUMMONING) {
    const decisions = state.get("decisions");
    return state.set(
      "decisions",
      decisions.set("desummoning", action.payload.decisions)
    );
  } else if (type === UPDATE_POSSE) {
    const decisions = state.get("decisions");
    return state.set(
      "decisions",
      decisions.set("posse", action.payload.decisions)
    );
  }
  return state;
}

export default rootReducer;
