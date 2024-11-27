import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document({ children }) {
	return (
		<Html lang="en">
			<Head>
				<title>Realize</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Info about Realize for React" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
