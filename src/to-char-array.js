/**
 * @description PT: converter string para array de caracteres
 * @param {string} text 
 * @param {string[]} charArray 
 * @returns {string[]}
 */
 const toCharArray = (text, charArray = []) => {
  if (text.length == 0) return charArray;
  return toCharArray(text.slice(1), charArray.concat(text[0]));
};

module.exports = {
  toCharArray,
};
