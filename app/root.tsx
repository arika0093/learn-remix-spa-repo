import { IndexPage } from "@/components/index-page";
import "@/style/globals.css";
import "@/style/scrollbar.css";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { useAtomValue } from "jotai";
import React from "react";
import { darkModeAtom } from "./models/local";

export function Layout({ children }: { children: React.ReactNode }) {
	const darkMode = useAtomValue(darkModeAtom);

	return (
		<html className={darkMode ? "dark" : ""} lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<IndexPage>
			<Outlet />
		</IndexPage>
	);
}

export function HydrateFallback() {
	return <p>Loading...</p>;
}
