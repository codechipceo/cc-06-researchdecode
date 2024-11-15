import { FEATURE_ENUM_OBJ, FEATURE_ENUM_LIST } from './fetaureConstants'


export const featureFlag = (featureName) => {
    const activeEnviroment = import.meta.env.VITE_NODE_ENV;
    return FEATURE_ENUM_OBJ[featureName]?.[activeEnviroment] ?? false;
}

export const features = FEATURE_ENUM_LIST