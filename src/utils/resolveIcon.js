import { G as e, M as t, et as n, nt as r, t as i } from '../lib/lucideReact.js';
var a = {
    Linkedin: e,
    Twitter: e,
    Instagram: e,
    Facebook: e,
    Youtube: e,
    Github: n,
    Snapchat: e,
    Pinterest: e,
    Tiktok: e,
    Discord: t,
  },
  o = (e) => !!e && (typeof e == `function` || (typeof e == `object` && `$$typeof` in e));
function s(e) {
  if (typeof e == `string`) {
    let t = a[e];
    if (t) return t;
    let n = i[e];
    return o(n) ? n : r;
  }
  return o(e) ? e : r;
}
export { s as t };
