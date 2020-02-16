import { createSelector } from "reselect";

const getState = state => state;

export const getCurrentTab = createSelector(getState, state =>
  state.get("currentTab")
);

export const getChoices = createSelector(getState, state =>
  state.get("choices")
);

export const getSections = createSelector(getChoices, choices =>
  choices.get("sections")
);

export const getSectionTitles = createSelector(getSections, sections =>
  sections.reduce((acc, section) => {
    acc.push(section.get("title"));
    return acc;
  }, [])
);

const getSectionKeys = createSelector(getSections, sections => [
  ...sections.keys()
]);

export const getSectionLinks = createSelector(
  [getSectionTitles, getSectionKeys],
  (titles, keys) =>
    Array.from(new Array(titles.length), (value, index) => ({
      label: titles[index],
      link: keys[index]
    }))
);

export const getSummoningSection = createSelector(getSections, sections =>
  sections.get("summoning")
);

export const getDecisions = createSelector(getState, state =>
  state.get("decisions")
);

export const getSummoningDecision = createSelector(getDecisions, decisions =>
  decisions.get("summoning")
);

export const getPoints = createSelector(getState, state => state.get("points"));
