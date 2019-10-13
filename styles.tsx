import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${normalize()}

body {
    @font-face {
      font-family: 'Roboto';
      font-display: auto;
      src: local('Roboto'),
           url('https://fonts.googleapis.com/css?family=Roboto&display=swap')
    }
    font-family: fontstack, sans-serif;
  }
`;
