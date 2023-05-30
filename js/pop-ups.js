import {isEscapeKey} from './utils.js';

const successModalTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorModalTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const showModal = (modalTemplate) => {
  const modalElement = modalTemplate.cloneNode(true);
  const modalButton = modalElement.querySelector('button');

  const getModalClose = (modal) => {
    modal.remove();
    removeListeners();
  };

  const onDocumentKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      getModalClose(modalElement);
    }
  };

  const onClick = () => {
    getModalClose(modalElement);
  };

  function removeListeners() {
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onDocumentKeyDown);
    if (modalButton) {
      modalButton.removeEventListener('click', onClick);
    }
  }

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onDocumentKeyDown);
  if (modalButton) {
    modalButton.addEventListener('click', onClick);
  }
  document.body.append(modalElement);
};

export {
  showModal,
  successModalTemplate,
  errorModalTemplate,
};
