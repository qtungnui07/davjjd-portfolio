import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { gt as r } from '../../lib/lucideReact.js';
import { t as i } from '../../lib/framerMotion.js';
import { t as a } from '../../hooks/useButtonClick.js';
import { t as o } from '../animation/TextAnimation.js';
import { t as s } from '../content/ImageOrVideo.js';
import { t as c } from '../../lib/gsap.js';
import { t as l } from '../../lib/ScrollTrigger.js';
import { t as u } from './HeroBackgroundSlot.js';
var d = e(n(), 1),
  f = t();
c.registerPlugin(l);
var p = ({
  tag: e,
  title: t,
  titleHighlight: n,
  description: l,
  descriptionMuted: p,
  primaryButton: m,
  sectionTag: h,
  sectionTitle: g,
  sectionDescription: _,
  items: v,
  secondaryButton: y,
  heroAnimationDelay: b,
  textAnimation: x,
}) => {
  let S = (0, d.useRef)(null),
    C = (0, d.useRef)(null),
    w = (0, d.useRef)(null),
    T = (0, d.useRef)(null),
    E = (0, d.useRef)(null),
    D = a(m.href),
    O = a(y?.href || `#`);
  return (
    (0, d.useEffect)(() => {
      let e = window.matchMedia(`(min-width: 768px)`).matches,
        t = c.context(() => {
          let t = [w.current, T.current, E.current],
            n = C.current;
          if (!n) return;
          let r = n.getBoundingClientRect(),
            i = r.top + r.height / 2;
          if (e) {
            let e = [`32rem`, `14.5rem`, `-1.8rem`],
              n = [0, -48, 0],
              r = [-5, 0, 5],
              a = [1.35, 1.3, 1.25],
              o = [30, 20, 10],
              s = c.timeline({
                scrollTrigger: {
                  trigger: S.current,
                  start: `top top`,
                  end: `bottom bottom`,
                  scrub: 1,
                },
              });
            t.forEach((t, l) => {
              if (!t) return;
              let u = t.getBoundingClientRect(),
                d = i - (u.top + u.height / 2);
              (c.set(t, {
                x: e[l],
                y: d + n[l],
                rotation: r[l],
                scale: a[l],
                zIndex: o[l],
                willChange: `transform`,
                force3D: !0,
              }),
                s.to(t, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.4, ease: `none` }, 0),
                s.to(t, { zIndex: 1, duration: 0.1, ease: `none` }, 0.3));
            });
          } else {
            let e = [`2.5rem`, `0.5rem`, `-1rem`],
              r = [-10, -30, 10],
              a = [-5, 0, 5],
              o = [0.65, 0.7, 0.75],
              s = [30, 20, 10];
            t.forEach((t, l) => {
              if (!t) return;
              let u = t.getBoundingClientRect(),
                d = i - (u.top + u.height / 2);
              (c.set(t, {
                x: e[l],
                y: d + r[l],
                rotation: a[l],
                scale: o[l],
                zIndex: s[l],
                willChange: `transform`,
                force3D: !0,
              }),
                c.to(t, {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: `power2.inOut`,
                  scrollTrigger: {
                    trigger: n,
                    start: `top 35%`,
                    toggleActions: `play none none reverse`,
                  },
                }));
            });
          }
        }, S);
      return () => t.revert();
    }, []),
    (0, f.jsxs)(`div`, {
      ref: S,
      children: [
        (0, f.jsx)(`div`, {
          id: `hero`,
          'data-section': `hero`,
          children: (0, f.jsxs)(`section`, {
            'aria-label': `Hero section`,
            className: `relative h-fit md:h-svh pt-30 pb-20 md:py-0 flex items-center overflow-hidden md:overflow-visible`,
            children: [
              (0, f.jsx)(u, {}),
              (0, f.jsx)(`div`, {
                className: `w-content-width mx-auto`,
                children: (0, f.jsxs)(`div`, {
                  className: `flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full`,
                  children: [
                    (0, f.jsxs)(i.div, {
                      initial: { y: 10, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: b ?? 0 },
                      className: `w-full md:w-[46%] flex flex-col items-center md:items-start gap-3`,
                      children: [
                        (0, f.jsxs)(`div`, {
                          className: `card backdrop-blur flex items-center gap-2 px-3 py-1 rounded`,
                          children: [
                            (0, f.jsx)(`span`, {
                              className: `size-2 rounded-full bg-green-500 animate-pulsate [--accent:#22c55e]`,
                            }),
                            (0, f.jsx)(`p`, {
                              className: `text-sm leading-snug font-medium text-foreground`,
                              children: e,
                            }),
                          ],
                        }),
                        (0, f.jsx)(`h1`, {
                          className: `text-6xl md:text-7xl 2xl:text-8xl font-medium leading-[1.05] tracking-tight text-center md:text-left`,
                          children: (0, f.jsxs)(`span`, {
                            className: `inline pb-[0.1em] -mb-[0.1em] bg-linear-to-r from-foreground to-primary-cta bg-clip-text text-transparent`,
                            children: [
                              t,
                              ` `,
                              (0, f.jsx)(`span`, { className: `font-bold`, children: n }),
                            ],
                          }),
                        }),
                        (0, f.jsxs)(`p`, {
                          className: `text-base md:text-lg font-medium leading-snug text-center text-balance md:text-left max-w-[95%]`,
                          children: [
                            l,
                            ` `,
                            (0, f.jsx)(`span`, { className: `text-foreground/50`, children: p }),
                          ],
                        }),
                        (0, f.jsxs)(`a`, {
                          href: m.href,
                          onClick: D,
                          className: `group flex items-center gap-3 mt-2 text-primary-cta-text rounded-full pl-3 pr-6 py-3 w-fit primary-button transition-all duration-300`,
                          children: [
                            (0, f.jsxs)(`div`, {
                              className: `flex items-center`,
                              children: [
                                (0, f.jsx)(`div`, {
                                  className: `card p-px rounded-full transition-transform duration-500 ease-out group-hover:-rotate-6`,
                                  children: (0, f.jsx)(`img`, {
                                    src: m.avatarSrc,
                                    className: `w-9 h-9 rounded-full object-cover`,
                                    alt: ``,
                                  }),
                                }),
                                (0, f.jsx)(`div`, {
                                  className: `grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-500 ease-out`,
                                  children: (0, f.jsxs)(`div`, {
                                    className: `overflow-hidden flex items-center`,
                                    children: [
                                      (0, f.jsx)(`span`, {
                                        className: `text-primary-cta-text text-sm font-medium mx-2 transition-transform duration-500 ease-out -translate-x-3 group-hover:translate-x-0`,
                                        children: `+`,
                                      }),
                                      (0, f.jsx)(`div`, {
                                        className: `card p-px rounded-full shrink-0 transition-transform duration-500 ease-out -translate-x-5 group-hover:translate-x-0 group-hover:rotate-6`,
                                        children: (0, f.jsx)(`span`, {
                                          className: `w-9 h-9 rounded-full flex items-center justify-center`,
                                          children: (0, f.jsx)(`span`, {
                                            className: `text-foreground text-xs font-bold`,
                                            children: m.avatarLabel,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, f.jsx)(`span`, {
                              className: `text-base font-medium whitespace-nowrap`,
                              children: m.text,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, f.jsx)(`div`, {
                      ref: C,
                      className: `w-full md:w-[54%] relative h-80 md:h-96`,
                      children: (0, f.jsx)(`div`, {
                        className: `absolute inset-0 card rounded-2xl md:hidden`,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, f.jsx)(`div`, {
          id: `work`,
          'data-section': `work`,
          children: (0, f.jsx)(`section`, {
            'aria-label': `Work section`,
            className: `py-20 md:pt-0`,
            children: (0, f.jsxs)(`div`, {
              className: `flex flex-col gap-8 w-content-width mx-auto`,
              children: [
                (0, f.jsxs)(`div`, {
                  className: `flex flex-col items-center gap-2`,
                  children: [
                    (0, f.jsx)(`div`, {
                      className: `px-3 py-1 mb-1 text-sm card rounded w-fit`,
                      children: (0, f.jsx)(`p`, { children: h }),
                    }),
                    (0, f.jsx)(o, {
                      text: g,
                      variant: x,
                      gradientText: !0,
                      tag: `h2`,
                      className: `md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance`,
                    }),
                    (0, f.jsx)(o, {
                      text: _,
                      variant: x,
                      gradientText: !1,
                      tag: `p`,
                      className: `md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance`,
                    }),
                  ],
                }),
                (0, f.jsx)(`div`, {
                  className: `grid md:grid-cols-3 gap-5`,
                  children: v.map((e, t) =>
                    (0, f.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col gap-3 xl:gap-4 2xl:gap-5`,
                        children: [
                          (0, f.jsx)(`div`, {
                            ref: t === 0 ? w : t === 1 ? T : E,
                            className: `aspect-4/3 rounded-2xl shadow-2xl relative card p-2 xl:p-3 2xl:p-4`,
                            children: (0, f.jsxs)(`div`, {
                              className: `w-full h-full aspect-4/3 rounded-xl overflow-hidden relative`,
                              children: [
                                (0, f.jsx)(s, {
                                  imageSrc: e.imageSrc,
                                  className: `w-full h-full object-cover`,
                                }),
                                (0, f.jsx)(`span`, {
                                  className: `absolute bottom-2 left-2 xl:bottom-3 xl:left-3 2xl:bottom-4 2xl:left-4 px-3 py-1.5 text-xs font-medium text-primary-cta-text rounded-full backdrop-blur-xl bg-primary-cta-text/15 border border-primary-cta-text/20`,
                                  children: e.tag,
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsxs)(`p`, {
                            className: `text-lg md:text-xl lg:text-2xl leading-snug`,
                            children: [
                              (0, f.jsxs)(`span`, {
                                className: `font-semibold text-foreground`,
                                children: [e.title, `. `],
                              }),
                              (0, f.jsx)(`span`, {
                                className: `text-foreground/50`,
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
                }),
                y &&
                  (0, f.jsx)(`div`, {
                    className: `flex justify-center`,
                    children: (0, f.jsxs)(`a`, {
                      href: y.href,
                      onClick: O,
                      className: `group flex items-center gap-2 px-6 py-3 text-base font-medium rounded-full secondary-button text-secondary-cta-text transition-all duration-300`,
                      children: [
                        (0, f.jsx)(`span`, { children: y.text }),
                        (0, f.jsx)(r, {
                          className: `size-4 transition-transform duration-300 group-hover:translate-x-1`,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          }),
        }),
      ],
    })
  );
};
export { p as t };
