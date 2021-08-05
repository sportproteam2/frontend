import changeSportReducer from './changeSport';
import {combineReducers} from 'redux';
import sportCategoryReducer from "./category";

const allReducers = combineReducers({
    sport: changeSportReducer,
    category: sportCategoryReducer
});

export default allReducers;