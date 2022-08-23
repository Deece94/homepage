import About from "./components/About";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";

export default function App() {
	return (
		<>
			<Theme>
				<div className="App">
					<NavBar />
					<About />
				</div>
			</Theme>
		</>
	);
}
