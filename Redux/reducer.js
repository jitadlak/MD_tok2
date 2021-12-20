import { FETCH_DOCTOR, FETCH_PATIENT_SINGLE } from "./actionType";

const initialState={

    doctorData:"",
    userPatient:''

}

export const DoctorFetchReducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_DOCTOR:
            return {...state, doctorData: action.payload}
           
            default:
                return state
    }
}
export const PatientUserReducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_PATIENT_SINGLE:
            return {...state, userPatient: action.payload}
       
            default:
                return state
    }
}