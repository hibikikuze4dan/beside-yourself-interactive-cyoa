import {
  UPDATE_SUMMONING,
  UPDATE_DESUMMONING,
  UPDATE_POSSE,
  UPDATE_TAB,
  UPDATE_INDEPENDENCE,
  UPDATE_PERKS
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}

export const updateTab = payload => ({ type: UPDATE_TAB, payload });

export const updateSummoning = decisions => ({
  type: UPDATE_SUMMONING,
  payload: {
    decisions
  }
});

export const updateDesummoning = decisions => ({
  type: UPDATE_DESUMMONING,
  payload: {
    decisions
  }
});

export const updatePosse = decisions => ({
  type: UPDATE_POSSE,
  payload: {
    decisions
  }
});

export const updateIndependence = decisions => ({
  type: UPDATE_INDEPENDENCE,
  payload: {
    decisions
  }
});

export const updatePerks = decisions => ({
  type: UPDATE_PERKS,
  payload: {
    decisions
  }
});
