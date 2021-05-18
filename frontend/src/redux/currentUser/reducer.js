import { CURRENT_USER, VIDE_ERRORS } from "../actionTypes";

//Initale States
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
  msg: "",
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
    default:
      return state;
  }
};

export default currentUser;
