import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../lib/framerMotion.js';
var n = e(),
  r = ({
    children: e,
    className: r = `flex flex-col w-full gap-6`,
    transitionType: i = `full`,
    whileInView: a = !0,
  }) => {
    let o = i === `full` ? { opacity: 0, y: 20 } : { opacity: 0 },
      s = i === `full` ? { opacity: 1, y: 0 } : { opacity: 1 };
    return (0, n.jsx)(t.div, {
      initial: o,
      ...(a ? { whileInView: s, viewport: { once: !0, margin: `-15%` } } : { animate: s }),
      transition: { duration: 0.6, ease: `easeOut` },
      className: r,
      children: e,
    });
  };
export { r as t };
