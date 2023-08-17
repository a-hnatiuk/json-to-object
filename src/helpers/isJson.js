export const isJSON = (arg) => {
  try {
    JSON.parse(arg);
    return true;
  } catch (error) {
    return false;
  }
}