import {ADD_PET,  FAIL_PET}  from '../actionTypes'
import axios from "axios";

//ADD Pet

export const addPet=(pet,history,ownerID)=>async(dispatch)=>{
    // dispatch({type:ADD_PET});
    try {
        
        let result= await axios.post(
            `${process.env.PUBLIC_URL}/api/pet/create`,
            {pet, ownerID}
        );
        history.push(`${process.env.PUBLIC_URL}/petList`);
        
    
} catch (error) {
    console.log(error.response.data);
    dispatch({type: FAIL_PET, payload: error.response.data.errors});
};

};