require("dotenv").config();
//BASE URL
const base_url = "https://api.rawg.io/api/";
const key = `&key=${process.env.REACT_APP_RAWG_API}`;

//getting the date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};
const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};
//current day/month/year
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//POPULAR, UPCOMING, NEW GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=9`;

export const popularGamesURL = () => {
	return `${base_url}${popular_games}${key}`;
};
export const upcomingGamesURL = () => {
	return `${base_url}${upcoming_games}${key}`;
};
export const newGamesURL = () => {
	return `${base_url}${new_games}${key}`;
};
//GAME DETAILS
export const gameDetailsURL = (game_id) => {
	return `${base_url}games/${game_id}?${key}`;
};
//GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) => {
	return `${base_url}games/${game_id}/screenshots?${key}`;
};
//SEARCHED GAME
export const searchedGameURL = (game_name) => {
	return `${base_url}games?search=${game_name}${key}&page_size=9`;
};
