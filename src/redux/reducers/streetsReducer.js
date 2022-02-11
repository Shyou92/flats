import { GET_STREETS } from '../types';

const initialState = {
  streets: [],
};

export const streetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STREETS: {
      return { ...state, streets: action.payload };
    }
    default:
      return state;
  }
};
