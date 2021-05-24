

import axios from "axios";

//ADD App
export const addAppointment = (vetID, petID, ownerID, appointment, history) => async (dispatch) => {
  dispatch({ type: LOAD_APP });
  try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/appointment/createByOwner`, {
        appointment,
        vetID, petID, ownerID 
    });
    dispatch({ type: ADD_APP, payload: result.data });

  } catch (error) {
    dispatch({ type: FAIL_APP, payload: error.response.data });
  }
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS_MSGS,
  };
};
