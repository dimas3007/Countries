import sendAPI from '../config';

const getCountries = state => {
  const { name, params } = state;

  const data = {
    url: `/name/${name}`,
    method: 'GET',
  };

  if (params) data.params = params;

  return sendAPI(data);
};

const getCallingCode = code => {
  const data = {
    url: `/callingcode/${code}`,
    method: 'GET',
  };

  return sendAPI(data);
};

const getCurrency = currency => {
  const data = {
    url: `/currency/${currency}`,
    method: 'GET',
  };

  return sendAPI(data);
};

export { getCountries, getCallingCode, getCurrency };
