import '../lib/jsxRuntime.js';
import { t as e } from '../lib/react.js';
import { o as t, s as n } from '../lib/reactRouter.js';
import { n as r } from '../lib/lenisReact.js';
e();
var i = (e, i) => {
  let a = n(),
    o = t(),
    s = r(),
    c = (e, t = 100) => {
      let n = document.getElementById(e);
      n &&
        setTimeout(() => {
          s
            ? s.scrollTo(n, { offset: 0 })
            : n.scrollIntoView({ behavior: `smooth`, block: `start` });
        }, t);
    };
  return (t) => {
    if (e) {
      let n = /^(https?:\/\/|www\.)/.test(e),
        r = /^(mailto:|tel:)/.test(e);
      if (n)
        (t?.preventDefault(),
          window.open(e.startsWith(`www.`) ? `https://${e}` : e, `_blank`, `noopener,noreferrer`));
      else if (r) {
        i?.();
        return;
      } else if (e.startsWith(`/`)) {
        t?.preventDefault();
        let [n, r] = e.split(`#`);
        n === o.pathname
          ? r && c(r, 50)
          : (a(n),
            r &&
              setTimeout(() => {
                c(r, 100);
              }, 100));
      } else
        e.startsWith(`#`)
          ? (t?.preventDefault(), c(e.slice(1), 50))
          : (t?.preventDefault(), c(e, 50));
    }
    i?.();
  };
};
export { i as t };
