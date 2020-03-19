import { createSelector } from "reselect";
import { fromJS } from "immutable";
import { requirementsMet } from "../../utils/functions";

const getState = state => state;

export const getCurrentTab = createSelector(getState, state =>
  state.get("currentTab")
);

export const getChoices = createSelector(getState, state =>
  state.get("choices")
);

export const getDialogState = createSelector(getState, state =>
  state.get("dialogOpen")
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

export const getDesummoningSection = createSelector(getSections, sections =>
  sections.get("desummoning")
);

export const getPosseSection = createSelector(getSections, sections =>
  sections.get("posse")
);

export const getIndependenceSection = createSelector(getSections, sections =>
  sections.get("independence")
);

export const getPerksSection = createSelector(getSections, sections =>
  sections.get("perks")
);

export const getDrawbacksSection = createSelector(getSections, sections =>
  sections.get("drawbacks")
);

export const getDecisions = createSelector(getState, state =>
  state.get("decisions")
);

export const getSummoningDecision = createSelector(getDecisions, decisions =>
  decisions.get("summoning")
);

export const getDesummoningDecision = createSelector(getDecisions, decisions =>
  decisions.get("desummoning")
);

export const getPosseDecision = createSelector(getDecisions, decisions =>
  decisions.get("posse")
);

export const getIndependenceDecision = createSelector(getDecisions, decisions =>
  decisions.get("independence")
);

export const getPerksDecisions = createSelector(getDecisions, decisions =>
  decisions.get("perks")
);

export const getDrawbacksDecisions = createSelector(getDecisions, decisions =>
  decisions.get("drawbacks")
);

export const getSummoningComponentDecision = createSelector(
  [getSummoningDecision, getDesummoningDecision],
  (decisions, otherDecisions) =>
    fromJS({
      sectionDecisions: decisions,
      otherDecisions
    })
);

export const getDesummoningComponentDecisions = createSelector(
  [getDesummoningDecision, getSummoningDecision],
  (desummoning, summoning) =>
    fromJS({
      sectionDecisions: desummoning.filter(value =>
        requirementsMet(value.get("requirements"), summoning)
      ),
      otherDecisions: summoning
    })
);

export const getPosseComponentDecisions = createSelector(
  [getPosseDecision, getSummoningDecision],
  (posse, summoning) =>
    fromJS({
      sectionDecisions: posse.filter(value =>
        requirementsMet(value.get("requirements"), summoning)
      ),
      otherDecisions: summoning
    })
);

export const getIndependeceComponentDecision = createSelector(
  [getIndependenceDecision],
  decisions =>
    fromJS({
      sectionDecisions: decisions,
      otherDecisions: []
    })
);

export const getPerksComponentDecision = createSelector(
  [getPerksDecisions],
  decisions => {
    return fromJS({
      sectionDecisions: decisions,
      otherDecisions: decisions
    });
  }
);

export const getDrawbacksComponentDecision = createSelector(
  [getDrawbacksDecisions, getPerksDecisions, getDesummoningDecision],
  (decisions, perksDecisions, desummoningDecisions) => {
    return fromJS({
      sectionDecisions: decisions,
      otherDecisions: [...perksDecisions, ...desummoningDecisions],
    });
  }
);

export const getPoints = createSelector(getState, state => state.get("points"));

export const getCosts = createSelector(
  [
    getSummoningDecision,
    getDesummoningDecision,
    getPosseDecision,
    getIndependenceDecision,
    getPerksDecisions,
    getDrawbacksDecisions,
  ],
  (summoning, desummoning, posse, independence, perks, drawbacks) => {
    const choices = [
      ...summoning,
      ...desummoning,
      ...posse,
      ...independence,
      ...perks,
      ...drawbacks
    ];
    return choices.reduce((acc, value) => acc + value.get("cost"), 0);
  }
);

export const getCurrentPoints = createSelector(
  [getPoints, getCosts],
  (points, cost) => points - cost
);
