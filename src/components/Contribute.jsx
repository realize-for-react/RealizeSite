"use client";

import React from "react";
import GitHubButton from "react-github-btn";

export default function Contribute() {
	return (
		<div className="contribute">
			<a id="contribute"></a>
			<div className="info-header">
				<h2>Contribute!</h2>
			</div>
			We would love for you to test out our extension and submit any issues you
			encounter. Feel free to{" "}
			<a href="https://github.com/oslabs-beta/Realize">fork to your own repo</a>{" "}
			and submit PRs. Some features we would like to add:
			<p></p>
			<ul>
				<li>Performance data on render times</li>
				<li>Expanding/collapsing nodes</li>
				<li>Autocomplete on search</li>
			</ul>
			<center>
				<GitHubButton
					href="https://github.com/oslabs-beta/Realize"
					data-color-scheme="no-preference: dark; light: dark; dark: dark;"
					data-size="large"
					aria-label="Follow @Realize on GitHub"
				>
					Follow @Realize
				</GitHubButton>
				&nbsp;&nbsp;&nbsp;
				<GitHubButton
					href="https://github.com/ntkme/github-buttons"
					href="https://github.com/oslabs-beta/Realize"
					data-color-scheme="no-preference: dark; light: dark; dark: dark;"
					data-icon="octicon-star"
					data-size="large"
					data-show-count="true"
					aria-label="Star ntkme/github-buttons on GitHub"
				>
					Star
				</GitHubButton>
			</center>
		</div>
	);
}
