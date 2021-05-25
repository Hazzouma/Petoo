import {
  CURRENT_USER,
  VIDE_ERRORS,
  GET_MY_PETS,
  FAIL_PET,
} from "../actionTypes";

//Initale States
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
  msg: "",
  myPets: [],
};

//current user reducer
const currentUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        user: payload.userLogged,
        isAuth: true,
        msg: payload.msg,
      };
    case VIDE_ERRORS:
      return { ...state, errors: [], msg: "" };
    case GET_MY_PETS:
      return { ...state, myPets: payload.arr, msg: payload.msg };
    case FAIL_PET:
      return { ...state, errors: payload.errors };
    default:
      return state;
  }
};

export default currentUser;
