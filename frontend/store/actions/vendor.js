import { vendorAction } from "./constants";
import { api } from "../../lib/utils";

export const getRandomVendors = () => {
    return async function (dispatch) {
      return api.get("/vendors/random").then((res) => {
        dispatch({ type: vendorAction.GET_RANDOM_VENDORS, payload: res.data });
      });
    };
  };

  export const getVendors = () => {
    return async function (dispatch) {
      return api.get("https://aggregroup.com/api/vendors/").then((res) => {
        dispatch({ type: vendorAction.GET_VENDORS, payload: res.data });
      });
    };
  };