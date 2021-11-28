import { newsAction } from "./constants";
import { api } from "../../lib/utils";

export const getLastNews = () => {
    return async function (dispatch) {
      return api.get("/news/lastNews").then((res) => {
        dispatch({ type: newsAction.GET_LAST_NEWS, payload: res.data });
      });
    };
  };