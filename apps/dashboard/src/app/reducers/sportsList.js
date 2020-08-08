import {CLEAR_SPORTS_LIST, FETCH_SPORTS_LIST, FULFILLED, PENDING, REJECTED} from '../constants/ActionTypes';

const initialState = {data: []};

export default function sportsList(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPORTS_LIST + FULFILLED : {
      const data = action.payload.data.payload;
      const newStatus = Object.assign({}, state, {data, status: FULFILLED});
      return newStatus;
    }
    case FETCH_SPORTS_LIST + PENDING : {
      const profile = {data: [], status: PENDING};
      return profile;
    }
    case FETCH_SPORTS_LIST + REJECTED : {
      const profile = {data: [], status: REJECTED};
      return profile;
    }
    case CLEAR_SPORTS_LIST:
      return initialState;
    default:
      return state;
  }
}