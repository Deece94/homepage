import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";

const GlobalStyles = createGlobalStyle`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    line-height: 1.4;
    font-family: ${theme.fonts.primary};
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
