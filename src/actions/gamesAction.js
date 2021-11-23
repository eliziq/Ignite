import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

//Action creator
export const loadGames = () => async (dispatch) => {
	//fetch axios
	const popularData = await axios.get(popularGamesURL());
	const newData = await axios.get(newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());

	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			newGames: newData.data.results,
			upcoming: upcomingData.data.results,
		},
	});
};
