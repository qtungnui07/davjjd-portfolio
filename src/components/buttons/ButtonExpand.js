import { t as e } from '../../lib/jsxRuntime.js';
import { ht as t } from '../../lib/lucideReact.js';
import { t as n } from '../../lib/framerMotion.js';
import { t as r } from '../../hooks/useButtonClick.js';
import { t as i } from '../../utils/classNames.js';
var a = e(),
  o = ({
    text: e,
    variant: o = `primary`,
    href: s = `#`,
    onClick: c,
    animate: l = !0,
    animationDelay: u = 0,
    className: d = ``,
  }) => {
    let f = (0, a.jsxs)(`a`, {
      href: s,
      onClick: r(s, c),
      className: i(
        `group relative flex items-center gap-3 min-w-0 w-fit max-w-full py-0.5 pl-5 pr-0.5 text-sm rounded cursor-pointer`,
        o === `primary`
          ? `primary-button text-primary-cta-text`
          : `secondary-button text-secondary-cta-text`,
        d,
      ),
      children: [
        (0, a.jsx)(`span`, {
          className: i(
            `relative z-10 flex-1 truncate md:transition-colors md:duration-500 md:ease-out`,
            o === `primary`
              ? `text-primary-cta-text md:group-hover:text-secondary-cta-text`
              : `text-secondary-cta-text md:group-hover:text-primary-cta-text`,
          ),
          children: e,
        }),
        (0, a.jsx)(`div`, {
          className: i(
            `relative z-10 flex items-center justify-center size-8 rounded`,
            o === `primary` ? `text-secondary-cta-text` : `text-primary-cta-text`,
          ),
          children: (0, a.jsx)(t, { className: `size-4`, strokeWidth: 1.5 }),
        }),
        (0, a.jsx)(`div`, {
          className: `absolute inset-0.5 z-0 overflow-hidden rounded pointer-events-none`,
          children: (0, a.jsx)(`div`, {
            className: i(
              `h-full w-full rounded -translate-x-[calc(-100%+2rem)] md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-x-0`,
              o === `primary` ? `secondary-button` : `primary-button`,
            ),
          }),
        }),
      ],
    });
    return l
      ? (0, a.jsx)(n.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: u, ease: `easeOut` },
          children: f,
        })
      : f;
  };
export { o as t };
