import { R as te, r as A } from "./components-CKKW9ivY.js";
var p = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
let ne = 0;
function pe(t, s) {
	const l = `atom${++ne}`,
		h = { toString: () => l };
	return (
		typeof t == "function"
			? (h.read = t)
			: ((h.init = t), (h.read = oe), (h.write = re)),
		s && (h.write = s),
		h
	);
}
function oe(t) {
	return t(this);
}
function re(t, s, l) {
	return s(this, typeof l == "function" ? l(t(this)) : l);
}
const I = (t, s) => (t.unstable_is ? t.unstable_is(s) : s === t),
	U = (t) => "init" in t,
	B = (t) => !!t.write,
	N = new WeakMap(),
	se = (t, s) => {
		N.set(t, s), t.catch(() => {}).finally(() => N.delete(t));
	},
	x = (t, s) => {
		const l = N.get(t);
		l && (N.delete(t), l(s));
	},
	$ = (t, s) => {
		(t.status = "fulfilled"), (t.value = s);
	},
	G = (t, s) => {
		(t.status = "rejected"), (t.reason = s);
	},
	ie = (t) => typeof (t == null ? void 0 : t.then) == "function",
	O = (t, s) => !!t && "v" in t && "v" in s && Object.is(t.v, s.v),
	H = (t, s) => !!t && "e" in t && "e" in s && Object.is(t.e, s.e),
	R = (t) => !!t && "v" in t && t.v instanceof Promise,
	ue = (t, s) => "v" in t && "v" in s && t.v.orig && t.v.orig === s.v.orig,
	C = (t) => {
		if ("e" in t) throw t.e;
		return t.v;
	},
	K = () => {
		const t = new WeakMap(),
			s = new WeakMap(),
			l = [],
			h = new WeakMap();
		let g, b;
		(p ? "production" : void 0) !== "production" &&
			((g = new Set()), (b = new Set()));
		const _ = (e) => t.get(e),
			S = (e, o) => {
				o.d.forEach((c, u) => {
					var r;
					if (!h.has(u)) {
						const i = _(u);
						(r = l[l.length - 1]) == null || r.add(u),
							h.set(u, [i, new Set()]),
							i && S(u, i);
					}
					h.get(u)[1].add(e);
				});
			},
			y = (e, o) => {
				var c;
				(p ? "production" : void 0) !== "production" && Object.freeze(o);
				const u = _(e);
				if (
					(t.set(e, o),
					h.has(e) ||
						((c = l[l.length - 1]) == null || c.add(e),
						h.set(e, [u, new Set()]),
						S(e, o)),
					R(u))
				) {
					const r =
						"v" in o
							? o.v instanceof Promise
								? o.v
								: Promise.resolve(o.v)
							: Promise.reject(o.e);
					u.v !== r && x(u.v, r);
				}
			},
			E = (e, o, c, u) => {
				const r = new Map(u ? o.d : null);
				let i = !1;
				c.forEach((n, d) => {
					!n && I(e, d) && (n = o),
						n
							? (r.set(d, n), o.d.get(d) !== n && (i = !0))
							: (p ? "production" : void 0) !== "production" &&
							  console.warn("[Bug] atom state not found");
				}),
					(i || o.d.size !== r.size) && (o.d = r);
			},
			P = (e, o, c, u) => {
				const r = _(e),
					i = { d: (r == null ? void 0 : r.d) || new Map(), v: o };
				if ((c && E(e, i, c, u), O(r, i) && r.d === i.d)) return r;
				if (R(r) && R(i) && ue(r, i)) {
					if (r.d === i.d) return r;
					i.v = r.v;
				}
				return y(e, i), i;
			},
			V = (e, o, c, u) => {
				if (ie(o)) {
					let r;
					const i = () => {
							const d = _(e);
							if (!R(d) || d.v !== n) return;
							const v = P(e, n, c);
							s.has(e) && d.d !== v.d && J(e, v, d.d);
						},
						n = new Promise((d, v) => {
							let f = !1;
							o.then(
								(a) => {
									f || ((f = !0), $(n, a), d(a), i());
								},
								(a) => {
									f || ((f = !0), G(n, a), v(a), i());
								},
							),
								(r = (a) => {
									f ||
										((f = !0),
										a.then(
											(w) => $(n, w),
											(w) => G(n, w),
										),
										d(a));
								});
						});
					return (
						(n.orig = o),
						(n.status = "pending"),
						se(n, (d) => {
							d && r(d), u == null || u();
						}),
						P(e, n, c, !0)
					);
				}
				return P(e, o, c);
			},
			Z = (e, o, c) => {
				const u = _(e),
					r = { d: (u == null ? void 0 : u.d) || new Map(), e: o };
				return c && E(e, r, c), H(u, r) && u.d === r.d ? u : (y(e, r), r);
			},
			M = (e, o) => {
				const c = _(e);
				if (
					!o &&
					c &&
					(s.has(e) ||
						Array.from(c.d).every(([f, a]) => {
							if (f === e) return !0;
							const w = M(f);
							return w === a || O(w, a);
						}))
				)
					return c;
				const u = new Map();
				let r = !0;
				const i = (f) => {
					if (I(e, f)) {
						const w = _(f);
						if (w) return u.set(f, w), C(w);
						if (U(f)) return u.set(f, void 0), f.init;
						throw new Error("no atom init");
					}
					const a = M(f);
					return u.set(f, a), C(a);
				};
				let n, d;
				const v = {
					get signal() {
						return n || (n = new AbortController()), n.signal;
					},
					get setSelf() {
						return (
							(p ? "production" : void 0) !== "production" &&
								!B(e) &&
								console.warn(
									"setSelf function cannot be used with read-only atom",
								),
							!d &&
								B(e) &&
								(d = (...f) => {
									if (
										((p ? "production" : void 0) !== "production" &&
											r &&
											console.warn("setSelf function cannot be called in sync"),
										!r)
									)
										return k(e, ...f);
								}),
							d
						);
					},
				};
				try {
					const f = e.read(i, v);
					return V(e, f, u, () => (n == null ? void 0 : n.abort()));
				} catch (f) {
					return Z(e, f, u);
				} finally {
					r = !1;
				}
			},
			z = (e) => C(M(e)),
			Q = (e) => {
				let o = s.get(e);
				return o || (o = D(e)), o;
			},
			m = (e, o) => !o.l.size && (!o.t.size || (o.t.size === 1 && o.t.has(e))),
			ee = (e) => {
				const o = s.get(e);
				o && m(e, o) && j(e);
			},
			L = (e) => {
				const o = (n) => {
						var d, v;
						const f = new Set((d = s.get(n)) == null ? void 0 : d.t);
						return (
							(v = h.get(n)) == null ||
								v[1].forEach((a) => {
									f.add(a);
								}),
							f
						);
					},
					c = new Array(),
					u = new Set(),
					r = (n) => {
						if (!u.has(n)) {
							u.add(n);
							for (const d of o(n)) n !== d && r(d);
							c.push(n);
						}
					};
				r(e);
				const i = new Set([e]);
				for (let n = c.length - 1; n >= 0; --n) {
					const d = c[n],
						v = _(d);
					if (!v) continue;
					let f = !1;
					for (const a of v.d.keys())
						if (a !== d && i.has(a)) {
							f = !0;
							break;
						}
					if (f) {
						const a = M(d, !0);
						O(v, a) || i.add(d);
					}
				}
			},
			W = (e, ...o) => {
				let c = !0;
				const u = (n) => C(M(n)),
					r = (n, ...d) => {
						let v;
						if (I(e, n)) {
							if (!U(n)) throw new Error("atom not writable");
							const f = _(n),
								a = V(n, d[0]);
							O(f, a) || L(n);
						} else v = W(n, ...d);
						if (!c) {
							const f = T([n]);
							(p ? "production" : void 0) !== "production" &&
								g.forEach((a) => a({ type: "async-write", flushed: f }));
						}
						return v;
					},
					i = e.write(u, r, ...o);
				return (c = !1), i;
			},
			k = (e, ...o) => {
				l.push(new Set([e]));
				const c = W(e, ...o),
					u = T(l.pop());
				return (
					(p ? "production" : void 0) !== "production" &&
						g.forEach((r) => r({ type: "write", flushed: u })),
					c
				);
			},
			D = (e, o, c) => {
				var u;
				const r = c || [];
				(u = _(e)) == null ||
					u.d.forEach((n, d) => {
						const v = s.get(d);
						v ? v.t.add(e) : d !== e && D(d, e, r);
					}),
					M(e);
				const i = { t: new Set(o && [o]), l: new Set() };
				if (
					(s.set(e, i),
					(p ? "production" : void 0) !== "production" && b.add(e),
					B(e) && e.onMount)
				) {
					const { onMount: n } = e;
					r.push(() => {
						const d = n((...v) => k(e, ...v));
						d && (i.u = d);
					});
				}
				return c || r.forEach((n) => n()), i;
			},
			j = (e) => {
				var o;
				const c = (o = s.get(e)) == null ? void 0 : o.u;
				c && c(),
					s.delete(e),
					(p ? "production" : void 0) !== "production" && b.delete(e);
				const u = _(e);
				u
					? (R(u) && x(u.v),
					  u.d.forEach((r, i) => {
							if (i !== e) {
								const n = s.get(i);
								n && (n.t.delete(e), m(i, n) && j(i));
							}
					  }))
					: (p ? "production" : void 0) !== "production" &&
					  console.warn("[Bug] could not find atom state to unmount", e);
			},
			J = (e, o, c) => {
				const u = new Set(o.d.keys()),
					r = new Set();
				c == null ||
					c.forEach((i, n) => {
						if (u.has(n)) {
							u.delete(n);
							return;
						}
						r.add(n);
						const d = s.get(n);
						d && d.t.delete(e);
					}),
					u.forEach((i) => {
						const n = s.get(i);
						n ? n.t.add(e) : s.has(e) && D(i, e);
					}),
					r.forEach((i) => {
						const n = s.get(i);
						n && m(i, n) && j(i);
					});
			},
			T = (e) => {
				let o;
				(p ? "production" : void 0) !== "production" && (o = new Set());
				const c = [],
					u = (r) => {
						var i;
						if (!h.has(r)) return;
						const [n, d] = h.get(r);
						h.delete(r),
							c.push([r, n]),
							d.forEach(u),
							(i = _(r)) == null || i.d.forEach((v, f) => u(f));
					};
				if (
					(e.forEach(u),
					c.forEach(([r, i]) => {
						const n = _(r);
						if (!n) {
							(p ? "production" : void 0) !== "production" &&
								console.warn("[Bug] no atom state to flush");
							return;
						}
						if (n !== i) {
							const d = s.get(r);
							d &&
								n.d !== (i == null ? void 0 : i.d) &&
								J(r, n, i == null ? void 0 : i.d),
								d &&
									!(!R(i) && (O(i, n) || H(i, n))) &&
									(d.l.forEach((v) => v()),
									(p ? "production" : void 0) !== "production" && o.add(r));
						}
					}),
					(p ? "production" : void 0) !== "production")
				)
					return o;
			},
			q = (e, o) => {
				const c = Q(e),
					u = T([e]),
					r = c.l;
				return (
					r.add(o),
					(p ? "production" : void 0) !== "production" &&
						g.forEach((i) => i({ type: "sub", flushed: u })),
					() => {
						r.delete(o),
							ee(e),
							(p ? "production" : void 0) !== "production" &&
								g.forEach((i) => i({ type: "unsub" }));
					}
				);
			};
		return (p ? "production" : void 0) !== "production"
			? {
					get: z,
					set: k,
					sub: q,
					dev_subscribe_store: (e, o) => {
						if (o !== 2)
							throw new Error("The current StoreListener revision is 2.");
						return (
							g.add(e),
							() => {
								g.delete(e);
							}
						);
					},
					dev_get_mounted_atoms: () => b.values(),
					dev_get_atom_state: (e) => t.get(e),
					dev_get_mounted: (e) => s.get(e),
					dev_restore_atoms: (e) => {
						l.push(new Set());
						for (const [c, u] of e) U(c) && (V(c, u), L(c));
						const o = T(l.pop());
						g.forEach((c) => c({ type: "restore", flushed: o }));
					},
			  }
			: { get: z, set: k, sub: q };
	};
let F;
(p ? "production" : void 0) !== "production" &&
	(typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ == "number"
		? ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__
		: (globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1));
const ce = () => (
	F ||
		((p ? "production" : void 0) !== "production" &&
			globalThis.__NUMBER_OF_JOTAI_INSTANCES__ !== 1 &&
			console.warn(
				"Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044",
			),
		(F = K())),
	F
);
var de = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const X = A.createContext(void 0),
	Y = (t) => {
		const s = A.useContext(X);
		return (t == null ? void 0 : t.store) || s || ce();
	},
	_e = ({ children: t, store: s }) => {
		const l = A.useRef();
		return (
			!s && !l.current && (l.current = K()),
			A.createElement(X.Provider, { value: s || l.current }, t)
		);
	},
	fe = (t) => typeof (t == null ? void 0 : t.then) == "function",
	le =
		te.use ||
		((t) => {
			if (t.status === "pending") throw t;
			if (t.status === "fulfilled") return t.value;
			throw t.status === "rejected"
				? t.reason
				: ((t.status = "pending"),
				  t.then(
						(s) => {
							(t.status = "fulfilled"), (t.value = s);
						},
						(s) => {
							(t.status = "rejected"), (t.reason = s);
						},
				  ),
				  t);
		});
function ae(t, s) {
	const l = Y(s),
		[[h, g, b], _] = A.useReducer(
			(E) => {
				const P = l.get(t);
				return Object.is(E[0], P) && E[1] === l && E[2] === t ? E : [P, l, t];
			},
			void 0,
			() => [l.get(t), l, t],
		);
	let S = h;
	(g !== l || b !== t) && (_(), (S = l.get(t)));
	const y = s == null ? void 0 : s.delay;
	return (
		A.useEffect(() => {
			const E = l.sub(t, () => {
				if (typeof y == "number") {
					setTimeout(_, y);
					return;
				}
				_();
			});
			return _(), E;
		}, [l, t, y]),
		A.useDebugValue(S),
		fe(S) ? le(S) : S
	);
}
function ve(t, s) {
	const l = Y(s);
	return A.useCallback(
		(...g) => {
			if ((de ? "production" : void 0) !== "production" && !("write" in t))
				throw new Error("not writable atom");
			return l.set(t, ...g);
		},
		[l, t],
	);
}
function ge(t, s) {
	return [ae(t, s), ve(t, s)];
}
export { _e as P, pe as a, ae as b, ge as u };
