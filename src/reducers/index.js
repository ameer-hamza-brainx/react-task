import authentication from "./log";
import  emailReducer from "./emailReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authentication,
    emailReducer
});

export default rootReducer