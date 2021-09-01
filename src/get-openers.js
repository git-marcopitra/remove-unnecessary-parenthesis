/**
 * @description PT: obter posições das aberturas
 * @param {string[]} text 
 * @returns {number[]}
 */
 const getOpeners = (text) => text.reduce((acc, char, index) => {
   if (char == '(') return acc.concat(index);
   return acc;
 }, []);
  
  
module.exports = {
  getOpeners,
}
