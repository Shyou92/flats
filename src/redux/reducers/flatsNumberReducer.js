import { GET_FLATSNUMBER } from '../types';

const initialState = {
  flatsNumbers: [],
};

export const flatsNumbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLATSNUMBER: {
      return { ...state, flatsNumbers: action.payload };
    }
    default:
      return state;
  }
};
