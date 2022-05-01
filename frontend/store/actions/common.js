import { commonAction } from "./constants";
import { apiInstance } from "../../utils/api";

export const updateCarousel = () => {
  return async function (dispatch) {
    return apiInstance.get("/captions").then((res) => {
      console.log(res)
      dispatch({ type: commonAction.UPDATE_CAROUSEL, payload: res.data });
    });
  };
};

export const onScrollPage = () => (dispatch) => {
  return dispatch({ type: commonAction.ON_SCROLL_PAGE });
};

/* export const updateCarousel = () => {
  return async function (dispatch) {
    const res = await axios.get(process.env.BASE_URL + "/captions");
    dispatch({ type: baseAction.UPDATE_CAROUSEL, payload: res.data });
  };
}; */
