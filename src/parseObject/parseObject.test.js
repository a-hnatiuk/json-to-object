import { parseObject } from './parseObject.js';
import { jsonString } from '../../public/input.js';


describe('parseObject', () => {
  it('should have required fields', () => {
    const requiredFields = JSON.parse(jsonString).required;
    const result = parseObject(JSON.parse(jsonString));

    requiredFields.forEach(field => {
      expect(result).toHaveProperty(field);
    });
  });
});