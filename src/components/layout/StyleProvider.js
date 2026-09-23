import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../lib/react.js';
import { t as n } from '../../hooks/useStyle.js';
t();
var r = e();
function i({
  buttonVariant: e = `default`,
  siteBackground: t = `none`,
  heroBackground: i = `none`,
  children: a,
}) {
  return (0, r.jsx)(n.Provider, {
    value: { buttonVariant: e, siteBackground: t, heroBackground: i },
    children: a,
  });
}
export { i as t };
