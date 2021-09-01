const { getOpeners } = require("./get-openers");
const { toCharArray } = require("./to-char-array");

/**
 * @description PT: função para remover todos os parênteses desnecessários
 * @param {string} text
 */
const removeParentheses = (text) => {
  const textArray = toCharArray(text);
  const openers = getOpeners(textArray);
  const closers = [];

  const restOpeners = openers.reverse().reduce((acc, pos) => {
    const validCloserIndex = textArray.findIndex(
      (closer, closerIndex) =>
        closer === ")" && closerIndex > pos && !closers.includes(closerIndex)
    );

    if (validCloserIndex !== -1) {
      closers.push(validCloserIndex);
      return acc;
    }
    return acc.concat(pos);
  }, []);

  const restClosers = textArray.reduce((acc, closer, closerIndex) => {
    if (closer === ")" && !closers.includes(closerIndex))
      return acc.concat(closerIndex);
    return acc;
  }, []);

  return textArray.reduce((acc, char, index) => {
    if (restOpeners.includes(index) || restClosers.includes(index)) return acc;
    return acc.concat(char);
  }, []).join('');
};

module.exports = removeParentheses;
