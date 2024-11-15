function findInvalidKeys(obj, parentKey = "") {
  let invalidKeys = [];

  if (obj === null || obj === undefined) return [parentKey]; 

  if (typeof obj === "object" && !Array.isArray(obj)) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (value === null || value === undefined) {
          invalidKeys.push(fullKey);
        } else if (typeof value === "object") {
          invalidKeys = invalidKeys.concat(findInvalidKeys(value, fullKey));
        }
      }
    }
    }
  return invalidKeys;
}

export const isPayloadValid = (obj) => {
    const arrOfKeys = findInvalidKeys(obj)
    if (arrOfKeys.length) {
        const concatKeys = `Keys: ${arrOfKeys.join(",")} is/are either undefined or null`
        return [false, concatKeys];
    } else return [true, null]
}
