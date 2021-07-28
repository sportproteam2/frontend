import changeFederationReducer from './changeFederation';
import pageReducer from './page';
import {combineReducers} from 'redux';
import sportsReducer from "./sports";

const allReducers = combineReducers({
    federation: changeFederationReducer,
    isMain : pageReducer,
    category: sportsReducer});

export default allReducers;