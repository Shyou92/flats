import {
  getFlatsNumberData,
  getHouseNumberData,
  getStreetsData,
} from '../shared/utils';
import { GET_FLATSNUMBER, GET_HOUSENUMBER, GET_STREETS } from './types';

export function fetchStreets() {
  return async (dispatch) => {
    const response = await getStreetsData();
    dispatch({ type: GET_STREETS, payload: response });
  };
}

export function fetchHouseNumbers(id) {
  return async (dispatch) => {
    const response = await getHouseNumberData(id);
    dispatch({ type: GET_HOUSENUMBER, payload: response });
  };
}

export function fetchFlatsNumbers(id) {
  return async (dispatch) => {
    const response = await getFlatsNumberData(id);
    dispatch({ type: GET_FLATSNUMBER, payload: response });
  };
}
