import axios from "axios";
import { popularGamesURL } from "../api";

//Action creator
export const loadGames = () => async (dispatch) => {
	//fetch axios
	const popularData = await axios.get(popularGamesURL());
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
		},
	});
};
