import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { t as r } from '../../lib/framerMotion.js';
import { t as i } from '../animation/AnimatePresence.js';
var a = e(n(), 1),
  o = t(),
  s = ({ imageSrc: e, title: t, onComplete: n }) => {
    let [s, c] = (0, a.useState)(!0),
      [l, u] = (0, a.useState)(!1);
    return (0, o.jsx)(i, {
      onExitComplete: n,
      children:
        s &&
        (0, o.jsxs)(r.div, {
          className: `fixed inset-0 z-100 text-primary-cta-text`,
          children: [
            (0, o.jsx)(r.div, {
              className: `absolute inset-0 w-full h-full bg-background-accent`,
              exit: { y: `-101%` },
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
              children: (0, o.jsx)(r.div, {
                className: `absolute bottom-0 left-0 right-0 h-2 bg-primary-cta-text`,
                initial: { scaleX: 0 },
                animate: { scaleX: +!l },
                style: { originX: +!!l },
                transition: { duration: l ? 0.5 : 3, ease: [0.76, 0, 0.24, 1] },
                onAnimationComplete: () => {
                  l ? c(!1) : u(!0);
                },
              }),
            }),
            (0, o.jsxs)(r.div, {
              className: `relative z-2 flex flex-col justify-center items-center w-full h-full gap-4 md:gap-5`,
              animate: l ? { opacity: 0 } : { opacity: 1 },
              transition: { duration: 0.5 },
              children: [
                (0, o.jsx)(`div`, {
                  className: `card p-px rounded-full`,
                  children: (0, o.jsx)(`img`, {
                    src: e,
                    alt: ``,
                    className: `size-12 md:size-16 rounded-full object-cover`,
                  }),
                }),
                (0, o.jsxs)(`div`, {
                  className: `relative flex justify-center items-center`,
                  children: [
                    (0, o.jsx)(`span`, {
                      className: `absolute text-center text-2xl md:text-4xl font-medium tracking-tight opacity-20`,
                      children: t,
                    }),
                    (0, o.jsx)(r.span, {
                      className: `text-2xl md:text-4xl font-medium tracking-tight`,
                      initial: { clipPath: `inset(0% 100% 0% 0%)` },
                      animate: { clipPath: `inset(0% 0% 0% 0%)` },
                      transition: { duration: 3, ease: [0.76, 0, 0.24, 1] },
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    });
  };
export { s as t };
