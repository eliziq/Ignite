import React from "react";
import { Route, Routes } from "react-router-dom";
//Components and pages
import Home from "./pages/Home";
//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Routes>
				<Route path="/game/:id" element={<Home />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
