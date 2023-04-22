import {PROPERTY_TITLES, PROPERTY_TYPES, DEPARTURE_ARRIVAL_TIMES, PROPERTY_FEATURES, PROPERTY_DESCRIPTIONS, PROPERTY_PHOTOS} from './mock.js';
import {getRandomInteger, getRandomArrayElement, getRandomStringFromArray, getRandomLengthArray, getCoordinates} from './utils.js';

const MIN_PRICE = 1500;
const MAX_PRICE = 10000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUESTS = 1;
const MAX_GUESTS = 30;
const LAT_LENGTH = 8;
const LAT = '35.';
const LAT_MIN = 65000;
const LAT_MAX = 70000;
const LNG_LENGTH = 9;
const LNG = '139.';
const LNG_MIN = 70000;
const LNG_MAX = 80000;
const OFFERS_QUANTITY = 10;

const getLat = () => {
  let latNum = 0;
  return function () {
    latNum = getCoordinates(LAT_LENGTH, LAT, LAT_MIN, LAT_MAX);
    return latNum;
  };
};

const getLng = () => {
  let lngNum = 0;
  return function() {
    lngNum = getCoordinates(LNG_LENGTH, LNG, LNG_MIN, LNG_MAX);
    return lngNum;
  };
};

const lat = getLat();

const lng = getLng();

const createPropertyDescription = (index) => ({
  author: {
    avatar: `img/avatars/user${index.toString().padStart(2, '0')}.png`
  },
  offer: {
    title: getRandomArrayElement(PROPERTY_TITLES),
    address: {
      lat: lat(),
      lng: lng()
    },
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(PROPERTY_TYPES),
    rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
    guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(DEPARTURE_ARRIVAL_TIMES),
    checkout: getRandomArrayElement(DEPARTURE_ARRIVAL_TIMES),
    features: getRandomStringFromArray(PROPERTY_FEATURES),
    description: getRandomArrayElement(PROPERTY_DESCRIPTIONS),
    photos: getRandomLengthArray(PROPERTY_PHOTOS)
  },
  location: {
    lat: lat(),
    lng: lng()
  }
});

const createOffersArray = () => Array.from({length: OFFERS_QUANTITY}, (_, photoIndex) => createPropertyDescription(photoIndex + 1));

export {createOffersArray};
