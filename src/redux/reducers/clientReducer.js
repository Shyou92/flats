import { GET_CLIENTSLIST, GET_SINGLECLIENTID, SET_NEWTENANT } from '../types';

const initialState = {
  clients: [],
  singleClient: '',
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLECLIENTID: {
      return { ...state, singleClient: action.payload };
    }
    case GET_CLIENTSLIST: {
      return { ...state, clients: action.payload };
    }
    case SET_NEWTENANT: {
      return {
        ...state,
        clients: action.payload,
      };
    }
    default:
      return state;
  }
};
