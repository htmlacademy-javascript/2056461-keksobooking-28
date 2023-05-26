const adsForm = document.querySelector('.ad-form');
const formElements = adsForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const filterElements = mapFilter.querySelectorAll('select, fieldset');

const setActiveFilter = () => {
  mapFilter.classList.remove('map__filters--disabled');
  filterElements.forEach((element) => {
    element.disabled = false;
  });
};

const setActiveForm = () => {
  adsForm.classList.remove('ad-form--disabled');
  formElements.forEach((element) => {
    element.disabled = false;
  });
}

const setInactiveFilter = () => {
  mapFilter.classList.add('map__filters--disabled');
  filterElements.forEach((element) => {
    element.disabled = true;
  });
};

const setInactiveForm = () => {
  adsForm.classList.add('ad-form--disabled');
  formElements.forEach((element) => {
    element.disabled = true;
  });
};

const setInactiveState = () => {
  setInactiveFilter();
  setInactiveForm();
};

export {
  setActiveFilter,
  setActiveForm,
  setInactiveState
};
