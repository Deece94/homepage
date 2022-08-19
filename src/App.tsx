import styled from "styled-components";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";

export default function App() {
  return (
    <Theme>
      <div className="App">
        <NavBar />
      </div>
    </Theme>
  );
}
