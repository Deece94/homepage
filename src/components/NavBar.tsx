import styled from "styled-components";

const HeaderBar = styled.header`
    width: 100%;
    z-index: 50;
    top: 0;
    position: fixed;
    background-color: ${(props) => props.theme.colors.dark_accent};
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    transition: top 0.6s;
    height: 70px;
    display: grid;
    grid-template-columns: 60% repeat(4, 1fr);
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Heading = styled.h2`
    padding: 0;
    margin: 0;
    font-size: 200%;
`;

const NavBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavLink = styled.button`
    color: ${(props) => props.theme.colors.primary_100};
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 120%;
    &:hover {
        text-decoration: underline;
    }
`;

const NavNumber = styled.span`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
    font-size: 120%;
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
        <HeaderBar>
            <TitleContainer>
                <Heading></Heading>
            </TitleContainer>
            <NavBlock>
                <NavNumber>01.</NavNumber>
                <ScrollLink scrollToId="home">Home</ScrollLink>
            </NavBlock>
            <NavBlock>
                <NavNumber>02.</NavNumber>
                <ScrollLink scrollToId="about">About Me</ScrollLink>
            </NavBlock>
            <NavBlock>
                <NavNumber>03.</NavNumber>
                <ScrollLink scrollToId="work">Projects</ScrollLink>
            </NavBlock>
            <NavBlock>
                <NavNumber>04.</NavNumber>
                <ScrollLink scrollToId="contact">Contact</ScrollLink>
            </NavBlock>
        </HeaderBar>
    );
}
