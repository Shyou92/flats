import {
  getFlatsNumberData,
  getHouseNumberData,
  getStreetsData,
} from '../shared/utils';
import {
  GET_FLATSNUMBER,
  GET_HOUSENUMBER,
  GET_STREETS,
  GET_SINGLEFLATNUMBER,
  GET_SINGLECLIENTID,
  GET_CLIENTSLIST,
  SET_NEWTENANT,
} from './types';

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
    const filteredRes = await response.filter((item) => {
      if (item.typeId === 3) {
        return item;
      }
    });
    dispatch({ type: GET_FLATSNUMBER, payload: filteredRes });
  };
}

export function getFlatNumber(id) {
  return {
    type: GET_SINGLEFLATNUMBER,
    payload: {
      id,
    },
  };
}

export function addNewTenant(data) {
  console.log(data);
  return {
    type: SET_NEWTENANT,
    payload: {
      data,
    },
  };
}

export function getClientId(id) {
  return {
    type: GET_SINGLECLIENTID,
    payload: {
      id,
    },
  };
}

export function getClientsList(data) {
  return {
    type: GET_CLIENTSLIST,
    payload: {
      data,
    },
  };
}
