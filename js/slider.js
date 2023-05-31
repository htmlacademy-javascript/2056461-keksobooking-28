import {
  PROPERTY_PRICE,
  SLIDER_START_POINT,
  SLIDER_EVENT_TIMER,
  SLIDER_STEP} from './constants.js';

const sliderElement = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: PROPERTY_PRICE.max,
  },
  start: PROPERTY_PRICE.house,
  set: SLIDER_START_POINT,
  step: SLIDER_STEP,
  connect: 'lower',
});

let inputTimeout;

sliderElement.noUiSlider.on('slide', () => {
  priceField.value = sliderElement.noUiSlider.get();
  clearTimeout(inputTimeout);
  inputTimeout = setTimeout(() => {
    priceField.dispatchEvent(new Event('input'));
  }, SLIDER_EVENT_TIMER);
});

priceField.addEventListener('input', (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
});

const resetSlider = () => {
  sliderElement.noUiSlider.updateOptions({start: SLIDER_START_POINT});
};

export {resetSlider};
