import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../hooks/useButtonClick.js';
import { t as n } from '../../utils/resolveIcon.js';
import { t as r } from '../content/AutoFillText.js';
var i = e(),
  a = ({ icon: e, href: r, onClick: a }) => {
    let o = n(e);
    return (0, i.jsx)(`button`, {
      onClick: t(r, a),
      className: `flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text cursor-pointer`,
      children: (0, i.jsx)(o, { className: `size-4`, strokeWidth: 1.5 }),
    });
  },
  o = ({ brand: e, copyright: t, socialLinks: n }) =>
    (0, i.jsx)(`footer`, {
      'data-section': `footer`,
      'aria-label': `Site footer`,
      className: `relative w-full py-20`,
      children: (0, i.jsxs)(`div`, {
        className: `flex flex-col w-content-width mx-auto px-10 pb-5 rounded-lg card`,
        children: [
          (0, i.jsx)(r, { className: `font-semibold`, paddingY: `py-5`, children: e }),
          (0, i.jsx)(`div`, { className: `h-px w-full mb-5 bg-foreground/50` }),
          (0, i.jsxs)(`div`, {
            className: `flex flex-col gap-3 items-center justify-between md:flex-row`,
            children: [
              (0, i.jsx)(`span`, { className: `text-base opacity-75`, children: t }),
              n &&
                n.length > 0 &&
                (0, i.jsx)(`div`, {
                  className: `flex items-center gap-3`,
                  children: n.map((e, t) =>
                    (0, i.jsx)(a, { icon: e.icon, href: e.href, onClick: e.onClick }, t),
                  ),
                }),
            ],
          }),
        ],
      }),
    });
export { o as t };
