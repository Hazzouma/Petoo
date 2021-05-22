import axios from "axios";
import http from "http";
import {
  FAIL_NOTIF,
  MARK_READ_NOTIF,
  GET_ALL_NOTIFS,
  CHECK_ALL_NOTIFS,
} from "../actionTypes";

//check only ONE notif
export const checkNotif = (idNotif, idUser) => async (dispatch) => {
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/notif/isRead`,
      {
        idNotif,
        idUser,
      }
    );
    dispatch({ type: MARK_READ_NOTIF, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_NOTIF, payload: error.response.data.errors });
  }
};

// Check ALL notifs at once
export const checkALLNotif = (notificationId, idUser) => async (dispatch) => {
  try {
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/notif/checkAllAtOnce`,
      {
        notificationId,
        idUser,
      }
    );
    dispatch({ type: CHECK_ALL_NOTIFS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_NOTIF, payload: error.response.data.errors });
  }
};

// Get all notifs with full information (not just id of notif BUT ALL)
export const getALLNotif = (idUser) => async (dispatch) => {
  try {

    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/notif/getnotif`,
      idUser
    );
    console.log(idUser)
    dispatch({ type: GET_ALL_NOTIFS, payload: result.data });
    console.log(result.data);
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch({ type: FAIL_NOTIF, payload: error.response.data.errors });
  }
};
