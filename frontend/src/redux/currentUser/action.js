import { CURRENT_USER } from "../actionTypes";

import axios from "axios";

export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get(
      `${process.env.PUBLIC_URL}/api/dashboard/default/current`,
      config
    );
    // console.log(result.data.userLogged);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
  } catch (error) {
    localStorage.removeItem("token");
    window.location.href = `${process.env.PUBLIC_URL}/login`;
  }
};
