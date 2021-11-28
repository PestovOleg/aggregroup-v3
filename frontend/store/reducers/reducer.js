import { combineReducers } from "redux";
import { carouselReducer, onScrollPageReducer } from "./common";
import { vendorReducer } from "./vendor";
import { clientReducer } from "./client";
import { newsReducer } from "./news";

export const combinedReducer = combineReducers({
  carousel: carouselReducer,
  scroll: onScrollPageReducer,
  vendors: vendorReducer,
  clients: clientReducer,
  news: newsReducer,
});
