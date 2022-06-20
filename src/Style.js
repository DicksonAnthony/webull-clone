import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle.div`
  *{
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
  }
  html, body {
    overflow-x: hidden;
  }
`;
