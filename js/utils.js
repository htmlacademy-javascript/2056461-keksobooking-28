const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomStringFromArray = (array) => array.slice(0, getRandomInteger(1, array.length)).join(', ');

const getRandomLengthArray = (array) => array.slice(0, getRandomInteger(1, array.length));

const getCoordinates = (length, integer, minRange, maxRange) => Number(getRandomInteger(minRange, maxRange).toString().padStart(length, integer));

export {getRandomInteger, getRandomArrayElement, getRandomStringFromArray, getRandomLengthArray, getCoordinates};
