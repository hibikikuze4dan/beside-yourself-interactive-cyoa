import { createSelector } from "reselect";
import { fromJS } from "immutable";

const getState = (state) => state;

export const getLocation = createSelector(
  getState,
  (state) => `${state.location}`
);

export const getData = createSelector(getState, (state) => ({ ...state.data }));

export const getRoutes = createSelector(getData, (data) => {
  return Object.keys(data);
});

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
