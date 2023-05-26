import {PROPERTY_PRICE} from './constants.js';

const sliderElement = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: PROPERTY_PRICE.max,
  },
  start: PROPERTY_PRICE.house,
  set: 5000,
  step: 1,
  connect: 'lower',
});

let inputTimeout;

sliderElement.noUiSlider.on('slide', () => {
  priceField.value = sliderElement.noUiSlider.get();
  clearTimeout(inputTimeout);
  inputTimeout = setTimeout(() => {
    priceField.dispatchEvent(new Event('input'));
  }, 200);
});

priceField.addEventListener('input', (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
});
