export const stringExistsInArray = (array, searchString) => {
  return array.some(item => item.includes(searchString));
}