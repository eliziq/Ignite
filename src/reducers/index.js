import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReduser = combineReducers({
	games: gamesReducer,
	detail: detailReducer,
});

export default rootReduser;
