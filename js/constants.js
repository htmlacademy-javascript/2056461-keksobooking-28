const SERVER_LINK = {
  get: 'https://28.javascript.pages.academy/keksobooking/data',
  post: 'https://28.javascript.pages.academy/keksobooking',
};

const MAX_PINS = 10;
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const ZOOM = 12;

const TIMER = 500;
const ALERT_SHOW_TIME = 3000;

const PROPERTY_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const PRICE_RANGE = {
  low: 10000,
  high: 50000,
};

const TITLE_LENGTH = {
  min: 30,
  max: 100,
};

const PROPERTY_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
  max: 100000,
};

const CITY_CENTER = {
  lat: 35.68951,
  lng: 139.69211,
};

const ADS_PIN_SIZE = 40;

const CHOOSE_ADDRESS_PIN = 52;

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {
  SERVER_LINK,
  PROPERTY_TYPE,
  PRICE_RANGE,
  MAX_PINS,
  TITLE_LENGTH,
  PROPERTY_PRICE,
  CITY_CENTER,
  TIMER,
  ADS_PIN_SIZE,
  CHOOSE_ADDRESS_PIN,
  ALERT_SHOW_TIME,
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  FILE_TYPES
};
