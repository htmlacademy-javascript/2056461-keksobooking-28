import {renderMarkers, resetMap} from './map.js';
import {setActiveFilter} from './page-states.js';
import {PRICE_RANGE, MAX_PINS, TIMER} from './constants.js';
import {debounce} from './utils.js';

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = mapFilters.querySelectorAll('.map__checkbox');

const points = [];
const model = {
  features: [],
};

const getFeatures = () => Array.from(mapFeatures)
  .reduce((acc, item) => item.checked ? [...acc, item.value] : acc, []);

const changeModel = (filter, value) => {
  if (filter === 'features') {
    model.features.length = 0;
    model.features.push(...getFeatures());
  } else {
    model[filter] = value;
  }
};

const getPriceFiltered = (filter, price) => {
  switch (filter) {
    case 'any':
      return true;
    case 'middle':
      return price >= PRICE_RANGE.low && price <= PRICE_RANGE.high;
    case 'low':
      return price < PRICE_RANGE.low;
    case 'high':
      return price > PRICE_RANGE.high;
    default:
      return false;
  }
};

const getFilteredPoints = (filter, data) => {
  switch (filter) {
    case 'housing-type':
      return data.slice().filter((item) => model[filter] !== 'any' ? item.offer.type === model[filter] : item);
    case 'housing-price':
      return data.slice().filter((item) => model[filter] !== 'any' ? getPriceFiltered(model[filter], item.offer.price) : item);
    case 'housing-rooms':
      return data.slice().filter((item) => model[filter] !== 'any' ? item.offer.rooms === +model[filter] : item);
    case 'housing-guests':
      return data.slice().filter((item) => model[filter] !== 'any' ? item.offer.guests === +model[filter] : item);
    case 'features':
      return model.features.length
        ? model.features.reduce((acc, feature) => acc.filter((item) => item.offer.features?.includes(feature)), data)
        : data;
  }
};

const filterPoints = () => Object.keys(model)
  .reduce((acc, filter) => getFilteredPoints(filter, acc), points.slice());

mapFilters.addEventListener('change', debounce((evt) => {
  changeModel(evt.target.name, evt.target.value);
  renderMarkers(filterPoints().slice(0, MAX_PINS));
}, TIMER));

const setFilters = (data) => {
  points.push(...data.slice());
  renderMarkers(points.slice(0, MAX_PINS));
  setActiveFilter();
};

const resetFilters = () => {
  mapFilters.reset();
  setFilters(points);
  resetMap();
};

export {
  setFilters,
  resetFilters,
};
