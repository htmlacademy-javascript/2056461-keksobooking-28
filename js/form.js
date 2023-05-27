import {isValid} from './validation.js';
import {SERVER_LINK} from './constants.js';
import {postData} from './api.js';
import {showModal, successModalTemplate, errorModalTemplate} from './pop-ups.js';
import {blockSubmitButton, unblockSubmitButton} from './utils.js';
import {resetFilters} from './filter.js';
import {resetSlider} from './slider.js';

const adsForm = document.querySelector('.ad-form');
const timeSet = adsForm.querySelector('.ad-form__element--time');
const submitButton = adsForm.querySelector('.ad-form__submit');
const adsPhoto = adsForm.querySelector('.ad-form__photo');
const avatarPhoto = adsForm.querySelector('.ad-form-header__preview img');
const formResetButton = adsForm.querySelector('.ad-form__reset');

const formReset = (form) => {
  form.reset();
  adsPhoto.innerHTML = '';
  avatarPhoto.src = 'img/muffin-grey.svg';
};

timeSet.addEventListener('change', (evt) => {
  const timeSlots = timeSet.querySelectorAll(`option[value='${evt.target.value}']`);
  timeSlots.forEach((item) => {
    item.selected = true;
  });
});

adsForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton(submitButton);
    postData(new FormData(evt.target), SERVER_LINK.post)
      .then((response) => {
        if (response.ok) {
          showModal(successModalTemplate);
          formReset(adsForm);
          resetFilters();
          resetSlider();
        } else {
          showModal(errorModalTemplate);
        }
      })
      .catch(() => {
        showModal(errorModalTemplate);
      })
      .finally(() => {
        unblockSubmitButton(submitButton);
      });
  }
});

formResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  formReset(adsForm);
  resetFilters();
  resetSlider();
});
