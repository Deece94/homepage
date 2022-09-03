import styled from "styled-components";

const FixedContainer = styled.header`
  width: 100%;
  z-index: 50;
  top: 0;
  position: fixed;
  background-color: ${(props) => props.theme.colors.dark_accent};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px 0px 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  padding: 10px 0 10px 0;
`;

const NavContainer = styled.nav`
  display: flex;
`;

const NavBlock = styled.div`
  padding: 10px;
  display: flex;
`;

const NavLink = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

function ScrollLink(props: { scrollToId: string; children: any }) {
  const scrollToId: string = props.scrollToId;

  const executeScroll = (id: string) => {
    const ele = document.getElementById(id);
    window.scrollTo({
      top: ele.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <NavLink onClick={() => executeScroll(scrollToId)}>
      {props.children}
    </NavLink>
  );
}

export default function NavBar() {
  return (
    <FixedContainer>
      <FlexContainer>
        <TitleContainer>
          <img src="logo.svg" alt="logo" height="40px" />
        </TitleContainer>
        <NavContainer>
          <NavBlock>
            <ScrollLink scrollToId="home">Home</ScrollLink>
          </NavBlock>
          <NavBlock>
            <ScrollLink scrollToId="about">About Me</ScrollLink>
          </NavBlock>
          <NavBlock>
            <ScrollLink scrollToId="work">Projects</ScrollLink>
          </NavBlock>
          <NavBlock>
            <ScrollLink scrollToId="contact">Contact</ScrollLink>
          </NavBlock>
        </NavContainer>
      </FlexContainer>
    </FixedContainer>
  );
}
