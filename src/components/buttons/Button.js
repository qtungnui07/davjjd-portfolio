import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../lib/framerMotion.js';
import { t as n } from '../../hooks/useButtonClick.js';
import { t as r } from '../../utils/classNames.js';
import { n as i } from '../../hooks/useStyle.js';
import { t as a } from './ButtonArrow.js';
import { t as o } from './ButtonBounce.js';
import { t as s } from './ButtonBubble.js';
import { t as c } from './ButtonElastic.js';
import { t as l } from './ButtonExpand.js';
import { t as u } from './ButtonFlip.js';
import { t as d } from './ButtonMagnetic.js';
import { t as f } from './ButtonPill.js';
import { t as p } from './ButtonShift.js';
import { t as m } from './ButtonSlide.js';
import { t as h } from './ButtonStagger.js';
var g = e(),
  _ = ({
    text: e,
    variant: i = `primary`,
    href: a = `#`,
    onClick: o,
    animate: s = !0,
    animationDelay: c = 0,
    className: l = ``,
  }) => {
    let u = (0, g.jsx)(`a`, {
      href: a,
      onClick: n(a, o),
      className: r(
        `flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer`,
        i === `primary`
          ? `primary-button text-primary-cta-text`
          : `secondary-button text-secondary-cta-text`,
        l,
      ),
      children: e,
    });
    return s
      ? (0, g.jsx)(t.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: c, ease: `easeOut` },
          children: u,
        })
      : u;
  },
  v = (e) => {
    let { buttonVariant: t } = i();
    switch (t) {
      case `arrow`:
        return (0, g.jsx)(a, { ...e });
      case `bounce`:
        return (0, g.jsx)(o, { ...e });
      case `bubble`:
        return (0, g.jsx)(s, { ...e });
      case `elastic`:
        return (0, g.jsx)(c, { ...e });
      case `expand`:
        return (0, g.jsx)(l, { ...e });
      case `flip`:
        return (0, g.jsx)(u, { ...e });
      case `magnetic`:
        return (0, g.jsx)(d, { ...e });
      case `pill`:
        return (0, g.jsx)(f, { ...e });
      case `shift`:
        return (0, g.jsx)(p, { ...e });
      case `slide`:
        return (0, g.jsx)(m, { ...e });
      case `stagger`:
        return (0, g.jsx)(h, { ...e });
      default:
        return (0, g.jsx)(_, { ...e });
    }
  };
export { v as t };
