import { getCountries, getCallingCode, getCurrency } from '../../../api';

export const setCountries = payload => {
  return async dispatch => {
    const response = await getCountries({
      name: payload,
      params: { fullText: true },
    })
      .then(async res => {
        const data = {};
        data.countries = res[0];
        const additionalData = await Promise.all([
          getCallingCode(res[0]?.callingCodes[0]),
          getCurrency(res[0]?.currencies[0].code),
        ]);
        data.calling = additionalData[0];
        data.currency = additionalData[1];
        return data;
      })
      .catch(err => {
        dispatch({
          type: 'setCountries',
          payload: {
            status: 'error',
            data: err,
          },
        });
      });

    try {
      dispatch({
        type: 'setCountries',
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: 'setCountries',
        payload: {
          status: 'error',
          data: error,
        },
      });
    }
  };
};
