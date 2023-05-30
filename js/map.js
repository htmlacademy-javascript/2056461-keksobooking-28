import {renderCard} from './render-cards.js';
import {setActiveForm} from './page-states.js';
import {
  CITY_CENTER,
  ADS_PIN_SIZE,
  CHOOSE_ADDRESS_PIN,
  COPYRIGHT,
  TILE_LAYER,
  ZOOM
} from './constants.js';

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
const addressField = document.querySelector('#address');
const iconConfig = {
  url: '../img/pin.svg',
  width: ADS_PIN_SIZE,
  height: ADS_PIN_SIZE,
  anchorX: ADS_PIN_SIZE / 2,
  anchorY: ADS_PIN_SIZE,
};

const draggableIconConfig = {
  url: '../img/main-pin.svg',
  width: CHOOSE_ADDRESS_PIN,
  height: CHOOSE_ADDRESS_PIN,
  anchorX: CHOOSE_ADDRESS_PIN / 2,
  anchorY: CHOOSE_ADDRESS_PIN,
};


const pinIcon = L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

const draggableIcon = L.icon({
  iconUrl: draggableIconConfig.url,
  iconSize: [draggableIconConfig.width, draggableIconConfig.height],
  iconAnchor: [draggableIconConfig.anchorX, draggableIconConfig.anchorY],
});

const draggableMarker = L.marker(
  CITY_CENTER,
  {
    draggable: true,
    icon: draggableIcon,
  }
);

const renderDraggableIcon = () => {
  addressField.readOnly = true;
  addressField.style.pointerEvents = 'none';
  addressField.style.cursor = 'default';

  draggableMarker
    .addTo(map)
    .on('moveend', (evt) => {
      addressField.value = `lat: ${evt.target.getLatLng().lat.toFixed(5)}, lng: ${evt.target.getLatLng().lng.toFixed(5)}`;
    });

  addressField.value = `lat: ${CITY_CENTER.lat}, lng: ${CITY_CENTER.lng}`;
};

const renderMarkers = (points) => {
  markerGroup.clearLayers();
  points.forEach((point) => {
    const marker = L.marker(
      {
        lat: point.location.lat,
        lng: point.location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(renderCard(point));
  });
};

const loadMap = () => new Promise((resolve) => {
  map
    .on('load', () => {
      setActiveForm();
      renderDraggableIcon();
      resolve(true);
    })
    .setView(CITY_CENTER, ZOOM);

  L.tileLayer(TILE_LAYER, { attribution: COPYRIGHT }).addTo(map);
});

const resetMap = () => {
  draggableMarker.setLatLng(CITY_CENTER);
  map.setView(CITY_CENTER, ZOOM);
  addressField.value = `lat: ${CITY_CENTER.lat}, lng: ${CITY_CENTER.lng}`;
};

export {
  loadMap,
  renderMarkers,
  resetMap
};
