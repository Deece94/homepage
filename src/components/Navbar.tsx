import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button``;

const Container = styled.nav`
    text
`;

const NavItem = styled.li``;

export default function NavBar() {
  return (
    <Container>
      <ul>
        <NavItem>
          <a href="/home">Home</a>
        </NavItem>
        <NavItem>
          <a href="/home">About Me</a>
        </NavItem>
        <NavItem>
          <a href="/home">Projects</a>
        </NavItem>
        <NavItem>
          <a href="/home">Contact</a>
        </NavItem>
      </ul>
      <div>navbar</div>
    </Container>
  );
}
