import { parseObject } from './parseObject.js';
import { jsonString } from '../../public/input.js';

import { findPropertyInObject } from '../helpers/tests/findPropertyInObject.js';
import { isJSON } from "../helpers/isJson.js";
import {valueFitsRules} from "../helpers/tests/valueFitsRules.js";


describe('parseObject', () => {
  it('should have required fields', () => {
    const requiredFields = JSON.parse(jsonString).required;
    const result = parseObject(JSON.parse(jsonString));

    requiredFields.forEach(field => {
      expect(result).toHaveProperty(field);
    });
    expect(Object.keys(result).length).toEqual(requiredFields.length);
  });

  it('should have correct types', () => {
    const inputData = isJSON(jsonString) ? JSON.parse(jsonString) : jsonString;
    const result = parseObject(JSON.parse(jsonString));

    for (const key in result) {
      const receivedType = findPropertyInObject(inputData, key);
      const valueHasCorrectType = valueFitsRules(result[key], receivedType);

      expect(valueHasCorrectType).toBeTruthy();
    }
  });
});
