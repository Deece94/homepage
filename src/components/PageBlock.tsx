import styled from "styled-components";

const Block = styled.div`
  min-height: 100vh;
  margin: 5rem 0rem 5rem 0rem;
  background-color: ${(props) => props.theme.colors.black};
`;

export default function PageBlock(props) {
  const id = props.id;

  return (
    <>
      <Block id={id}>{props.children}</Block>
    </>
  );
}
