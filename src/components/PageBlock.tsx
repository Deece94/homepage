import styled from "styled-components";

const Block = styled.div`
  min-height: 100vh;
  margin: 5rem 0rem 5rem 0rem;
`;

export default function PageBlock(props) {
  const id = props.id;

  return (
    <>
      <Block id={id}>{props.children}</Block>
    </>
  );
}
