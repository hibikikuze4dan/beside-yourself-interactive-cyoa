import { createSelector } from "reselect";
import { fromJS } from "immutable";
import { omit, sum } from "lodash-es";

const getState = (state) => state;

export const getLocation = createSelector(
  getState,
  (state) => `${state.location}`
);

export const getData = createSelector(getState, (state) => ({ ...state.data }));

export const getRoutes = createSelector(getData, (data) => {
  return Object.keys(data);
});

export const getSaveTitle = createSelector(
  getState,
  (state) => `${state.saveTitle}`
);

export const getModals = createSelector(getState, (state) => state.modals);

export const isModalOpen = createSelector(getModals, (modals) => (modalName) =>
  modals[modalName]
);

export const getArrowRoutes = createSelector(
  getLocation,
  getRoutes,
  (location, routes) => {
    const currentIndex = routes.indexOf(location);
    return [
      currentIndex - 1 < 0
        ? routes[routes.length - 1]
        : routes[currentIndex - 1],
      currentIndex + 1 === routes.length ? routes[0] : routes[currentIndex + 1],
    ];
  }
);

export const getPotentialRedirectLocation = createSelector(
  getRoutes,
  getLocation,
  (routes, location) => {
    return routes.includes(location) ? location : "opening";
  }
);

export const getLocationTitle = createSelector(
  getLocation,
  getData,
  (location, data) => {
    return `${data[location]?.title}`;
  }
);

export const getLocationDescription = createSelector(
  getLocation,
  getData,
  (location, data) => {
    const description = data[location]?.description;
    const isArray = Array.isArray(description);
    return isArray ? description.join("") : `${description}`;
  }
);

export const getLocationChoices = createSelector(
  getLocation,
  getData,
  (location, data) => data[location]?.choices ?? {}
);

export const getLocationChoicesArray = createSelector(
  getLocationChoices,
  (choices) => Object.values(choices)
);

export const getLocationMulti = createSelector(
  getLocation,
  getData,
  (location, data) => !!data[location]?.multi
);

export const getSelectedChoicesObject = createSelector(getState, (state) =>
  omit(state, "data", "location", "modals", "saveTitle")
);

export const getDataForSaving = createSelector(getState, (state) =>
  omit(state, "data", "location", "modals")
);

export const getSelectedChoicesForBreakdown = createSelector(
  getSelectedChoicesObject,
  getData,
  (choices, data) =>
    Object.entries(choices).map(([key, arr]) => ({
      title: data[key].title,
      choices: arr.map((c) => c.title),
    }))
);

export const getSelectedChoicesTitles = createSelector(
  getSelectedChoicesObject,
  (choices) =>
    Object.values(choices).reduce((acc, choicesArray) => {
      choicesArray.forEach((choice) => acc.push(choice.title));
      return acc;
    }, [])
);

export const getSelectedChoicesCosts = createSelector(
  getSelectedChoicesObject,
  (choices) =>
    Object.values(choices).reduce((acc, choicesArray) => {
      choicesArray.forEach((choice) => acc.push(choice.cost));
      return acc;
    }, [])
);

export const getCurrentPoints = createSelector(
  getSelectedChoicesCosts,
  (costs) => 50 - sum(costs)
);
export const getSelectedChoicesForLocation = createSelector(
  getLocation,
  getState,
  (location, state) => [...state[location]]
);

export const getSelectedChoicesForLocationTitles = createSelector(
  getSelectedChoicesForLocation,
  (choices) => [...choices.map((choice) => choice.title)]
);

export const isChoicePicked = createSelector(
  getSelectedChoicesForLocationTitles,
  (titles) => (title) => titles.includes(title)
);

export const areRequirementsMet = createSelector(
  getSelectedChoicesTitles,
  (titles) => (requirements) => {
    const include = requirements?.include;
    const exclude = requirements?.exclude;
    if (!include && !exclude) return true;
    const includeMet = include
      ? include.every((inc) => titles.includes(inc))
      : false;
    const excludeMet = exclude
      ? exclude.every((ex) => !titles.includes(ex))
      : false;
    return includeMet || excludeMet;
  }
);
