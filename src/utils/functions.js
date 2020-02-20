export const requirementsMet = (requirements, decisions) => {
  const { include, exclude } = requirements;
  const decisionNames = decisions.map(value => value.get("title"));
  const isIncluded = include
    ? include.every(string => decisionNames.includes(string))
    : true;
  const isExcluded = exclude
    ? exclude.every(string => !decisionNames.includes(string))
    : true;
  return isIncluded && isExcluded;
};
