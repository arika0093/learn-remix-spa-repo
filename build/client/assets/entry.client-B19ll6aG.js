import {
	A as Z,
	D as q,
	E as C,
	S as Q,
	b as K,
	c as O,
	d as te,
	e as re,
	f as oe,
	g as ie,
	h as ae,
	i as G,
	j as M,
	k as le,
	l as ee,
	m as ne,
	n as se,
	o as de,
	p as X,
	r as l,
} from "./components-CKKW9ivY.js";
import { P as ue } from "./react-C5P5sJd_.js"; /**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class ce extends l.Component {
	constructor(r) {
		super(r), (this.state = { error: r.error || null, location: r.location });
	}
	static getDerivedStateFromError(r) {
		return { error: r };
	}
	static getDerivedStateFromProps(r, t) {
		return t.location !== r.location
			? { error: r.error || null, location: r.location }
			: { error: r.error || t.error, location: t.location };
	}
	render() {
		return this.state.error
			? l.createElement(z, { error: this.state.error })
			: this.props.children;
	}
}
function z({ error: e }) {
	console.error(e);
	const r = l.createElement("script", {
		dangerouslySetInnerHTML: {
			__html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
		},
	});
	if (G(e))
		return l.createElement(
			A,
			{ title: "Unhandled Thrown Response!" },
			l.createElement(
				"h1",
				{ style: { fontSize: "24px" } },
				e.status,
				" ",
				e.statusText,
			),
			r,
		);
	let t;
	if (e instanceof Error) t = e;
	else {
		const o =
			e == null
				? "Unknown Error"
				: typeof e == "object" && "toString" in e
				  ? e.toString()
				  : JSON.stringify(e);
		t = new Error(o);
	}
	return l.createElement(
		A,
		{ title: "Application Error!" },
		l.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
		l.createElement(
			"pre",
			{
				style: {
					padding: "2rem",
					background: "hsla(10, 50%, 50%, 0.1)",
					color: "red",
					overflow: "auto",
				},
			},
			t.stack,
		),
		r,
	);
}
function A({ title: e, renderScripts: r, children: t }) {
	var o;
	const { routeModules: n } = K();
	return (o = n.root) !== null && o !== void 0 && o.Layout
		? t
		: l.createElement(
				"html",
				{ lang: "en" },
				l.createElement(
					"head",
					null,
					l.createElement("meta", { charSet: "utf-8" }),
					l.createElement("meta", {
						name: "viewport",
						content: "width=device-width,initial-scale=1,viewport-fit=cover",
					}),
					l.createElement("title", null, e),
				),
				l.createElement(
					"body",
					null,
					l.createElement(
						"main",
						{ style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
						t,
						r ? l.createElement(Q, null) : null,
					),
				),
		  );
} /**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fe(e) {
	if (!e) return null;
	const r = Object.entries(e),
		t = {};
	for (const [o, n] of r)
		if (n && n.__type === "RouteErrorResponse")
			t[o] = new C(n.status, n.statusText, n.data, n.internal === !0);
		else if (n && n.__type === "Error") {
			if (n.__subType) {
				const s = window[n.__subType];
				if (typeof s == "function")
					try {
						const d = new s(n.message);
						(d.stack = n.stack), (t[o] = d);
					} catch {}
			}
			if (t[o] == null) {
				const s = new Error(n.message);
				(s.stack = n.stack), (t[o] = s);
			}
		} else t[o] = n;
	return t;
} /**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function me(e) {
	return e.headers.get("X-Remix-Catch") != null;
}
function we(e) {
	return e.headers.get("X-Remix-Error") != null;
}
function he(e) {
	return (
		U(e) &&
		e.status >= 400 &&
		e.headers.get("X-Remix-Error") == null &&
		e.headers.get("X-Remix-Catch") == null &&
		e.headers.get("X-Remix-Response") == null
	);
}
function _e(e) {
	return e.headers.get("X-Remix-Redirect") != null;
}
function ye(e) {
	var r;
	return !!(
		(r = e.headers.get("Content-Type")) !== null &&
		r !== void 0 &&
		r.match(/text\/remix-deferred/)
	);
}
function U(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function Re(e) {
	const r = e;
	return (
		r &&
		typeof r == "object" &&
		typeof r.data == "object" &&
		typeof r.subscribe == "function" &&
		typeof r.cancel == "function" &&
		typeof r.resolveData == "function"
	);
}
async function N(e, r, t = 0) {
	const o = new URL(e.url);
	o.searchParams.set("_data", r);
	const n = { signal: e.signal };
	if (e.method !== "GET") {
		n.method = e.method;
		const a = e.headers.get("Content-Type");
		a && /\bapplication\/json\b/.test(a)
			? ((n.headers = { "Content-Type": a }),
			  (n.body = JSON.stringify(await e.json())))
			: a && /\btext\/plain\b/.test(a)
			  ? ((n.headers = { "Content-Type": a }), (n.body = await e.text()))
			  : a && /\bapplication\/x-www-form-urlencoded\b/.test(a)
				  ? (n.body = new URLSearchParams(await e.text()))
				  : (n.body = await e.formData());
	}
	t > 0 && (await new Promise((a) => setTimeout(a, 5 ** t * 10)));
	const s = window.__remixRevalidation,
		d = await fetch(o.href, n).catch((a) => {
			if (
				typeof s == "number" &&
				s === window.__remixRevalidation &&
				(a == null ? void 0 : a.name) === "TypeError" &&
				t < 3
			)
				return N(e, r, t + 1);
			throw a;
		});
	if (we(d)) {
		const a = await d.json(),
			i = new Error(a.message);
		return (i.stack = a.stack), i;
	}
	if (he(d)) {
		const a = await d.text(),
			i = new Error(a);
		return (i.stack = void 0), i;
	}
	return d;
}
const pe = "__deferred_promise:";
async function ve(e) {
	if (!e)
		throw new Error("parseDeferredReadableStream requires stream argument");
	let r,
		t = {};
	try {
		const o = xe(e),
			s = (await o.next()).value;
		if (!s) throw new Error("no critical data");
		const d = JSON.parse(s);
		if (typeof d == "object" && d !== null)
			for (const [a, i] of Object.entries(d))
				typeof i != "string" ||
					!i.startsWith(pe) ||
					((r = r || {}),
					(r[a] = new Promise((u, _) => {
						t[a] = {
							resolve: (c) => {
								u(c), delete t[a];
							},
							reject: (c) => {
								_(c), delete t[a];
							},
						};
					})));
		return (
			(async () => {
				try {
					for await (const a of o) {
						const [i, ...u] = a.split(":"),
							_ = u.join(":"),
							c = JSON.parse(_);
						if (i === "data")
							for (const [h, f] of Object.entries(c)) t[h] && t[h].resolve(f);
						else if (i === "error")
							for (const [h, f] of Object.entries(c)) {
								const x = new Error(f.message);
								(x.stack = f.stack), t[h] && t[h].reject(x);
							}
					}
					for (const [a, i] of Object.entries(t))
						i.reject(new Z(`Deferred ${a} will never be resolved`));
				} catch (a) {
					for (const i of Object.values(t)) i.reject(a);
				}
			})(),
			new q({ ...d, ...r })
		);
	} catch (o) {
		for (const n of Object.values(t)) n.reject(o);
		throw o;
	}
}
async function* xe(e) {
	let r = e.getReader(),
		t = [],
		o = [],
		n = !1,
		s = new TextEncoder(),
		d = new TextDecoder(),
		a = async () => {
			if (o.length > 0) return o.shift();
			while (!n && o.length === 0) {
				const u = await r.read();
				if (u.done) {
					n = !0;
					break;
				}
				t.push(u.value);
				try {
					const c = d.decode(T(...t)).split(`

`);
					if (
						(c.length >= 2 &&
							(o.push(...c.slice(0, -1)),
							(t = [
								s.encode(
									c.slice(-1).join(`

`),
								),
							])),
						o.length > 0)
					)
						break;
				} catch {
					continue;
				}
			}
			return (
				o.length > 0 ||
					(t.length > 0 &&
						((o = d
							.decode(T(...t))
							.split(`

`)
							.filter((_) => _)),
						(t = []))),
				o.shift()
			);
		},
		i = await a();
	while (i) yield i, (i = await a());
}
function T(...e) {
	let r = new Uint8Array(e.reduce((o, n) => o + n.length, 0)),
		t = 0;
	for (const o of e) r.set(o, t), (t += o.length);
	return r;
} /**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ee() {
	return l.createElement(
		A,
		{ title: "Loading...", renderScripts: !0 },
		l.createElement("script", {
			dangerouslySetInnerHTML: {
				__html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `,
			},
		}),
	);
} /**
 * @remix-run/react v2.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function J(e) {
	const r = {};
	return (
		Object.values(e).forEach((t) => {
			const o = t.parentId || "";
			r[o] || (r[o] = []), r[o].push(t);
		}),
		r
	);
}
function be(e, r, t) {
	const o = W(r),
		n =
			r.HydrateFallback && (!t || e.id === "root")
				? r.HydrateFallback
				: e.id === "root"
				  ? Ee
				  : void 0,
		s = r.ErrorBoundary
			? r.ErrorBoundary
			: e.id === "root"
			  ? () => l.createElement(z, { error: te() })
			  : void 0;
	return e.id === "root" && r.Layout
		? {
				...(o
					? { element: l.createElement(r.Layout, null, l.createElement(o)) }
					: { Component: o }),
				...(s
					? {
							errorElement: l.createElement(r.Layout, null, l.createElement(s)),
					  }
					: { ErrorBoundary: s }),
				...(n
					? {
							hydrateFallbackElement: l.createElement(
								r.Layout,
								null,
								l.createElement(n),
							),
					  }
					: { HydrateFallback: n }),
		  }
		: { Component: o, ErrorBoundary: s, HydrateFallback: n };
}
function ge(e, r, t, o, n, s) {
	return P(r, t, o, n, s, "", J(r), e);
}
function b(e, r, t) {
	if (t) {
		const d = `You cannot call ${
			e === "action" ? "serverAction()" : "serverLoader()"
		} in SPA Mode (routeId: "${r.id}")`;
		throw (console.error(d), new C(400, "Bad Request", new Error(d), !0));
	}
	const n = `You are trying to call ${
		e === "action" ? "serverAction()" : "serverLoader()"
	} on a route that does not have a server ${e} (routeId: "${r.id}")`;
	if ((e === "loader" && !r.hasLoader) || (e === "action" && !r.hasAction))
		throw (console.error(n), new C(400, "Bad Request", new Error(n), !0));
}
function j(e, r) {
	const t = e === "clientAction" ? "a" : "an",
		o = `Route "${r}" does not have ${t} ${e}, but you are trying to submit to it. To fix this, please add ${t} \`${e}\` function to the route`;
	throw (console.error(o), new C(405, "Method Not Allowed", new Error(o), !0));
}
function P(e, r, t, o, n, s = "", d = J(e), a) {
	return (d[s] || []).map((i) => {
		const u = r[i.id];
		async function _(m) {
			return i.hasLoader ? F(m, i) : null;
		}
		async function c(m) {
			if (!i.hasAction) throw j("action", i.id);
			return F(m, i);
		}
		async function h(m) {
			const w = r[i.id],
				p = w ? X(i, w) : Promise.resolve();
			try {
				return m();
			} finally {
				await p;
			}
		}
		const f = { id: i.id, index: i.index, path: i.path };
		if (u) {
			var x, k, L;
			Object.assign(f, {
				...f,
				...be(i, u, n),
				handle: u.handle,
				shouldRevalidate: a
					? B(i.id, u.shouldRevalidate, a)
					: u.shouldRevalidate,
			});
			let m =
					t == null || (x = t.loaderData) === null || x === void 0
						? void 0
						: x[i.id],
				w =
					t == null || (k = t.errors) === null || k === void 0
						? void 0
						: k[i.id],
				p =
					a == null &&
					(((L = u.clientLoader) === null || L === void 0
						? void 0
						: L.hydrate) === !0 ||
						!i.hasLoader);
			(f.loader = async ({ request: y, params: v }) => {
				try {
					return await h(
						async () => (
							O(u, "No `routeModule` available for critical-route loader"),
							u.clientLoader
								? u.clientLoader({
										request: y,
										params: v,
										async serverLoader() {
											if ((b("loader", i, n), p)) {
												if (w !== void 0) throw w;
												return m;
											}
											const H = await _(y);
											return await g(H);
										},
								  })
								: n
								  ? null
								  : _(y)
						),
					);
				} finally {
					p = !1;
				}
			}),
				(f.loader.hydrate = Y(i, u, n)),
				(f.action = ({ request: y, params: v }) =>
					h(async () => {
						if (
							(O(u, "No `routeModule` available for critical-route action"),
							!u.clientAction)
						) {
							if (n) throw j("clientAction", i.id);
							return c(y);
						}
						return u.clientAction({
							request: y,
							params: v,
							async serverAction() {
								b("action", i, n);
								const E = await c(y);
								return await g(E);
							},
						});
					}));
		} else
			i.hasClientLoader ||
				(f.loader = ({ request: m }) =>
					h(() => (n ? Promise.resolve(null) : _(m)))),
				i.hasClientAction ||
					(f.action = ({ request: m }) =>
						h(() => {
							if (n) throw j("clientAction", i.id);
							return c(m);
						})),
				(f.lazy = async () => {
					const m = await Ce(i, r),
						w = { ...m };
					if (m.clientLoader) {
						const p = m.clientLoader;
						w.loader = (y) =>
							p({
								...y,
								async serverLoader() {
									b("loader", i, n);
									const v = await _(y.request);
									return await g(v);
								},
							});
					}
					if (m.clientAction) {
						const p = m.clientAction;
						w.action = (y) =>
							p({
								...y,
								async serverAction() {
									b("action", i, n);
									const v = await c(y.request);
									return await g(v);
								},
							});
					}
					return (
						a && (w.shouldRevalidate = B(i.id, m.shouldRevalidate, a)),
						{
							...(w.loader ? { loader: w.loader } : {}),
							...(w.action ? { action: w.action } : {}),
							hasErrorBoundary: w.hasErrorBoundary,
							shouldRevalidate: w.shouldRevalidate,
							handle: w.handle,
							Component: w.Component,
							ErrorBoundary: w.ErrorBoundary,
						}
					);
				});
		const $ = P(e, r, t, o, n, i.id, d, a);
		return $.length > 0 && (f.children = $), f;
	});
}
function B(e, r, t) {
	let o = !1;
	return (n) =>
		o ? (r ? r(n) : n.defaultShouldRevalidate) : ((o = !0), t.has(e));
}
async function Ce(e, r) {
	const t = await ee(e, r);
	return (
		await X(e, t),
		{
			Component: W(t),
			ErrorBoundary: t.ErrorBoundary,
			clientAction: t.clientAction,
			clientLoader: t.clientLoader,
			handle: t.handle,
			links: t.links,
			meta: t.meta,
			shouldRevalidate: t.shouldRevalidate,
		}
	);
}
async function F(e, r) {
	const t = await N(e, r.id);
	if (t instanceof Error) throw t;
	if (_e(t)) throw ke(t);
	if (me(t)) throw t;
	return ye(t) && t.body ? await ve(t.body) : t;
}
function g(e) {
	if (Re(e)) return e.data;
	if (U(e)) {
		const r = e.headers.get("Content-Type");
		return r && /\bapplication\/json\b/.test(r) ? e.json() : e.text();
	}
	return e;
}
function ke(e) {
	const r = parseInt(e.headers.get("X-Remix-Status"), 10) || 302,
		t = e.headers.get("X-Remix-Redirect"),
		o = {},
		n = e.headers.get("X-Remix-Revalidate");
	n && (o["X-Remix-Revalidate"] = n);
	const s = e.headers.get("X-Remix-Reload-Document");
	return (
		s && (o["X-Remix-Reload-Document"] = s), re(t, { status: r, headers: o })
	);
}
function W(e) {
	if (e.default == null) return;
	if (!(typeof e.default == "object" && Object.keys(e.default).length === 0))
		return e.default;
}
function Y(e, r, t) {
	return (
		(t && e.id !== "root") ||
		(r.clientLoader != null &&
			(r.clientLoader.hydrate === !0 || e.hasLoader !== !0))
	);
}
let R,
	S = !1;
let D,
	De = new Promise((e) => {
		D = e;
	}).catch(() => {});
function Le(e) {
	if (!R) {
		const s = window.__remixContext.url,
			d = window.location.pathname;
		if (s !== d && !window.__remixContext.isSpaMode) {
			const u = `Initial URL (${s}) does not match URL at time of hydration (${d}), reloading page...`;
			return (
				console.error(u),
				window.location.reload(),
				l.createElement(l.Fragment, null)
			);
		}
		let a = P(
				window.__remixManifest.routes,
				window.__remixRouteModules,
				window.__remixContext.state,
				window.__remixContext.future,
				window.__remixContext.isSpaMode,
			),
			i;
		if (!window.__remixContext.isSpaMode) {
			i = {
				...window.__remixContext.state,
				loaderData: { ...window.__remixContext.state.loaderData },
			};
			const u = ne(a, window.location);
			if (u)
				for (const _ of u) {
					const c = _.route.id,
						h = window.__remixRouteModules[c],
						f = window.__remixManifest.routes[c];
					h &&
					Y(f, h, window.__remixContext.isSpaMode) &&
					(h.HydrateFallback || !f.hasLoader)
						? (i.loaderData[c] = void 0)
						: f && !f.hasLoader && (i.loaderData[c] = null);
				}
			i && i.errors && (i.errors = fe(i.errors));
		}
		(R = oe({
			routes: a,
			history: ie(),
			basename: window.__remixContext.basename,
			future: {
				v7_normalizeFormMethod: !0,
				v7_fetcherPersist: window.__remixContext.future.v3_fetcherPersist,
				v7_partialHydration: !0,
				v7_prependBasename: !0,
				v7_relativeSplatPath: window.__remixContext.future.v3_relativeSplatPath,
			},
			hydrationData: i,
			mapRouteProperties: ae,
		})),
			R.state.initialized && ((S = !0), R.initialize()),
			(R.createRoutesForHMR = ge),
			(window.__remixRouter = R),
			D && D(R);
	}
	const [r, t] = l.useState(void 0),
		[o, n] = l.useState(R.state.location);
	return (
		l.useLayoutEffect(() => {
			S || ((S = !0), R.initialize());
		}, []),
		l.useLayoutEffect(
			() =>
				R.subscribe((s) => {
					s.location !== o && n(s.location);
				}),
			[o],
		),
		l.createElement(
			le.Provider,
			{
				value: {
					manifest: window.__remixManifest,
					routeModules: window.__remixRouteModules,
					future: window.__remixContext.future,
					criticalCss: r,
					isSpaMode: window.__remixContext.isSpaMode,
				},
			},
			l.createElement(
				ce,
				{ location: o },
				l.createElement(se, {
					router: R,
					fallbackElement: null,
					future: { v7_startTransition: !0 },
				}),
			),
		)
	);
}
var V,
	I = de;
I.createRoot, (V = I.hydrateRoot);
l.startTransition(() => {
	V(
		document,
		M.jsx(l.StrictMode, { children: M.jsx(ue, { children: M.jsx(Le, {}) }) }),
	);
});
