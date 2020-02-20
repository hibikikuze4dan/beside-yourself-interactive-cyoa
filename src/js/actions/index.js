import {
  ADD_ARTICLE,
  UPDATE_SUMMONING,
  UPDATE_DESUMMONING,
  UPDATE_TAB
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}

export const updateTab = payload => ({ type: UPDATE_TAB, payload });

export const updateSummoning = decisions => ({
  type: UPDATE_SUMMONING,
  payload: {
    decisions,
    points: 50 - decisions.reduce((acc, choice) => choice.get("cost") + acc, 0)
  }
});

export const updateDesummoning = decisions => ({
  type: UPDATE_DESUMMONING,
  payload: {
    decisions,
    points: 50 - decisions.reduce((acc, choice) => choice.get("cost") + acc, 0)
  }
});
