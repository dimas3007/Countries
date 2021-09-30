const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'setCountries':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
