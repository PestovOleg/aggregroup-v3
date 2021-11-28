import { clientAction } from "../actions/constants";

const clientInitialState = {
  randomClients: [],
};


export function clientReducer(state = clientInitialState, action) {
  switch (action.type) {
    case clientAction.GET_RANDOM_CLIENTS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}