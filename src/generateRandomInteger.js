const DEFAULT_MIN = 1;
const DEFAULT_MAX = 1000000;

export const generateRandomInteger = (min = DEFAULT_MIN, max = DEFAULT_MAX) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}