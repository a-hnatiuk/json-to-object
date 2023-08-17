export const generateStringByRegExp = (rule) => {
  const fullCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charset = fullCharset.match(new RegExp(`${rule}`, 'g')).join('');
  let randomString = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
  }

  return randomString;
}