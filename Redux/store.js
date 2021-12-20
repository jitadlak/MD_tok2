import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { DoctorFetchReducer,PatientUserReducer } from './reducer'

const rootReducer= combineReducers({
    DoctorFetchReducer
    ,
    PatientUserReducer
})

export const store= createStore(rootReducer, applyMiddleware(thunk))