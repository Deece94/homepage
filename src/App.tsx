import styled from "styled-components";
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";

const Text = styled.p`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
`;

export default function App() {
  return (
    <Theme>
      <div className="App">
        <NavBar />
      </div>
    </Theme>
  );
}
