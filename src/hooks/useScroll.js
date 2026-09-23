import { o as e } from '../lib/jsxRuntime.js';
import { t } from '../lib/react.js';
import {
  B as n,
  C as r,
  D as i,
  F as a,
  L as o,
  M as s,
  N as c,
  R as l,
  S as u,
  T as d,
  U as f,
  W as p,
  b as m,
  d as h,
  j as g,
  p as ee,
  z as _,
} from '../lib/framerMotion.js';
function v(e, t) {
  let n,
    r = () => {
      let { currentTime: r } = t,
        i = (r === null ? 0 : r.value) / 100;
      (n !== i && e(i), (n = i));
    };
  return (s.preUpdate(r, !0), () => g(r));
}
var y = e(t(), 1);
function b(e) {
  return typeof window > `u` ? !1 : e ? r() : u();
}
var x = 50,
  S = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  C = () => ({ time: 0, x: S(), y: S() }),
  te = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } };
function w(e, t, n, r) {
  let i = n[t],
    { length: s, position: c } = te[t],
    l = i.current,
    u = n.time;
  ((i.current = Math.abs(e[`scroll${c}`])),
    (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = o(0, i.scrollLength, i.current)));
  let d = r - u;
  i.velocity = d > x ? 0 : a(i.current - l, d);
}
function T(e, t, n) {
  (w(e, `x`, t, n), w(e, `y`, t, n), (t.time = n));
}
function E(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (ee(r)) ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === `svg`) {
      let e = r.getBoundingClientRect();
      r = r.parentElement;
      let t = r.getBoundingClientRect();
      ((n.x += e.left - t.left), (n.y += e.top - t.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: e, y: t } = r.getBBox();
      ((n.x += e), (n.y += t));
      let i = null,
        a = r.parentNode;
      for (; !i;) (a.tagName === `svg` && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return n;
}
var D = { start: 0, center: 0.5, end: 1 };
function O(e, t, n = 0) {
  let r = 0;
  if ((e in D && (e = D[e]), typeof e == `string`)) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (typeof e == `number` && (r = t * e), n + r);
}
var k = [0, 0];
function A(e, t, n, r) {
  let i = Array.isArray(e) ? e : k,
    a = 0,
    o = 0;
  return (
    typeof e == `number`
      ? (i = [e, e])
      : typeof e == `string` &&
        ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, D[e] ? e : `0`])),
    (a = O(i[0], n, r)),
    (o = O(i[1], t)),
    a - o
  );
}
var j = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  M = { x: 0, y: 0 };
function N(e) {
  return `getBBox` in e && e.tagName !== `svg`
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function ne(e, t, r) {
  let { offset: a = j.All } = r,
    { target: o = e, axis: s = `y` } = r,
    c = s === `y` ? `height` : `width`,
    l = o === e ? M : E(o, e),
    u = o === e ? { width: e.scrollWidth, height: e.scrollHeight } : N(o),
    f = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let p = !t[s].interpolate,
    m = a.length;
  for (let e = 0; e < m; e++) {
    let n = A(a[e], f[c], u[c], l[s]);
    (!p && n !== t[s].interpolatorOffsets[e] && (p = !0), (t[s].offset[e] = n));
  }
  (p &&
    ((t[s].interpolate = i(t[s].offset, d(a), { clamp: !1 })),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = n(0, 1, t[s].interpolate(t[s].current))));
}
function re(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e;)
      ((n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function ie(e, t, n, r = {}) {
  return {
    measure: (t) => {
      (re(e, r.target, n), T(e, n, t), (r.offset || r.target) && ne(e, n, r));
    },
    notify: () => t(n),
  };
}
var P = new WeakMap(),
  F = new WeakMap(),
  I = new WeakMap(),
  L = new WeakMap(),
  R = new WeakMap(),
  z = (e) => (e === document.scrollingElement ? window : e);
function B(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...r } = {}) {
  if (!t) return l;
  let i = I.get(t);
  i || ((i = new Set()), I.set(t, i));
  let a = ie(t, e, C(), r);
  if ((i.add(a), !P.has(t))) {
    let e = () => {
        for (let e of i) e.measure(c.timestamp);
        s.preUpdate(n);
      },
      n = () => {
        for (let e of i) e.notify();
      },
      r = () => s.read(e);
    P.set(t, r);
    let a = z(t);
    (window.addEventListener(`resize`, r),
      t !== document.documentElement && F.set(t, h(t, r)),
      a.addEventListener(`scroll`, r),
      r());
  }
  if (n && !R.has(t)) {
    let e = P.get(t),
      n = { width: t.scrollWidth, height: t.scrollHeight };
    L.set(t, n);
    let r = s.read(() => {
      let r = t.scrollWidth,
        i = t.scrollHeight;
      (n.width !== r || n.height !== i) && (e(), (n.width = r), (n.height = i));
    }, !0);
    R.set(t, r);
  }
  let o = P.get(t);
  return (
    s.read(o, !1, !0),
    () => {
      g(o);
      let e = I.get(t);
      if (!e || (e.delete(a), e.size)) return;
      let n = P.get(t);
      (P.delete(t),
        n &&
          (z(t).removeEventListener(`scroll`, n),
          F.get(t)?.(),
          window.removeEventListener(`resize`, n)));
      let r = R.get(t);
      (r && (g(r), R.delete(t)), L.delete(t));
    }
  );
}
var V = [
    [j.Enter, `entry`],
    [j.Exit, `exit`],
    [j.Any, `cover`],
    [j.All, `contain`],
  ],
  H = { start: 0, end: 1 };
function U(e) {
  let t = e.trim().split(/\s+/);
  if (t.length !== 2) return;
  let n = H[t[0]],
    r = H[t[1]];
  if (!(n === void 0 || r === void 0)) return [n, r];
}
function W(e) {
  if (e.length !== 2) return;
  let t = [];
  for (let n of e)
    if (Array.isArray(n)) t.push(n);
    else if (typeof n == `string`) {
      let e = U(n);
      if (!e) return;
      t.push(e);
    } else return;
  return t;
}
function G(e, t) {
  let n = W(e);
  if (!n) return !1;
  for (let e = 0; e < 2; e++) {
    let r = n[e],
      i = t[e];
    if (r[0] !== i[0] || r[1] !== i[1]) return !1;
  }
  return !0;
}
function K(e) {
  if (!e) return { rangeStart: `contain 0%`, rangeEnd: `contain 100%` };
  for (let [t, n] of V) if (G(e, t)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
var q = new Map();
function J(e) {
  let t = { value: 0 };
  return {
    currentTime: t,
    cancel: B((n) => {
      t.value = n[e.axis].progress * 100;
    }, e),
  };
}
function Y({ source: e, container: t, ...n }) {
  let { axis: r } = n;
  e && (t = e);
  let i = q.get(t);
  i || ((i = new Map()), q.set(t, i));
  let a = n.target ?? `self`,
    o = i.get(a);
  o || ((o = {}), i.set(a, o));
  let s = r + (n.offset ?? []).join(`,`);
  return (
    o[s] ||
      (n.target && b(n.target)
        ? K(n.offset)
          ? (o[s] = new ViewTimeline({ subject: n.target, axis: r }))
          : (o[s] = J({ container: t, ...n }))
        : b()
          ? (o[s] = new ScrollTimeline({ source: t, axis: r }))
          : (o[s] = J({ container: t, ...n }))),
    o[s]
  );
}
function ae(e, t) {
  let n = Y(t),
    r = t.target ? K(t.offset) : void 0,
    i = t.target ? b(t.target) && !!r : b();
  return e.attachTimeline({
    timeline: i ? n : void 0,
    ...(r && i && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
    observe: (e) => (
      e.pause(),
      v((t) => {
        e.time = e.iterationDuration * t;
      }, n)
    ),
  });
}
function oe(e) {
  return e.length === 2;
}
function se(e, t) {
  return oe(e)
    ? B((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : v(e, Y(t));
}
function X(e, { axis: t = `y`, container: n = document.scrollingElement, ...r } = {}) {
  if (!n) return l;
  let i = { axis: t, container: n, ...r };
  return typeof e == `function` ? se(e, i) : ae(e, i);
}
var ce = () => ({ scrollX: m(0), scrollY: m(0), scrollXProgress: m(0), scrollYProgress: m(0) }),
  Z = (e) => (e ? !e.current : !1);
function Q(e, t, n, r) {
  return {
    factory: (i) =>
      X(i, { ...t, axis: e, container: n?.current || void 0, target: r?.current || void 0 }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (e) => e,
    duration: 1,
  };
}
function le(e, t) {
  return typeof window > `u` ? !1 : e ? r() && !!K(t) : u();
}
function $({ container: e, target: t, ...n } = {}) {
  let r = p(ce);
  le(t, n.offset) &&
    ((r.scrollXProgress.accelerate = Q(`x`, n, e, t)),
    (r.scrollYProgress.accelerate = Q(`y`, n, e, t)));
  let i = (0, y.useRef)(null),
    a = (0, y.useRef)(!1),
    o = (0, y.useCallback)(
      () => (
        (i.current = X(
          (e, { x: t, y: n }) => {
            (r.scrollX.set(t.current),
              r.scrollXProgress.set(t.progress),
              r.scrollY.set(n.current),
              r.scrollYProgress.set(n.progress));
          },
          { ...n, container: e?.current || void 0, target: t?.current || void 0 },
        )),
        () => {
          i.current?.();
        }
      ),
      [e, t, JSON.stringify(n.offset)],
    );
  return (
    f(() => {
      if (((a.current = !1), Z(e) || Z(t))) {
        a.current = !0;
        return;
      } else return o();
    }, [o]),
    (0, y.useEffect)(() => {
      if (a.current)
        return (
          _(!Z(e), `Container ref is defined but not hydrated`, `use-scroll-ref`),
          _(!Z(t), `Target ref is defined but not hydrated`, `use-scroll-ref`),
          o()
        );
    }, [o]),
    r
  );
}
export { $ as t };
