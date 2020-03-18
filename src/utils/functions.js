import { Map } from "immutable";

export const requirementsMet = (requirements, decisions) => {
  const jsRequirements = Map.isMap(requirements)
    ? requirements.toJS()
    : requirements;
  const { include, exclude } = jsRequirements;
  const decisionNames = decisions.map(value => value.get("title"));
  const isIncluded = include
    ? include.every(string => decisionNames.includes(string))
    : true;
  const isExcluded = exclude
    ? exclude.every(string => !decisionNames.includes(string))
    : true;
  return isIncluded && isExcluded;
};

export const getRequiresString = requirements => {
  const jsRequirements = Map.isMap(requirements)
    ? requirements.toJS()
    : requirements;
  const { include } = jsRequirements;
  return `Requires ${include[0]}`;
};
