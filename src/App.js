import React from "react";
//Components and pages
import Home from "./pages/Home";
//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Home />
		</div>
	);
}

export default App;
