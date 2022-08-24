export const theme: ThemeObject = {
  colors: {
    primary: "#7a73b1",
    accent: "#355691",
    secondary: "#413f54",
    dark: "#30292f",
    dark_accent: "#3e353c",
    light: "#3f4045",
    white: "#eee",
    gray: "#3f4045",
    black: "#222",
  },
  fonts: {
    primary: "'Rubik', sans-serif",
  },
};


interface ThemeObject{
  colors: {[index: string]: string },
  fonts: {[index: string]: string }
}