import axios from "axios";
import { FAIL_NOTIF, MARK_READ_NOTIF } from "../actionTypes";
export const checkNotif = (notification, idUser) => async (dispatch) => {
  try {
  } catch (error) {
    dispatch({ type: FAIL_NOTIF, payload: error.response.data });
  }
};
