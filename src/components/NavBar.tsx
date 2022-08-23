import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  padding: 0px 50px 0px 50px;
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
  font-weight: bold;
  font-size: 150%;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <NavBlock>
        <NavLink href="#home">Home</NavLink>
      </NavBlock>
      <NavBlock>
        <NavLink href="#about">About Me</NavLink>
      </NavBlock>
      <NavBlock>
        <NavLink href="#work">Projects</NavLink>
      </NavBlock>
      <NavBlock>
        <NavLink href="#contact">Contact</NavLink>
      </NavBlock>
    </NavContainer>
  );
}
