import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
