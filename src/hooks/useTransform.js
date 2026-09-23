import { o as e } from '../lib/jsxRuntime.js';
import { t } from '../lib/react.js';
import {
  D as n,
  M as r,
  U as i,
  W as a,
  b as o,
  j as s,
  r as c,
  y as l,
} from '../lib/framerMotion.js';
function u(...e) {
  let t = !Array.isArray(e[0]),
    r = t ? 0 : -1,
    i = e[0 + r],
    a = e[1 + r],
    o = e[2 + r],
    s = e[3 + r],
    c = n(a, o, s);
  return t ? c(i) : c;
}
var d = e(t(), 1);
function f(e) {
  let t = a(() => o(e)),
    { isStatic: n } = (0, d.useContext)(c);
  if (n) {
    let [, n] = (0, d.useState)(e);
    (0, d.useEffect)(() => t.on(`change`, n), []);
  }
  return t;
}
function p(e, t) {
  let n = f(t()),
    a = () => n.set(t());
  return (
    a(),
    i(() => {
      let t = () => r.preRender(a, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), s(a));
      };
    }),
    n
  );
}
function m(e) {
  ((l.current = []), e());
  let t = p(l.current, e);
  return ((l.current = void 0), t);
}
function h(e, t, n, r) {
  if (typeof e == `function`) return m(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`) return _(e, t, n, r);
  let i = typeof t == `function` ? t : u(t, n, r),
    a = Array.isArray(e) ? g(e, i) : g([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    o &&
      !o.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function g(e, t) {
  let n = a(() => []);
  return p(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function _(e, t, n, r) {
  let i = a(() => Object.keys(n)),
    o = a(() => ({}));
  for (let a of i) o[a] = h(e, t, n[a], r);
  return o;
}
export { p as n, f as r, h as t };
