import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
// import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
${Fonts}

:root {
  ${'' /* base blue color  */}
  --prussian-blue: #12355bff;
  ${'' /* accent pink color  */}
  --pale-pink: #fad4d8ff;
  ${'' /* accent blue color  */}
  --fluorescent-blue: #34e4eaff;
  ${'' /* base green color  */}
  --viridian: #5b8266ff; 

  --font-sans: 'Roboto','Open Sans Condensed' , 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

  --fz-xxs: 12px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;

  --border-radius: 4px;


}

`;

export default GlobalStyle;
