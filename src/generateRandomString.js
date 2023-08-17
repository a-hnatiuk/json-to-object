import { generateStringByRegExp } from './helpers/generateStringByRegExp.js';

export const generateRandomString = (json) => {
  if (json.format) {
    if (json.format === 'regex' && json.pattern) {
      let string = json.pattern.replaceAll('\\/', '/')
        .replaceAll(/(\\)+/g, '')
        .replaceAll(/\+/g, '');

      return string.replace(/(\[(\S-\S)+\])/g, (match) => {
        return generateStringByRegExp(`${match}`);
      });
    }
  }

  return generateStringByRegExp('[0-9a-zA-Z]');
}