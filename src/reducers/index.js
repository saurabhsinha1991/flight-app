import { combineReducers } from 'redux';
import flightReducer from './flightResults';

const flightApp = combineReducers({
    flightDetails: flightReducer
})

export default flightApp;