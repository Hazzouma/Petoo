import { CURRENT_USER } from "../actionTypes";

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
      return { ...state, user: payload.userLogged, isAuth: true };

    default:
      return state;
  }
};

export default currentUser;
