import {SERVER_LINK, ALERT_SHOW_TIME} from './constants.js';
import {getData} from './api.js';
import './render-cards.js';
import {setInactiveState} from './page-states.js';
import {loadMap} from './map.js';
import {setFilters} from './filter.js';
import {showAlert} from './utils.js';
import './form.js';
import './validation.js';
import './pop-ups.js';
import './slider.js';

setInactiveState();

loadMap()
  .then(() => {
    getData(setFilters, showAlert, SERVER_LINK.get);
  })
  .catch(() => {
    showAlert('Что-то пошло не так, попробуйте еще раз.', ALERT_SHOW_TIME);
  });
