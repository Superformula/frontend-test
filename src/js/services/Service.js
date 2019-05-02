import axios from 'axios';

export default function (options) {
  const onSuccess = response => response.data,
    onError = (error) => {
      if (error.response) {
        const { response } = error;
        /* eslint-disable no-console */
        console.error('Status:', response.status);
        console.error('Data:', response.data);
        console.error('Headers:', response.headers);
        /* eslint-enable no-console */
      } else {
        /* eslint-disable no-console */
        console.error('Error Message:', error.message);
        /* eslint-enable no-console */
      }

      return Promise.reject(error.response || error.message);
    };

  options.headers = options.headers || {};
  options.headers.Accept = 'application/json';
  options.headers.Authorization = 'Bearer iKjzqtCSUNKhDGTKO5eVp43jSZOW5rstarKcFna4g3OiU3owt4hSSsQM7qzaZkr6o-_97yDEMs9der7ovIieC-M_IoKRMNmiY-eEUalSCJaIeYI-NUfcreJPPFTOW3Yx';

  return axios(options)
    .then(onSuccess)
    .catch(onError);
}
