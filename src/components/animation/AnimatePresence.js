import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { G as r, H as i, U as a, W as o, n as s, p as c, r as l } from '../../lib/framerMotion.js';
var u = t(),
  d = e(n(), 1);
function f(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function p(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = f(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : f(e[t], null);
        }
      };
  };
}
function m(...e) {
  return d.useCallback(p(...e), e);
}
var h = class extends d.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (c(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      let e = t.offsetParent,
        n = (c(e) && e.offsetWidth) || 0,
        r = (c(e) && e.offsetHeight) || 0,
        i = getComputedStyle(t),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(i.height)),
        (a.width = parseFloat(i.width)),
        (a.top = t.offsetTop),
        (a.left = t.offsetLeft),
        (a.right = n - a.width - a.left),
        (a.bottom = r - a.height - a.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function g({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
  let o = (0, d.useId)(),
    s = (0, d.useRef)(null),
    c = (0, d.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: f } = (0, d.useContext)(l),
    p = m(s, e.props?.ref ?? e?.ref);
  return (
    (0, d.useInsertionEffect)(() => {
      let { width: e, height: l, top: u, left: d, right: p, bottom: m } = c.current;
      if (t || a === !1 || !s.current || !e || !l) return;
      let h = n === `left` ? `left: ${d}` : `right: ${p}`,
        g = r === `bottom` ? `bottom: ${m}` : `top: ${u}`;
      s.current.dataset.motionPopId = o;
      let _ = document.createElement(`style`);
      f && (_.nonce = f);
      let v = i ?? document.head;
      return (
        v.appendChild(_),
        _.sheet &&
          _.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),
        () => {
          (s.current?.removeAttribute(`data-motion-pop-id`), v.contains(_) && v.removeChild(_));
        }
      );
    }, [t]),
    (0, u.jsx)(h, {
      isPresent: t,
      childRef: s,
      sizeRef: c,
      pop: a,
      children: a === !1 ? e : d.cloneElement(e, { ref: p }),
    })
  );
}
var _ = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: a,
  presenceAffectsLayout: s,
  mode: c,
  anchorX: l,
  anchorY: f,
  root: p,
}) => {
  let m = o(v),
    h = (0, d.useId)(),
    _ = !0,
    y = (0, d.useMemo)(
      () => (
        (_ = !1),
        {
          id: h,
          initial: t,
          isPresent: n,
          custom: a,
          onExitComplete: (e) => {
            m.set(e, !0);
            for (let e of m.values()) if (!e) return;
            r && r();
          },
          register: (e) => (m.set(e, !1), () => m.delete(e)),
        }
      ),
      [n, m, r],
    );
  return (
    s && _ && (y = { ...y }),
    (0, d.useMemo)(() => {
      m.forEach((e, t) => m.set(t, !1));
    }, [n]),
    d.useEffect(() => {
      !n && !m.size && r && r();
    }, [n]),
    (e = (0, u.jsx)(g, {
      pop: c === `popLayout`,
      isPresent: n,
      anchorX: l,
      anchorY: f,
      root: p,
      children: e,
    })),
    (0, u.jsx)(i.Provider, { value: y, children: e })
  );
};
function v() {
  return new Map();
}
var y = (e) => e.key || ``;
function b(e) {
  let t = [];
  return (
    d.Children.forEach(e, (e) => {
      (0, d.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var x = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: i,
  presenceAffectsLayout: c = !0,
  mode: l = `sync`,
  propagate: f = !1,
  anchorX: p = `left`,
  anchorY: m = `top`,
  root: h,
}) => {
  let [g, v] = s(f),
    x = (0, d.useMemo)(() => b(e), [e]),
    S = f && !g ? [] : x.map(y),
    C = (0, d.useRef)(!0),
    w = (0, d.useRef)(x),
    T = o(() => new Map()),
    E = (0, d.useRef)(new Set()),
    [D, O] = (0, d.useState)(x),
    [k, A] = (0, d.useState)(x);
  a(() => {
    ((C.current = !1), (w.current = x));
    for (let e = 0; e < k.length; e++) {
      let t = y(k[e]);
      S.includes(t) ? (T.delete(t), E.current.delete(t)) : T.get(t) !== !0 && T.set(t, !1);
    }
  }, [k, S.length, S.join(`-`)]);
  let j = [];
  if (x !== D) {
    let e = [...x];
    for (let t = 0; t < k.length; t++) {
      let n = k[t],
        r = y(n);
      S.includes(r) || (e.splice(t, 0, n), j.push(n));
    }
    return (l === `wait` && j.length && (e = j), A(b(e)), O(x), null);
  }
  let { forceRender: M } = (0, d.useContext)(r);
  return (0, u.jsx)(u.Fragment, {
    children: k.map((e) => {
      let r = y(e),
        a = f && !g ? !1 : x === k || S.includes(r);
      return (0, u.jsx)(
        _,
        {
          isPresent: a,
          initial: !C.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: c,
          mode: l,
          root: h,
          onExitComplete: a
            ? void 0
            : () => {
                if (E.current.has(r)) return;
                if (T.has(r)) (E.current.add(r), T.set(r, !0));
                else return;
                let e = !0;
                (T.forEach((t) => {
                  t || (e = !1);
                }),
                  e && (M?.(), A(w.current), f && v?.(), i && i()));
              },
          anchorX: p,
          anchorY: m,
          children: e,
        },
        r,
      );
    }),
  });
};
export { x as t };
