export const FEATURE_ENUM_LIST = {
  NAVBAR: "NAVBAR",
  RESEARCH_PAPERS:'RESEARCH_PAPERS',
  COURSES:'COURSES',
  EXPERTS: "EXPERTS",
  COLLABORATION: 'COLLABORATION',
  WEBINAR: 'WEBINAR',
};

export const FEATURE_ENUM_OBJ = Object.freeze({
  [FEATURE_ENUM_LIST.NAVBAR]: {
    local: true,
    test: false,
    prod: false,
  },
  [FEATURE_ENUM_LIST.RESEARCH_PAPERS]: {
    local: true,
    test: false,
    prod: false,
  },
  [FEATURE_ENUM_LIST.EXPERTS]: {
    local: true,
    test: false,
    prod: false,
  },
  [FEATURE_ENUM_LIST.COURSES]: {
    local: true,
    test: false,
    prod: false,
  },
  [FEATURE_ENUM_LIST.COLLABORATION]: {
    local: true,
    test: false,
    prod: false,
  },
  [FEATURE_ENUM_LIST.WEBINAR]: {
    local: true,
    test: false,
    prod: false,
  },
});
