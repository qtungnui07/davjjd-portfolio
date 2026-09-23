import { t as e } from '../../lib/jsxRuntime.js';
import { t } from '../../utils/classNames.js';
var n = e(),
  r = ({ imageSrc: e, videoSrc: r, className: i = `` }) =>
    r
      ? (0, n.jsx)(`video`, {
          src: r,
          'aria-label': r,
          className: t(`w-full h-full min-h-0 object-cover rounded`, i),
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
        })
      : e
        ? (0, n.jsx)(`img`, {
            src: e,
            alt: e,
            className: t(`w-full h-full min-h-0 object-cover rounded`, i),
          })
        : null;
export { r as t };
