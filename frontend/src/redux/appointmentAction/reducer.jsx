
const {
    ADD_APP, FAIL_APP, LOAD_APP, VIDE_ERRORS_MSGS


  } = require("../actionTypes");
  
  const initialState = {
    load: false,
    appointment: {},
    errors: [],
    msg: "",
    appointments: [],
  };
  
  const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_APP:
        if (typeof payload.msg === "string") {
          return {
            ...state,
            appointment: payload.newAppointment,
            load: false,
            msg: payload.msg,
            appointments: state.appointments.push(payload.newAppointment),
          };
        }
      // } else {
      //   return { ...state, load: false, errors: payload.errors };
      // }
  
      case FAIL_APP:
        return { ...state, errors: payload.errors, load: false };
  
      case LOAD_APP:
        return { ...state, load: true };
  
      case VIDE_ERRORS_MSGS:
        return { ...state, load: false, msg: "", errors: [] };
  
      default:
        return state;
    }
  };
  export default appReducer;
  