export const serialize =(obj, parentKey = "", separator = "_") => {
  let flatObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const fullKey = parentKey ? `${parentKey}${separator}${key}` : key;
      const value = obj[key];
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flatObject, serialize(value, fullKey, separator));
      } else {
        flatObject[fullKey] = value;
      }
    }
  }

  return flatObject;
}
