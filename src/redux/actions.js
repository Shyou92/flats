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

export function fetchHouseNumbers() {
  return async (dispatch) => {
    const response = await getHouseNumberData();
    dispatch({ type: GET_HOUSENUMBER, payload: response });
  };
}

export function fetchFlatsNumbers() {
  return async (dispatch) => {
    const response = await getFlatsNumberData();
    dispatch({ type: GET_FLATSNUMBER, payload: response });
  };
}
