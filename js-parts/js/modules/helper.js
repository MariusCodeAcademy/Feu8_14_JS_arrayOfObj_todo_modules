console.log('helper.js file was loaded');

/**
 * Padaro pirma raide didziaja
 * @param {string} text
 */
export const makeFirstCapital = function (text) {
  const firstLetter = text.charAt(0);
  const restOfTheWord = text.slice(1);

  const rezult = firstLetter.toUpperCase() + restOfTheWord;
  console.log('rezult ===', rezult);
  return rezult;
};
