import React from "react";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//images
import playstation from "../img/playstation.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import apple from "../img/apple.svg";

const GameDetail = ({ pathId }) => {
	const navigate = useNavigate();
	//Exit Detail
	const exitDetailHandler = (e) => {
		const element = e.target;
		console.log(element);
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			navigate("/");
		}
	};
	//Get Platform images
	const getPlatform = (platform) => {
		switch (platform) {
			case "Play Station 4":
			case "PlayStation 4":
			case "Play Station 5":
			case "PlayStation 5":
				return playstation;
			case "Xbox One":
			case "Xbox Series S/X":
			case "Xbox 360":
				return xbox;
			case "Nintendo Switch":
			case "Nintendo 3DS":
			case "Nintendo DS":
			case "Nintendo DSi":
				return nintendo;
			case "iOS":
			case "macOS":
				return apple;
			case "PC":
				return steam;
			default:
				return gamepad;
		}
	};

	//Data
	const { screen, game, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow className="shadow" onClick={exitDetailHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<img
											key={data.platform.id}
											src={getPlatform(data.platform.name)}
											alt={data.platform.name}
										></img>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img
								layoutId={`image ${pathId}`}
								src={smallImage(game.background_image, 1280)}
								alt=""
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className="gallery">
							{screen.results.map((screen) => (
								<img
									src={smallImage(screen.image, 1280)}
									key={screen.id}
									alt="game"
								/>
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled(motion.div)`
	text-align: center;
`;
const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetail;
