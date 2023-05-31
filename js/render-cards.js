import {PROPERTY_TYPE, CARD_IMAGE_SIZE} from './constants.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getPhotos = (offer, data) => {
  const photosList = offer.querySelector('.popup__photos');
  photosList.innerHTML = '';

  if (data !== undefined) {
    data.forEach((element) => {
      const img = document.createElement('img');
      img.classList.add('popup__photo');
      img.width = CARD_IMAGE_SIZE.width;
      img.height = CARD_IMAGE_SIZE.heights;
      img.src = element;
      photosList.append(img);
    });
  }
};

const getFeatures = (offer, data) => {
  const featuresList = offer.querySelector('.popup__features');
  featuresList.innerHTML = '';

  if (data !== '' && data !== undefined) {
    data.forEach((element) => {
      const item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add(`popup__feature--${element}`);
      featuresList.append(item);
    });
  }
};

const renderPopup = (elementTemplate, offerData) => {
  elementTemplate.querySelector('.popup__title').textContent = offerData.offer.title;
  elementTemplate.querySelector('.popup__text--address').textContent = offerData.offer.address;
  elementTemplate.querySelector('.popup__text--price').textContent = `${offerData.offer.price}₽/ночь`;
  elementTemplate.querySelector('.popup__type').textContent = offerData.offer.type;
  elementTemplate.querySelector('.popup__text--capacity').textContent = `${offerData.offer.rooms} комнаты для ${offerData.offer.guests} гостей`;
  elementTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;
  elementTemplate.querySelector('.popup__description').textContent = offerData.offer.description;
  elementTemplate.querySelector('.popup__avatar').src = offerData.author.avatar;
  elementTemplate.querySelector('.popup__type').textContent = PROPERTY_TYPE[offerData.offer.type];
  getFeatures(elementTemplate, offerData.offer.features);
  getPhotos(elementTemplate, offerData.offer.photos);
};

const renderCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  renderPopup(cardElement, data);
  return cardElement;
};

export {renderCard};
