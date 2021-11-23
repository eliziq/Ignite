import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReduser = combineReducers({
	games: gamesReducer,
});

export default rootReduser;
