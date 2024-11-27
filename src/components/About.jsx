import React from "react";

export default function About() {
	return (
		<div className="about">
			<a id="about"></a>
			<div className="info-header">
				<h2>About</h2>
			</div>
			<div className="aboutWrap">
				<div className="aboutContent">
					<img src={"images/treeVizDemo.gif"} className="desktopDemo" />
				</div>
				<div className="aboutContent">
					As React applications scale, it becomes more difficult to track state
					and to have a holistic overview of the component hierarchy. Realize is
					a tool to help developers visualize the structure and state flow of
					their React applications, especially when they are growing in scale
					and complexity. It currently supports React v.16.8.
				</div>
			</div>
		</div>
	);
}
