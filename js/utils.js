const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const blockSubmitButton = (button) => {
  button.disabled = true;
  button.style.pointerEvents = 'none';
  button.style.cursor = 'default';
  button.textContent = 'Публикую...';
};

const unblockSubmitButton = (button) => {
  button.disabled = false;
  button.style.pointerEvents = 'auto';
  button.style.cursor = 'pointer';
  button.textContent = 'Опубликовать';
};

const showAlert = (message, timer) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '15px 10px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.fontFamily = 'Open Sans';
  alertContainer.style.fontWeight = 700;
  alertContainer.style.color = '#ffe753';
  alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

  alertContainer.textContent = message;

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, timer);
};

export {
  debounce,
  isEscapeKey,
  blockSubmitButton,
  unblockSubmitButton,
  showAlert
};

