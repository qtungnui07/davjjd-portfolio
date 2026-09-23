import { t as e } from '../../lib/jsxRuntime.js';
import { h as t } from '../../lib/lucideReact.js';
import { t as n } from '../animation/ScrollReveal.js';
import { t as r } from '../../utils/classNames.js';
import { t as i } from '../animation/TextAnimation.js';
import { t as a } from './ImageOrVideo.js';
var o = e(),
  s = ({ quote: e, rating: s, author: c, avatars: l, textAnimation: u }) => {
    let d = l.slice(0, 6),
      f = l.length - d.length;
    return (0, o.jsx)(`section`, {
      'aria-label': `Testimonials section`,
      className: `py-20`,
      children: (0, o.jsxs)(`div`, {
        className: `flex flex-col items-center gap-5 w-content-width mx-auto`,
        children: [
          (0, o.jsx)(n, {
            variant: `slide-up`,
            className: `flex gap-1.5`,
            children: Array.from({ length: 5 }).map((e, n) =>
              (0, o.jsx)(
                t,
                {
                  className: r(`size-6 text-accent`, n < s ? `fill-accent` : `fill-transparent`),
                  strokeWidth: 1.5,
                },
                n,
              ),
            ),
          }),
          (0, o.jsx)(i, {
            text: e,
            variant: u,
            gradientText: !1,
            tag: `p`,
            className: `md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance`,
          }),
          (0, o.jsx)(n, {
            variant: `slide-up`,
            delay: 0.1,
            className: `md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance`,
            children: (0, o.jsx)(`p`, { children: c }),
          }),
          (0, o.jsxs)(n, {
            variant: `slide-up`,
            delay: 0.2,
            className: `flex items-center justify-center mt-1`,
            children: [
              d.map((e, t) =>
                (0, o.jsx)(
                  `div`,
                  {
                    className: r(
                      `relative size-12 md:size-16 overflow-hidden rounded-full border-2 border-background`,
                      t > 0 && `-ml-5`,
                    ),
                    style: { zIndex: d.length - t },
                    children: (0, o.jsx)(a, { imageSrc: e.imageSrc, videoSrc: e.videoSrc }),
                  },
                  e.name,
                ),
              ),
              f > 0 &&
                (0, o.jsx)(`div`, {
                  className: `flex items-center justify-center size-12 md:size-16 -ml-5 rounded-full border-2 border-background card`,
                  style: { zIndex: 0 },
                  children: (0, o.jsxs)(`span`, {
                    className: `text-sm md:text-base font-semibold`,
                    children: [`+`, f],
                  }),
                }),
            ],
          }),
        ],
      }),
    });
  };
export { s as t };
