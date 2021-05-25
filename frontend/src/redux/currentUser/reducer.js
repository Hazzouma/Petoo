import {
  CURRENT_USER,
  VIDE_ERRORS,
  GET_MY_PETS,
  FAIL_PET,
  GET_MY_APPOINTMENTS,
} from "../actionTypes";

//Initale States
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
  msg: "",
  myPets: [],
  myAppointments: [],
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
        load: false,
      };
    case GET_MY_APPOINTMENTS:
      return {
        ...state,
        myAppointments: payload.arrayOfAppointments,
        msg: payload.msg,
        load: false,
      };
    case VIDE_ERRORS:
      return { ...state, errors: [], msg: "", load: false };
    case GET_MY_PETS:
      return {
        ...state,
        myPets: payload.arrayOfPets,
        msg: payload.msg,
        load: false,
      };
    case FAIL_PET:
      return { ...state, errors: payload, load: false };
    default:
      return state;
  }
};

export default currentUser;
