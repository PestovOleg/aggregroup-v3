import { clientAction } from "./constants";
import { apiInstance } from "../../utils/api";

export const getRandomClients = () => {
    return async function (dispatch) {
      return apiInstance.get("/clients/random").then((res) => {
        dispatch({ type: clientAction.GET_RANDOM_CLIENTS, payload: res.data });
      });
    };
  };