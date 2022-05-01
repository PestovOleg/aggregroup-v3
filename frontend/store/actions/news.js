import { newsAction } from "./constants";
import { apiInstance } from "../../utils/api";

export const getLastNews = () => {
    return async function (dispatch) {
      return apiInstance.get("/news/lastNews").then((res) => {
        dispatch({ type: newsAction.GET_LAST_NEWS, payload: res.data });
      });
    };
  };