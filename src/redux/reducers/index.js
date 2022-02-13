import { combineReducers } from '@reduxjs/toolkit';
import { houseNumbersReducer } from './houseNumberReducer';
import { streetsReducer } from './streetsReducer';
import { flatsNumbersReducer } from './flatsNumberReducer';
import { clientReducer } from './clientReducer';

export const rootReducer = combineReducers({
  streets: streetsReducer,
  house: houseNumbersReducer,
  flats: flatsNumbersReducer,
  clients: clientReducer,
});
