import React from "react";
import { Link } from "react-router-dom";
//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { smallImage } from "../util";

const Game = ({ name, released, id, image }) => {
	const stringPathId = id.toString();
	//Load Detail Handler
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
			<Link to={"/game/" + id}>
				{/* {`/game/${id}`} почему не работает?*/}
				<motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
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
