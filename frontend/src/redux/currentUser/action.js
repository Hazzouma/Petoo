import {
  CURRENT_USER,
  VIDE_ERRORS,
  FAIL_PET,
  GET_MY_PETS,
} from "../actionTypes";

import axios from "axios";

export const videErrors = () => {
  return {
    type: VIDE_ERRORS,
  };
};

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

//get current owner pets
export const getMyPets = (idUser) => async (dispatch) => {
  try {
    const s = { idUser: idUser };
    let result = await axios.post(
      `${process.env.PUBLIC_URL}/api/pet/getYourPets`,
      s
    );
    dispatch({ type: GET_MY_PETS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PET, payload: error.response.data.errors });
  }
};
