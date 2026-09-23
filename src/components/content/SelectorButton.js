import { o as e, t } from '../../lib/jsxRuntime.js';
import { t as n } from '../../lib/react.js';
import { t as r } from '../../utils/classNames.js';
var i = e(n(), 1),
  a = t(),
  o = ({ options: e, activeValue: t, onValueChange: n, className: o }) => {
    let s = (0, i.useRef)(null),
      c = (0, i.useRef)(null);
    return (
      (0, i.useEffect)(() => {
        let e = c.current,
          n = s.current;
        if (!e || !n) return;
        let r = (t) => {
            if (!t) return;
            let r = t.getBoundingClientRect(),
              i = e.getBoundingClientRect();
            ((n.style.width = `${r.width}px`),
              (n.style.transform = `translateX(${r.left - i.left}px)`));
          },
          i = () => {
            let n = e.querySelector(`[data-value="${t}"]`);
            n && r(n);
          };
        i();
        let a = new ResizeObserver(i);
        return (
          a.observe(e),
          () => {
            a.disconnect();
          }
        );
      }, [t]),
      (0, a.jsxs)(`div`, {
        ref: c,
        className: r(`relative inline-flex gap-1 p-1 card rounded-full`, o),
        children: [
          e.map((e) =>
            (0, a.jsx)(
              `button`,
              {
                'data-value': e.value,
                onClick: () => n(e.value),
                className: r(
                  `relative z-1 px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-300`,
                  t === e.value
                    ? `text-primary-cta-text`
                    : `text-foreground hover:text-foreground/80`,
                ),
                children: e.label,
              },
              e.value,
            ),
          ),
          (0, a.jsx)(`div`, {
            ref: s,
            className: `absolute z-0 inset-y-1 left-0 rounded-full primary-button pointer-events-none transition-all duration-300 ease-out`,
          }),
        ],
      })
    );
  };
export { o as t };
