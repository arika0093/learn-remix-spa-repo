import { L as o, j as e, u as t } from "./components-CKKW9ivY.js";
async function r() {
	return await (
		await fetch("https://jsonplaceholder.typicode.com/posts")
	).json();
}
function i() {
	const a = t();
	return e.jsx("div", {
		className: "p-2",
		children: e.jsx("div", {
			className: "flex flex-col gap-1",
			children: a.map((s) =>
				e.jsx(
					o,
					{
						to: `/spa/${s.id}`,
						children: e.jsx("div", {
							className: "border p-1 hover:bg-blue-200 dark:hover:bg-blue-800",
							children: s.title,
						}),
					},
					s.id,
				),
			),
		}),
	});
}
export { r as clientLoader, i as default };