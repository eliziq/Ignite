import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
const Game = ({ name, released, id, image }) => {
	//Load Detail Handler
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame onClick={loadDetailHandler}>
			<Link to={"/game/" + id}>
				{/* {`/game/&{id}`} почему не работает?*/}
				<h3>{name}</h3>
				<p>{released}</p>
				<img src={image} alt={name} />
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
