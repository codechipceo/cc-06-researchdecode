export const FEATURE_ENUM_LIST = {
  NEW_DASHBOARD: "newDashboard",
  AI_RECOMMENDATIONS: "AIRecommendations",
  BETA_FEATURE: "betaFeature",
};

export const FEATURE_ENUM_OBJ = Object.freeze({
  [FEATURE_ENUM_LIST.NEW_DASHBOARD]: {
    local: true,
    test: true,
    prod: false,
  },
  [FEATURE_ENUM_LIST.AI_RECOMMENDATIONS]: {
    local: true,
    test: false,
    prod: true,
  },
  [FEATURE_ENUM_LIST.BETA_FEATURE]: {
    local: false,
    test: true,
    prod: false,
  },
});
