import { newsAction } from "../actions/constants";

const newsInitialState = {
  lastNews: [],
};


export function newsReducer(state = newsInitialState, action) {
  switch (action.type) {
    case newsAction.GET_LAST_NEWS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}