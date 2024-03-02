import { B as y } from "./button-M3RRiVPh.js"; /**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
import {
	L as x,
	M as z,
	O as $,
	S as B,
	b as T,
	j as r,
	q as R,
	r as c,
	s as E,
	t as C,
	v as L,
	w as A,
	x as W,
} from "./components-CKKW9ivY.js";
import { I as U } from "./input-ey0U68Ol.js";
import { a as D, b as H, u as F } from "./react-C5P5sJd_.js";
const w = "positions";
function V({ getKey: e, ...t }) {
	const { isSpaMode: s } = T(),
		a = R(),
		i = E();
	C({ getKey: e, storageKey: w });
	const m = c.useMemo(() => {
		if (!e) return null;
		const n = e(a, i);
		return n !== a.key ? n : null;
	}, []);
	if (s) return null;
	const d = ((n, l) => {
		if (!window.history.state || !window.history.state.key) {
			const o = Math.random().toString(32).slice(2);
			window.history.replaceState({ key: o }, "");
		}
		try {
			const f = JSON.parse(sessionStorage.getItem(n) || "{}")[
				l || window.history.state.key
			];
			typeof f == "number" && window.scrollTo(0, f);
		} catch (o) {
			console.error(o), sessionStorage.removeItem(n);
		}
	}).toString();
	return c.createElement(
		"script",
		L({}, t, {
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: {
				__html: `(${d})(${JSON.stringify(w)}, ${JSON.stringify(m)})`,
			},
		}),
	);
}
const N = D(!0);
var _ = { exports: {} },
	J = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	q = J,
	Y = q;
function M() {}
function S() {}
S.resetWarningCache = M;
var G = () => {
	function e(a, i, m, d, n, l) {
		if (l !== Y) {
			var o = new Error(
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
			);
			throw ((o.name = "Invariant Violation"), o);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var s = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: S,
		resetWarningCache: M,
	};
	return (s.PropTypes = s), s;
};
_.exports = G();
var K = _.exports;
const h = A(K);
var Z = {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
	Q = Object.defineProperty,
	X = Object.defineProperties,
	ee = Object.getOwnPropertyDescriptors,
	u = Object.getOwnPropertySymbols,
	I = Object.prototype.hasOwnProperty,
	O = Object.prototype.propertyIsEnumerable,
	j = (e, t, s) =>
		t in e
			? Q(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
			: (e[t] = s),
	k = (e, t) => {
		for (var s in t || (t = {})) I.call(t, s) && j(e, s, t[s]);
		if (u) for (var s of u(t)) O.call(t, s) && j(e, s, t[s]);
		return e;
	},
	re = (e, t) => X(e, ee(t)),
	te = (e, t) => {
		var s = {};
		for (var a in e) I.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
		if (e != null && u)
			for (var a of u(e)) t.indexOf(a) < 0 && O.call(e, a) && (s[a] = e[a]);
		return s;
	},
	p = (e, t, s) => {
		const a = c.forwardRef((i, m) => {
			var d = i,
				{
					color: n = "currentColor",
					size: l = 24,
					stroke: o = 2,
					children: f,
				} = d,
				g = te(d, ["color", "size", "stroke", "children"]);
			return c.createElement(
				"svg",
				k(
					re(k({ ref: m }, Z), {
						width: l,
						height: l,
						stroke: n,
						strokeWidth: o,
						className: `tabler-icon tabler-icon-${e}`,
					}),
					g,
				),
				[...s.map(([v, P]) => c.createElement(v, P)), ...(f || [])],
			);
		});
		return (
			(a.propTypes = {
				color: h.string,
				size: h.oneOfType([h.string, h.number]),
				stroke: h.oneOfType([h.string, h.number]),
			}),
			(a.displayName = `${t}`),
			a
		);
	},
	se = p("braces", "IconBraces", [
		[
			"path",
			{
				d: "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2",
				key: "svg-0",
			},
		],
		[
			"path",
			{
				d: "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2",
				key: "svg-1",
			},
		],
	]),
	ae = p("home", "IconHome", [
		["path", { d: "M5 12l-2 0l9 -9l9 9l-2 0", key: "svg-0" }],
		["path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7", key: "svg-1" }],
		["path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6", key: "svg-2" }],
	]),
	oe = p("moon", "IconMoon", [
		[
			"path",
			{
				d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
				key: "svg-0",
			},
		],
	]),
	b = p("package", "IconPackage", [
		["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }],
		["path", { d: "M12 12l8 -4.5", key: "svg-1" }],
		["path", { d: "M12 12l0 9", key: "svg-2" }],
		["path", { d: "M12 12l-8 -4.5", key: "svg-3" }],
		["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }],
	]),
	ne = p("search", "IconSearch", [
		["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
		["path", { d: "M21 21l-6 -6", key: "svg-1" }],
	]),
	le = p("sun", "IconSun", [
		["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
		[
			"path",
			{
				d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
				key: "svg-1",
			},
		],
	]),
	ie = p("table", "IconTable", [
		[
			"path",
			{
				d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
				key: "svg-0",
			},
		],
		["path", { d: "M3 10h18", key: "svg-1" }],
		["path", { d: "M10 3v18", key: "svg-2" }],
	]),
	ce = p("user", "IconUser", [
		["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
		["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
	]); /**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pe = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
}; /**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (e) =>
		e
			.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
			.toLowerCase()
			.trim(),
	de = (e, t) => {
		const s = c.forwardRef(
			(
				{
					color: a = "currentColor",
					size: i = 24,
					strokeWidth: m = 2,
					absoluteStrokeWidth: d,
					className: n = "",
					children: l,
					...o
				},
				f,
			) =>
				c.createElement(
					"svg",
					{
						ref: f,
						...pe,
						width: i,
						height: i,
						stroke: a,
						strokeWidth: d ? (Number(m) * 24) / Number(i) : m,
						className: ["lucide", `lucide-${me(e)}`, n].join(" "),
						...o,
					},
					[
						...t.map(([g, v]) => c.createElement(g, v)),
						...(Array.isArray(l) ? l : [l]),
					],
				),
		);
		return (s.displayName = `${e}`), s;
	}; /**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = de("Image", [
	[
		"rect",
		{
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2",
			ry: "2",
			key: "1m3agn",
		},
	],
	["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
	["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
function fe({ children: e }) {
	const [t, s] = F(N);
	return r.jsxs("div", {
		className: "h-screen flex flex-col w-full",
		children: [
			r.jsxs("header", {
				className:
					"flex h-16 gap-1 items-center border-b bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 md:px-6",
				children: [
					r.jsx("div", {
						className: "flex items-center gap-4 lg:gap-8",
						children: r.jsxs(x, {
							className: "flex items-center gap-2 text-lg font-semibold",
							to: "/",
							children: [
								r.jsx(b, { className: "h-6 w-6" }),
								r.jsx("span", { children: "SPA!" }),
							],
						}),
					}),
					r.jsx("div", {
						className: "flex-1 min-w-0 w-full mx-4 md:mx-6",
						children: r.jsx("form", {
							className: "w-full",
							children: r.jsxs("div", {
								className: "relative",
								children: [
									r.jsx(ne, {
										className:
											"absolute left-2.5 top-2.5 h-4 w-4 text-gray-300 dark:text-gray-700",
									}),
									r.jsx(U, {
										className: "bg-white w-full pl-8",
										placeholder: "特徴から探す",
										type: "search",
									}),
								],
							}),
						}),
					}),
					r.jsxs("div", {
						className: "flex items-center gap-3",
						children: [
							r.jsx(y, {
								className: "rounded-full",
								size: "icon",
								variant: "ghost",
								onClick: () => s((a) => !a),
								children: t ? r.jsx(oe, { size: 18 }) : r.jsx(le, { size: 18 }),
							}),
							r.jsxs(y, {
								className: "rounded-full",
								size: "icon",
								variant: "ghost",
								children: [
									r.jsx(ce, { size: 18 }),
									r.jsx("span", {
										className: "sr-only",
										children: "View profile",
									}),
								],
							}),
						],
					}),
				],
			}),
			r.jsxs("div", {
				className: "flex flex-1 overflow-hidden",
				children: [
					r.jsxs("div", {
						className:
							"hidden pr-4 md:flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40",
						children: [
							r.jsx("div", {
								className: "border-b",
								children: r.jsxs("nav", {
									className: "flex flex-col gap-1",
									children: [
										r.jsxs(x, {
											className:
												"flex w-full items-center gap-2 px-4 py-2 text-sm font-medium",
											to: "/",
											children: [
												r.jsx(ae, { className: "w-5" }),
												"トップページ",
											],
										}),
										r.jsxs(x, {
											className:
												"flex w-full items-center gap-2 px-4 py-2 text-sm font-medium",
											to: "/from-list",
											children: [
												r.jsx(ie, { className: "w-5" }),
												"一覧から探す",
											],
										}),
										r.jsxs(x, {
											className:
												"flex w-full items-center gap-2 px-4 py-2 text-sm font-medium",
											to: "/from-images",
											children: [
												r.jsx(he, { className: "w-5" }),
												"画像から探す",
											],
										}),
										r.jsxs(x, {
											className:
												"flex w-full items-center gap-2 px-4 py-2 text-sm font-medium",
											to: "/debug",
											children: [r.jsx(se, { className: "w-5" }), "DEBUG"],
										}),
									],
								}),
							}),
							r.jsx("div", { className: "flex-1 border-b border-t" }),
							r.jsx("div", {
								className: "flex grid place-items-center",
								children: r.jsxs(x, {
									className:
										"flex items-center gap-2 px-4 py-2 text-lg font-semibold",
									to: "/",
									children: [
										r.jsx(b, { className: "h-6 w-6" }),
										r.jsx("span", { children: "SPA!" }),
									],
								}),
							}),
						],
					}),
					r.jsx("main", {
						className: "flex-1 flex flex-col min-h-0 w-full overflow-auto",
						children: e,
					}),
				],
			}),
		],
	});
}
function ye({ children: e }) {
	const t = H(N);
	return r.jsxs("html", {
		className: t ? "dark" : "",
		lang: "ja",
		children: [
			r.jsxs("head", {
				children: [
					r.jsx("meta", { charSet: "utf-8" }),
					r.jsx("meta", {
						name: "viewport",
						content: "width=device-width, initial-scale=1",
					}),
					r.jsx(z, {}),
					r.jsx(W, {}),
				],
			}),
			r.jsxs("body", { children: [e, r.jsx(V, {}), r.jsx(B, {})] }),
		],
	});
}
function we() {
	return r.jsx(fe, { children: r.jsx($, {}) });
}
function je() {
	return r.jsx("p", { children: "Loading..." });
}
export { je as HydrateFallback, ye as Layout, we as default };
