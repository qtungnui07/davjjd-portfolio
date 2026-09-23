import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../lib/framerMotion.js';
import { t as n } from '../../hooks/useTransform.js';
import { t as r } from '../../hooks/useSpring.js';
import { t as i } from '../../hooks/useButtonClick.js';
import { t as a } from '../../utils/classNames.js';
var o = e(),
  s = ({
    text: e,
    variant: s = `primary`,
    href: c = `#`,
    onClick: l,
    animate: u = !0,
    animationDelay: d = 0,
    className: f = ``,
  }) => {
    let p = i(c, l),
      m = r(1, { stiffness: 300, damping: 10 }),
      h = n(m, [1, 1.08], [1, 1.08]),
      g = n(m, [1, 1.08], [1, 0.95]),
      _ = (0, o.jsx)(t.a, {
        href: c,
        onClick: p,
        onMouseEnter: () => {
          window.innerWidth < 768 || (m.set(1.08), setTimeout(() => m.set(1), 100));
        },
        style: { scaleX: h, scaleY: g },
        className: a(
          `flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer`,
          s === `primary`
            ? `primary-button text-primary-cta-text`
            : `secondary-button text-secondary-cta-text`,
          f,
        ),
        children: e,
      });
    return u
      ? (0, o.jsx)(t.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.4, delay: d, ease: `easeOut` },
          children: _,
        })
      : _;
  };
export { s as t };
