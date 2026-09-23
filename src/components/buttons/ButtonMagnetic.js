import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { t as r } from '../../lib/framerMotion.js';
import { r as i } from '../../hooks/useTransform.js';
import { t as a } from '../../hooks/useSpring.js';
import { t as o } from '../../hooks/useButtonClick.js';
import { t as s } from '../../utils/classNames.js';
var c = e(n(), 1),
  l = t(),
  u = ({
    text: e,
    variant: t = `primary`,
    href: n = `#`,
    onClick: u,
    animate: d = !0,
    animationDelay: f = 0,
    className: p = ``,
  }) => {
    let m = o(n, u),
      h = (0, c.useRef)(null),
      g = i(0),
      _ = i(0),
      v = a(g, { stiffness: 150, damping: 15 }),
      y = a(_, { stiffness: 150, damping: 15 }),
      b = (0, l.jsx)(r.a, {
        ref: h,
        href: n,
        onClick: m,
        onMouseMove: (e) => {
          if (!h.current || window.innerWidth < 768) return;
          let t = h.current.getBoundingClientRect(),
            n = (e.clientX - t.left - t.width / 2) * 0.15,
            r = (e.clientY - t.top - t.height / 2) * 0.15;
          (g.set(n), _.set(r));
        },
        onMouseLeave: () => {
          (g.set(0), _.set(0));
        },
        style: { x: v, y },
        className: s(
          `flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer`,
          t === `primary`
            ? `primary-button text-primary-cta-text`
            : `secondary-button text-secondary-cta-text`,
          p,
        ),
        children: e,
      });
    return d
      ? (0, l.jsx)(r.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: f, ease: `easeOut` },
          children: b,
        })
      : b;
  };
export { u as t };
