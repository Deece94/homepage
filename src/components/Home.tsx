import styled from "styled-components";
import Typewriter from "react-ts-typewriter";
import PageBlock from "./PageBlock";

const TitleContainer = styled.div`
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.dark};
`;

const Introduction = styled.p`
    margin: 0;
    font-size: clamp(15px, 4vw, 20px);
`;

const Greeting = styled(Introduction)`
    color: ${(props) => props.theme.colors.primary};
`;

const NameTitle = styled.h1`
    font-size: clamp(40px, 8vw, 60px);
    font-weight: normal;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
`;

export default function Home() {
    return (
        <PageBlock id="home">
            <TitleContainer>
                <div>
                    <Greeting>Hi, I'm</Greeting>
                    <TypewriterHeader />
                    <Introduction>
                        A fullstack web developer from Newcastle, Australia.
                    </Introduction>
                </div>
            </TitleContainer>
        </PageBlock>
    );
}

function TypewriterHeader() {
    return (
        <NameTitle>
            <Typewriter speed={70} text="Dylan Collar " />
        </NameTitle>
    );
}
