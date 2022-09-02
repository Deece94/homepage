export const theme: ThemeObject = {
	colors: {
		primary: "#7a73b1",
		accent: "#355691",
		secondary: "#413f54",
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
