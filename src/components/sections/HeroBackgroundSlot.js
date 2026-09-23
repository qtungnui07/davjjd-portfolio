import { t as e } from '../../lib/jsxRuntime.js';
import { n as t } from '../../hooks/useStyle.js';
import { t as n } from '../backgrounds/CornerGlowBackground.js';
import { t as r } from '../backgrounds/GradientBarsBackground.js';
import { t as i } from '../backgrounds/HorizonGlowBackground.js';
import { t as a } from '../backgrounds/LightRaysCenterBackground.js';
import { t as o } from '../backgrounds/LightRaysCornerBackground.js';
import { t as s } from '../backgrounds/RadialGradientBackground.js';
var c = e(),
  l = () => {
    let { heroBackground: e } = t();
    switch (e) {
      case `cornerGlow`:
        return (0, c.jsx)(n, { position: `absolute` });
      case `gradientBars`:
        return (0, c.jsx)(r, { position: `absolute` });
      case `horizonGlow`:
        return (0, c.jsx)(i, { position: `absolute` });
      case `lightRaysCenter`:
        return (0, c.jsx)(a, { position: `absolute` });
      case `lightRaysCorner`:
        return (0, c.jsx)(o, { position: `absolute` });
      case `radialGradient`:
        return (0, c.jsx)(s, { position: `absolute` });
      default:
        return null;
    }
  };
export { l as t };
