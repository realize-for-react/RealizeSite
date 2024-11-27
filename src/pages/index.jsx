import React from "react";

import About from "../components/About";
import Authors from "../components/Authors";
import Contribute from "../components/Contribute";
import Demo from "../components/Demo";
import Installation from "../components/Installation";
import Nav from "../components/Nav";
import Spacer from "../components/Spacer";
import Title from "../components/Title";

export default function Home() {
	return (
		<>
			<div className="container">
				<Nav />
				<Spacer />
				<Title />
				<About />
				<Installation />
				<Demo />
				<Authors />
				<Contribute />
			</div>
		</>
	);
}
