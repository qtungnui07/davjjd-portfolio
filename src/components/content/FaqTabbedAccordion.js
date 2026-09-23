import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { t as r } from '../animation/ScrollReveal.js';
import { t as i } from '../buttons/Button.js';
import { t as a } from '../animation/TextAnimation.js';
import { t as o } from './ImageOrVideo.js';
import { t as s } from '../animation/Transition.js';
import { t as c } from './SelectorButton.js';
import { t as l } from './Accordion.js';
var u = e(n(), 1),
  d = t(),
  f = ({ tag: e, title: t, description: n, categories: f, cta: p, textAnimation: m }) => {
    let [h, g] = (0, u.useState)(f[0]?.name || ``),
      _ = (f.find((e) => e.name === h)?.items || []).map((e) => ({
        title: e.question,
        content: e.answer,
      }));
    return (0, d.jsx)(`section`, {
      'aria-label': `FAQ section`,
      className: `py-20`,
      children: (0, d.jsx)(`div`, {
        className: `w-content-width mx-auto`,
        children: (0, d.jsxs)(`div`, {
          className: `card rounded flex flex-col gap-6 md:gap-10 p-6 md:p-10`,
          children: [
            (0, d.jsxs)(`div`, {
              className: `flex flex-col items-center gap-2`,
              children: [
                (0, d.jsx)(`div`, {
                  className: `px-3 py-1 mb-1 text-sm card rounded w-fit`,
                  children: (0, d.jsx)(`p`, { children: e }),
                }),
                (0, d.jsx)(a, {
                  text: t,
                  variant: m,
                  gradientText: !0,
                  tag: `h2`,
                  className: `md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance`,
                }),
                (0, d.jsx)(a, {
                  text: n,
                  variant: m,
                  gradientText: !1,
                  tag: `p`,
                  className: `md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance`,
                }),
                (0, d.jsx)(c, {
                  options: f.map((e) => ({ value: e.name, label: e.name })),
                  activeValue: h,
                  onValueChange: g,
                  className: `mt-2 md:mt-3`,
                }),
              ],
            }),
            (0, d.jsx)(r, {
              variant: `slide-up`,
              children: (0, d.jsx)(
                s,
                { whileInView: !1, className: ``, children: (0, d.jsx)(l, { items: _ }) },
                h,
              ),
            }),
            p &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)(`div`, { className: `w-full h-px bg-foreground/5` }),
                  (0, d.jsxs)(`div`, {
                    className: `flex flex-col md:flex-row md:items-center gap-6 justify-between`,
                    children: [
                      (0, d.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, d.jsx)(o, {
                            imageSrc: p.imageSrc,
                            videoSrc: p.videoSrc,
                            className: `size-10 md:size-11 2xl:size-12 rounded-full object-cover`,
                          }),
                          (0, d.jsxs)(`div`, {
                            className: `flex flex-col min-w-0`,
                            children: [
                              (0, d.jsx)(`span`, {
                                className: `text-base text-foreground font-semibold leading-snug truncate`,
                                children: p.name,
                              }),
                              (0, d.jsx)(`span`, {
                                className: `text-base text-foreground/75 leading-snug truncate`,
                                children: p.role,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsx)(i, { text: p.buttonText, href: p.buttonHref, variant: `primary` }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
    });
  };
export { f as t };
