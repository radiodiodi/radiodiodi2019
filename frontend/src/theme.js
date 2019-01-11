import { injectGlobal } from 'styled-components';

const theme = {
  color: {
    grey100: 'rgba(37, 35, 38, 1.0)',
    grey75: 'rgba(37, 35, 38, 0.75)',
    grey50: 'rgba(37, 35, 38, 0.50)',
    blue100: 'rgba(0, 167, 197, 1.0)',
    blue75: 'rgba(0, 167, 197, 0.75)',
    blue50: 'rgba(0, 167, 197, 0.50)',
    pink100: 'rgba(228, 15, 126, 1.0)',
    pink75: 'rgba(228, 15, 126, 0.75)',
    pink50: 'rgba(228, 15, 126, 0.50)',
    white100: 'rgba(255, 255, 255, 1.0)',
    white75: 'rgba(255, 255, 255, 0.75)',
    white50: 'rgba(255, 255, 255, 0.50)',
  },
  font: {
    gothic: 'Gothic A1, sans-serif',  // Similar to League Gothic, serif headings.
    comfortaa: 'Comfortaa, cursive',  // Comfortaa. Wide, funky headings.
    ptsans: 'PT Sans, sans-serif',    // Similar to Myriad Pro, body text.
    signika: 'Signika, sans-serif',   // Similar to Bahnschrift, Radiodiodi logo font.
  },
};

injectGlobal`
    body {
        font-family: ${theme.font.ptsans};
        letter-spacing: 0.5px;
        max-width: 1000px;
        margin: 0 auto 0;
        padding: 1rem 1rem 0 1rem;
        line-height: 1.3rem;
    }
    html {
        box-sizing: border-box;
        background-color: ${theme.color.white100};
        color: ${theme.color.grey100};
        height: 100vh;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    h2 {
        line-height: 2rem;
        font-family: ${theme.font.gothic};
        font-weight: bolder;
        color: ${theme.color.grey100};
    }
    h3 {
        font-size: 1.5rem;
        color: ${theme.color.grey100};
    }
    a {
      color: ${theme.color.grey75};
      text-decoration: none;
      cursor: pointer;

      &:hover {
          text-decoration: underline;
      }
    }
`;

export default theme;
