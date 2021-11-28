import { clientAction } from "./constants";
import { api } from "../../lib/utils";

export const getRandomClients = () => {
    return async function (dispatch) {
      return api.get("/clients/random").then((res) => {
        dispatch({ type: clientAction.GET_RANDOM_CLIENTS, payload: res.data });
      });
    };
  };