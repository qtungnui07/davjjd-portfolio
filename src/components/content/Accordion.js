import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { w as r } from '../../lib/lucideReact.js';
import { t as i } from '../../lib/framerMotion.js';
import { t as a } from '../animation/AnimatePresence.js';
import { t as o } from '../../utils/classNames.js';
var s = e(n(), 1),
  c = t(),
  l = ({ items: e, className: t = `` }) => {
    let [n, l] = (0, s.useState)(null);
    return (0, c.jsx)(`div`, {
      className: o(`flex flex-col gap-3 xl:gap-3.5 2xl:gap-4`, t),
      children: e.map((e, t) =>
        (0, c.jsxs)(
          `div`,
          {
            onClick: () => l(n === t ? null : t),
            className: `p-3 xl:p-3.5 2xl:p-4 rounded card cursor-pointer select-none`,
            children: [
              (0, c.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 xl:gap-3.5 2xl:gap-4`,
                children: [
                  (0, c.jsx)(`h3`, {
                    className: `text-lg md:text-xl font-medium leading-snug`,
                    children: e.title,
                  }),
                  (0, c.jsx)(`div`, {
                    className: `flex shrink-0 items-center justify-center size-8 md:size-9 rounded primary-button`,
                    children: (0, c.jsx)(r, {
                      className: o(
                        `size-3.5 md:size-4 text-primary-cta-text transition-transform duration-300`,
                        n === t && `rotate-45`,
                      ),
                      strokeWidth: 2,
                    }),
                  }),
                ],
              }),
              (0, c.jsx)(a, {
                initial: !1,
                children:
                  n === t &&
                  (0, c.jsx)(i.div, {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: `auto`, opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.3, ease: `easeOut` },
                    className: `overflow-hidden`,
                    children: (0, c.jsx)(`p`, {
                      className: `pt-1 text-base leading-snug`,
                      children: e.content,
                    }),
                  }),
              }),
            ],
          },
          t,
        ),
      ),
    });
  };
export { l as t };
