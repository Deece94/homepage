import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";

const GlobalStyles = createGlobalStyle`
  * {
    line-height: 1.4;
    font-family: ${theme.fonts.primary};
  }

  body {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white}
  }
`;

export default function Theme({ children }) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
}
