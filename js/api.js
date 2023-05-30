const getData = (onSuccess, onError, serverAddress) => {
  fetch(serverAddress)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });
};

const postData = (body, serverAddress) => fetch (serverAddress,
  {
    method: 'post',
    body
  });

export {
  getData,
  postData,
};
