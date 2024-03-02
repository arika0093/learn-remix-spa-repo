import { B as o } from "./button-M3RRiVPh.js";
import { F as i, j as t, u as a } from "./components-CKKW9ivY.js";
import { i as e } from "./tiny-invariant-CopsF_GD.js";
async function j({ params: s }) {
	return (
		e(s.id),
		await (
			await fetch(`https://jsonplaceholder.typicode.com/posts/${s.id}`)
		).json()
	);
}
function x() {
	const s = a();
	return t.jsx("div", {
		className: "p-2",
		children: t.jsxs("div", {
			className: "flex flex-col gap-1",
			children: [
				t.jsx("div", {
					children: t.jsx(i, {
						action: "edit",
						children: t.jsx(o, { variant: "default", children: "Edit" }),
					}),
				}),
				t.jsxs("h1", { children: ["Title: ", s.title] }),
				t.jsx("p", { children: s.body }),
			],
		}),
	});
}
export { j as clientLoader, x as default };
