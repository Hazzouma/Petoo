const {
    ADD_PET, FAIL_PET
  } = require("../actionTypes");

const initialState = {
    pet: {},
    errors: [],
    msg: "",
    pets:[],
  };

 const petReducer = (state = initialState, { type, payload }) =>{
        switch (type) {
            case ADD_PET: 
            return{ ...state, pet:payload.pet};
                
            case FAIL_PET: 
            return{ ...state, errors: payload.errors };
        
            default:
                return state
                
        }
  };
  export default petReducer
