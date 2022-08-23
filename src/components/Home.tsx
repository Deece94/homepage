import styled from "styled-components";

const Block = styled.div`
  min-height: 100vh;
  margin: 0px;
  background-color: ${(props) => props.theme.colors.white};
`;

const WideImage = styled.img`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default function Home() {
  return (
    <Block id="home">
      <WideImage src="stock_image.jpg" alt="todo stock" />
    </Block>
  );
}
