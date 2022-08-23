import styled from "styled-components";
import PageBlock from "./PageBlock";

const Header = styled.h3`
  text-decoration: underline;
`;

export default function About() {
  return (
    <PageBlock id="about">
      <Header>About Me</Header>
      <p>information</p>
    </PageBlock>
  );
}
