import { ADD_PET, FAIL_PET, LOAD_PET, VIDE_ERRORS_MSG } from "../actionTypes";
import axios from "axios";

//ADD Pet
export const addPet = (pet, history, ownerID) => async (dispatch) => {
  dispatch({ type: LOAD_PET });
  try {
    let result = await axios.post(`${process.env.PUBLIC_URL}/api/pet/create`, {
      pet,
      ownerID,
    });
    dispatch({ type: ADD_PET, payload: result.data });
    history.push(`${process.env.PUBLIC_URL}/petList`);
  } catch (error) {
    // console.log(error.response.data);
    dispatch({ type: FAIL_PET, payload: error.response.data });
  }
};

export const videErrors = () => {
  return {
    type: VIDE_ERRORS_MSG,
  };
};
