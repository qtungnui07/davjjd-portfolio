import { t as e } from '../../lib/jsxRuntime.js';
import { n as t } from '../../hooks/useStyle.js';
import { t as n } from '../backgrounds/CornerGlowBackground.js';
import { t as r } from '../backgrounds/AuroraBackground.js';
import { t as i } from '../backgrounds/FloatingGradientBackground.js';
import { t as a } from '../backgrounds/GridLinesBackground.js';
import { t as o } from '../backgrounds/NoiseBackground.js';
import { t as s } from '../backgrounds/NoiseGradientBackground.js';
var c = e(),
  l = () => {
    let { siteBackground: e } = t();
    switch (e) {
      case `aurora`:
        return (0, c.jsx)(r, { position: `fixed` });
      case `cornerGlow`:
        return (0, c.jsx)(n, { position: `fixed` });
      case `floatingGradient`:
        return (0, c.jsx)(i, { position: `fixed` });
      case `gridLines`:
        return (0, c.jsx)(a, { position: `fixed` });
      case `noise`:
        return (0, c.jsx)(o, { position: `fixed` });
      case `noiseGradient`:
        return (0, c.jsx)(s, { position: `fixed` });
      default:
        return null;
    }
  };
export { l as t };
