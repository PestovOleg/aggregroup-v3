import { vendorAction } from "../actions/constants";
import store from '../store';
const vendorsInitialState = {
    randomVendors:[],
    vendors:[]
}

export function vendorReducer(state = vendorsInitialState, action) {
    switch (action.type) {
      case vendorAction.GET_RANDOM_VENDORS:
        return Object.assign({}, state, action.payload);
    case vendorAction.GET_VENDORS:
        return Object.assign({}, state, {vendors:action.payload});
      default:
        return state;
    }
  }
