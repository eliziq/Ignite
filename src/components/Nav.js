import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and routes
import { fetchSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState("");
	const inputHandler = (e) => {
		setTextInput(e.target.value);
	};
	const submitSearch = (e) => {
		e.preventDefault();
		if (textInput) {
			dispatch(fetchSearched(textInput));
			setTextInput("");
		} else {
			dispatch({ type: "CLEAR_SEARCH" });
		}
	};

	const clearSearched = () => {
		dispatch({ type: "CLEAR_SEARCHED" });
	};

	return (
		<StyledNav>
			<Logo onClick={clearSearched}>
				<img src={logo} alt="ignite" />
				<h1>Ignite</h1>
			</Logo>
			<form className="search">
				<input value={textInput} onChange={inputHandler} type="text" />
				<button onClick={submitSearch} type="submit">
					Search
				</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;

export default Nav;
