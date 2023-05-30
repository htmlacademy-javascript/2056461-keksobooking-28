import {TITLE_LENGTH, PROPERTY_PRICE, FILE_TYPES} from './constants.js';

const advertiseForm = document.querySelector('.ad-form');
const avatarField = advertiseForm.querySelector('#avatar');
const avatarPreview = advertiseForm.querySelector('.ad-form-header__preview img');
const titleField = advertiseForm.querySelector('#title');
const priceField = advertiseForm.querySelector('#price');
const propertyType = advertiseForm.querySelector('#type');
const roomsNumber = advertiseForm.querySelector('#room_number');
const roomsGuests = advertiseForm.querySelector('#capacity');
const imagesField = advertiseForm.querySelector('#images');
const imagesContainer = advertiseForm.querySelector('.ad-form__photo');

avatarField.addEventListener('change', () => {
  const image = avatarField.files[0];
  const fileName = image.name.toLowerCase();
  const match = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (match) {
    avatarPreview.src = URL.createObjectURL(image);
  }
});

const createImageElement = (image) => {
  const imageElement = document.createElement('img');
  imageElement.src = URL.createObjectURL(image);
  imageElement.width = 70;
  imageElement.height = 70;
  return imageElement;
};

imagesField.addEventListener('change', () => {
  const image = imagesField.files[0];
  const fileName = image.name.toLowerCase();
  const match = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (match) {
    if (imagesContainer.children.length < 1) {
      imagesContainer.append(createImageElement(image));
    } else if (imagesContainer.children) {
      imagesContainer.querySelector('img').src = URL.createObjectURL(image);
    }
  }
});

const pristine = new Pristine(advertiseForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span'
});

const titleValidator = (value) => value.length > TITLE_LENGTH.min && value.length < TITLE_LENGTH.max;

pristine.addValidator(
  titleField,
  titleValidator,
  `Длинна строки от ${TITLE_LENGTH.min} до ${TITLE_LENGTH.max} символов`,
);

const priceValidator = (value) => value >= PROPERTY_PRICE[propertyType.value] && value <= PROPERTY_PRICE.max;

const priceValidatorMessage = () => priceField.value > PROPERTY_PRICE.max ? `Максимальная цена ${PROPERTY_PRICE.max} руб.` : `Минимальная цена ${PROPERTY_PRICE[propertyType.value]} руб.`;

pristine.addValidator(
  priceField,
  priceValidator,
  priceValidatorMessage,
);

propertyType.addEventListener('change', () => {
  pristine.validate(priceField);
});

const roomsCapacity = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const capacityValidator = () => roomsCapacity[roomsNumber.value].includes(roomsGuests.value);

const capacityMessage = () => {
  switch (roomsNumber.value) {
    case '1':
      return 'Максимум 1 гость';
    case '2':
      return 'Максимум 2 гостя';
    case '3':
      return 'Максимум 3 гостя';
    case '100':
      return 'Только для мероприятий';
  }
};

pristine.addValidator(
  roomsGuests,
  capacityValidator,
  capacityMessage
);

roomsNumber.addEventListener('change', () => {
  pristine.validate(roomsGuests);
});

const isValid = () => pristine.validate;

export {isValid, priceValidator, priceValidatorMessage};
