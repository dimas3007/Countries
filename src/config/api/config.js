import axios from 'axios';

const API_PATH = 'https://restcountries.com/v2';

const sendAPI = (data = {}) => {
  const sendAPI = {
    method: data.method,
    url: API_PATH + data.url,
    params: data.params,
    data: data.data,
  };

  const optionsAPI = new Promise((resolve, reject) => {
    axios
      .request(sendAPI)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject({
          status: 'error',
          error: error.response,
        });
      });
  });

  return optionsAPI;
};

export default sendAPI;
