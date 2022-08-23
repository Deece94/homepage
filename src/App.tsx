import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Theme>
        <div className="App">
          <NavBar />
          <Home />
          <About />
          <Work />
          <Footer />
        </div>
      </Theme>
    </>
  );
}
