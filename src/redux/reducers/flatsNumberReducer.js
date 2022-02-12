import { GET_FLATSNUMBER, GET_SINGLEFLATNUMBER } from '../types';

const initialState = {
  flatsNumbers: [],
  singleFlat: '',
};

export const flatsNumbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLATSNUMBER: {
      return { ...state, flatsNumbers: action.payload };
    }
    case GET_SINGLEFLATNUMBER: {
      return { ...state, singleFlat: action.payload };
    }
    default:
      return state;
  }
};
