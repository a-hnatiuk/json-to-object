export const valueFitsRules = (value, rules) => {
  if (typeof rules === 'object' && rules.hasOwnProperty('anyOf')) {
    const arr = rules.anyOf.map(({type}) => {
      if (type === 'integer') {
        return 'number';
      } else if (type === null || type === 'null') {
        return null;
      } else {
        return type;
      }
    })
    if (value === null && 'object' === typeof value) {
      return arr.includes(null)
    }
    return arr.includes(typeof value)
  } else {
    if (rules.type === 'integer') {
      return 'number' === typeof value;
    } else if (rules.type === null) {
      return null === value && 'object' === typeof value;
    } else if (rules.type === 'array') {
      return Array.isArray(value)
    } else {
      return rules.type === typeof value;
    }
  }

}