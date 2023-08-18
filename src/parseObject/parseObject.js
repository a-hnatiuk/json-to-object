import { generateRandomString } from '../generateRandomString.js';
import { generateRandomInteger } from '../generateRandomInteger.js';
import { generateRandomBoolean } from '../generateRandomBoolean.js';

export const parseObject = (chunk) => {
  if (chunk.hasOwnProperty('definitions')) {
    if (parseObject.definitions) {
      parseObject.definitions.push(...Object.values(chunk.definitions))
    } else {
      parseObject.definitions = [...Object.values(chunk.definitions)]
    }
  }

  if (!chunk) {
    return {}
  }

  if (chunk.hasOwnProperty('enum')) {
    return Object.fromEntries(chunk.enum.map(key => [key, key]))

  }

  if (chunk.hasOwnProperty('anyOf')) {
    const randomIndex = Math.floor(Math.random() * chunk.anyOf.length);

    return parseObject(chunk.anyOf[randomIndex])
  }

  if (chunk.hasOwnProperty('type')) {
    switch (chunk.type.toLowerCase()) {
      case 'object': {
        if (chunk.required && chunk.properties) {
          return Object.fromEntries(chunk.required.map(key => [key, ((propName, properties) => {
            if (properties.hasOwnProperty(propName)) {
              return parseObject(properties[propName])
            }
          })(key, chunk.properties)]))
        } else {
          return {}
        }
      }
      case 'string': {
        return generateRandomString(chunk);
      }
      case 'integer': {
        return generateRandomInteger(chunk.minimum, chunk.maximum);
      }
      case 'boolean': {
        return generateRandomBoolean();
      }
      case 'array': {
        if (chunk.hasOwnProperty('items') && chunk.items.hasOwnProperty('$ref')) {
          const refItems = parseObject.definitions.find((item) => {
            return item['$id'] === chunk.items['$ref']
          })
          if (refItems) {
            return [parseObject(refItems)];
          } else {
            return chunk.default || []
          }
        } else {
          return chunk.default || []
        }
      }
      case 'null': {
        return null;
      }
      default: {
        return {}
      }
    }
  }
}