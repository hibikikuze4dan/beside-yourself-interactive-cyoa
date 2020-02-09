import { ADD_ARTICLE, UPDATE_TAB } from "../constants/action-types";

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}

export const updateTab = payload => ({ type: UPDATE_TAB, payload });
