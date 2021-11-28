import { commonAction } from "../actions/constants";

const carouselInitialState = {
  captions: [],
};

const scrollYInitialState = {
  scrollY: 0,
};

export function carouselReducer(state = carouselInitialState, action) {
  switch (action.type) {
    case commonAction.UPDATE_CAROUSEL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function onScrollPageReducer(state = scrollYInitialState, action) {
  switch (action.type) {
    case commonAction.ON_SCROLL_PAGE:
      return Object.assign({}, state, {scrollY: window.scrollY});
    default:
        return state;
  }
}
