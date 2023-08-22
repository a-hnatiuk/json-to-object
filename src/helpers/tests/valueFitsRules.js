const getSetOfRulesFromAnyOf = (rules) => {
  return rules.anyOf.map(({ type }) => {
    if (type === 'integer') {
      return 'number';
    } else if (type === null || type === 'null') {
      return null;
    }

    return type;
  })
}

export const valueFitsRules = (value, rules) => {
  if (typeof rules === 'object' && rules.hasOwnProperty('anyOf')) {
    const setOfRules = getSetOfRulesFromAnyOf(rules);

    if (value === null && 'object' === typeof value) {
      return setOfRules.includes(null)
    }
    return setOfRules.includes(typeof value)
  } else {
    const { type } = rules;

    if (type === 'integer') {
      return 'number' === typeof value;
    } else if (type === null) {
      return null === value && 'object' === typeof value;
    } else if (type === 'array') {
      return Array.isArray(value)
    }

    return type === typeof value;
  }

}