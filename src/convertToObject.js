'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const sourceArray = sourceString.split(';');

  const newArray = sourceArray
    .filter((element) => element.includes(':'))
    .map((element) => {
      const partsArray = element.split(':');
      const key = partsArray[0].trim();
      const value = partsArray[1].trim();

      return [key, value];
    });

  return newArray.reduce((stylesObject, currentPair) => {
    const [key, value] = currentPair;

    stylesObject[key] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
