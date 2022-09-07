import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import PageBreak from "./components/PageBreak";
import Theme from "./components/Theme";
import Work from "./components/Work";

export default function App() {
	return (
		<>
			<Theme>
				<NavBar />
				<Main>
					<Home />
					<PageBreak />
					<About />
					<PageBreak />
					<Work />
					<PageBreak />
					<Contact />
					<Footer />
				</Main>
			</Theme>
		</>
	);
}
