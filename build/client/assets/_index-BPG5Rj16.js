import { L as t, j as e } from "./components-CKKW9ivY.js";
const a = () => [
	{ title: "Remix SPA!" },
	{ name: "description", content: "Welcome to Remix (SPA Mode)!" },
];
function s() {
	return e.jsxs("div", {
		className:
			"flex flex-col items-center justify-center h-screen text-gray-300 dark:text-gray-700",
		children: [
			e.jsx("img", {
				src: "/logo.png",
				alt: "Remix Logo",
				className: "w-32 mb-2 grayscale",
			}),
			e.jsx("h1", { className: "text-2xl font-bold", children: "REMIX SPA!" }),
			e.jsx("p", { children: "温泉を探してリラックスしよう！" }),
			e.jsx("br", {}),
			e.jsxs("div", {
				className: "flex flex-row gap-4",
				children: [
					e.jsx(t, {
						to: "/from-list",
						className:
							"bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium p-2 rounded-md text-center",
						children: "一覧から探す",
					}),
					e.jsx(t, {
						to: "/from-images",
						className:
							"bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium p-2 rounded-md text-center",
						children: "画像から探す",
					}),
				],
			}),
		],
	});
}
export { s as default, a as meta };
