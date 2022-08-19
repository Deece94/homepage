import styled from "styled-components";
import Theme from "./Theme";

const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
`;

const NavBlock = styled.div`
  padding: 10px;
  display: block;
  background-color: inherit;
  &:hover {
    background-color: ${(props) => props.theme.colors.dark_accent};
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <NavBlock>
        <NavLink href="/home">Home</NavLink>
      </NavBlock>
      <NavBlock>
        <NavLink href="/home">About Me</NavLink>
      </NavBlock>
      <NavBlock>
        <NavLink href="/home">Projects</NavLink>
      </NavBlock>
      <NavBlock>
        <NavLink href="/home">Contact</NavLink>
      </NavBlock>
    </NavContainer>
  );
}
