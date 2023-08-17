import { isJSON } from './src/helpers/isJson.js';
import { parseObject } from "./src/parseObject.js";

import jsonData from './public/input.json' assert {type: 'json'};
import { jsonString } from './public/input.js';

const parseJson = (json) => parseObject(isJSON(json) ? JSON.parse(json) : json);

console.log('=========== Json file ===========');
console.log(parseJson(jsonData));

console.log('=========== Json string ===========');
console.log(parseJson(jsonString));