import { getCountries } from '../../../api';

export const setCountries = payload => {
  return async dispatch => {
    try {
      const response = await getCountries({
        name: payload,
        params: { fullText: true },
      });
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
