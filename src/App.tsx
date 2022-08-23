import About from "./components/About";
import Footer from "./components/Footer";
import GlobalWrapper from "./components/GlobalWrapper";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Theme>
        <NavBar />
        <GlobalWrapper className="App">
          <Home />
          <About />
          <Work />
          <Footer />
        </GlobalWrapper>
      </Theme>
    </>
  );
}
