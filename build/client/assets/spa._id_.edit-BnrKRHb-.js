import { B as l } from "./button-M3RRiVPh.js";
import { F as d, a as r, j as e, u as c } from "./components-CKKW9ivY.js";
import { I as s } from "./input-ey0U68Ol.js";
import { i as n } from "./tiny-invariant-CopsF_GD.js"; /**
 * @remix-run/server-runtime v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const m = (t, a = 302) => r(t, a);
async function h({ params: t }) {
	return (
		n(t.id),
		await (
			await fetch(`https://jsonplaceholder.typicode.com/posts/${t.id}`)
		).json()
	);
}
async function x({ params: t, request: a }) {
	n(t.id);
	const o = await a.formData(),
		i = Object.fromEntries(o);
	return (
		await fetch(`https://jsonplaceholder.typicode.com/posts/${t.id}`, {
			method: "PUT",
			body: JSON.stringify(i),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		}),
		m(`/spa/${t.id}`)
	);
}
function y() {
	const t = c();
	return e.jsx("div", {
		className: "p-2",
		children: e.jsx("div", {
			className: "flex flex-col gap-1",
			children: e.jsxs(d, {
				method: "POST",
				children: [
					e.jsx(s, { type: "text", name: "title", defaultValue: t.title }),
					e.jsx(s, { name: "body", defaultValue: t.body }),
					e.jsx(l, { variant: "default", children: "Save" }),
				],
			}),
		}),
	});
}
export { x as clientAction, h as clientLoader, y as default };
