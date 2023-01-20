export const theme: ThemeObject = {
    colors: {
        primary_100: "#DEDCEB",
        primary_200: "#C5C2DD",
        primary_300: "#ACA7CE",
        primary_400: "#938DC0",
        primary_500: "#7A73B1",
        primary_600: "#5C5497",
        primary_700: "#464073",
        primary_800: "#302C4F",
        primary_900: "#1A182B",
        secondary: "#2CFFCD",
        dark: "#051923",
        dark_accent: "#072533",
        light: "#3f4045",
        white: "#eeeeee",
        gray: "#3f4045",
        black: "#222222",
    },
    fonts: {
        primary: "'Rubik', sans-serif",
    },
};

interface ThemeObject {
    colors: { [index: string]: string };
    fonts: { [index: string]: string };
}
