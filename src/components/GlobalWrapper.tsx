import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  padding-left: 150px;
  padding-right: 150px;
`;

export default function GlobalWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
