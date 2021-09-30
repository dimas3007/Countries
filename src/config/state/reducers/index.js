import { combineReducers } from 'redux';
import countriesReducer from './countries';

const reducers = combineReducers({
  countries: countriesReducer,
});

export default reducers;
