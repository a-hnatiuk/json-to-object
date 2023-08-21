export const findPropertyInObject = (obj, targetPropertyName) => {
  for (const key in obj) {
    if (key === targetPropertyName) {
      return obj[key];
    } else if (typeof obj[key] === 'object') {
      const foundProperty = findPropertyInObject(obj[key], targetPropertyName);
      if (foundProperty !== undefined) {
        return foundProperty;
      }
    }
  }
  return undefined;
};
