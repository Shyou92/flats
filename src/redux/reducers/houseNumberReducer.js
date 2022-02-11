import { GET_HOUSENUMBER } from '../types';

const initialState = {
  houseNumbers: [],
};

export const houseNumbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSENUMBER: {
      return { ...state, houseNumbers: action.payload };
    }
    default:
      return state;
  }
};
