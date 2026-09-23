import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../lib/framerMotion.js';
var n = e(),
  r = {
    'slide-up': { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    'fade-blur': {
      hidden: { opacity: 0, filter: `blur(10px)` },
      visible: { opacity: 1, filter: `blur(0px)` },
    },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  },
  i = ({ children: e, variant: i, delay: a = 0, className: o = `` }) =>
    (0, n.jsx)(t.div, {
      initial: `hidden`,
      whileInView: `visible`,
      viewport: { once: !0, margin: `-20%` },
      variants: r[i],
      transition: { duration: 0.6, delay: a, ease: `easeOut` },
      className: o,
      children: e,
    });
export { i as t };
