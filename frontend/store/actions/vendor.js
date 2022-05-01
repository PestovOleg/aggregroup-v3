import { vendorAction } from "./constants";
import { apiInstance } from "../../utils/api";

export const getRandomVendors = () => {
    return async function (dispatch) {
      return apiInstance.get("/vendors/random").then((res) => {
        dispatch({ type: vendorAction.GET_RANDOM_VENDORS, payload: res.data });
      });
    };
  };

  export const getVendors = () => {
    return async function (dispatch) {
      return apiInstance.get("https://aggregroup.com/api/vendors/").then((res) => {
        dispatch({ type: vendorAction.GET_VENDORS, payload: res.data });
      });
    };
  };