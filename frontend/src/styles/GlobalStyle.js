import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import TransitionStyles from './TransitionStyles';

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

    --nav-height: 100px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);


}

body{
  background-color: var(--prussian-blue)
}

main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }


`;

export default GlobalStyle;
