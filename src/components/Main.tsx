import styled from "styled-components";

const MainBlock = styled.main`
    padding: 0px 150px;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
`;

export default function Main(props: { children: any }) {
    return <MainBlock>{props.children}</MainBlock>;
}
