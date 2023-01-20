import styled from "styled-components";
import PageBlock from "./PageBlock";
import Header from "./styles/Header";
import Link from "./styles/Link";

const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.primary_200};
    font-size: 18px;
`;

const Container = styled.div`
    padding: 100px;
    display: flex;
`;

const Half = styled.div`
    width: 50%;
    padding: 0px 10px;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgBorder = styled.div`
    border: 4px solid ${(props) => props.theme.colors.secondary};
    border-radius: 100%;
    max-height: 300px;
    max-width: 300px;
`;

const ProfileImg = styled.img`
    display: block;
    border-radius: 100%;
    height: 100%;
    width: 100%;
    filter: grayscale(100%);
    transition: 0.5s filter linear;
    &:hover {
        filter: none;
    }
`;

export default function About() {
    return (
        <PageBlock id="about">
            <Header>About Me</Header>
            <Container>
                <Half>
                    <Paragraph>
                        Hello! My name is Dylan. I'm a full-stack web developer
                        from Newcastle, Australia. My passion for programming
                        was ignited during my high school days, where I spent my
                        time building games with tools such as GameMaker and
                        Flash, and deconstructing existing ones to understand to
                        see how they ticked. Today, I am driven by the challenge
                        of building exceptional digital products that enrich the
                        online experience for users.
                    </Paragraph>
                    <Paragraph>
                        Currently I work at{" "}
                        <Link href="https://www.4dcontrols.com">
                            4D Controls
                        </Link>
                        , one of Australia's largest suppliers of automation
                        equipment. I specialize in crafting innovative,
                        efficient and user-friendly web applications that
                        streamline daily operations and enhance productivity. My
                        work encompasses the entire development process from
                        conceptualization, design and implementation, to ongoing
                        maintenance and optimization.
                    </Paragraph>
                    <Paragraph>
                        My skills in a variety of programming languages,
                        including HTML, CSS, JavaScript, and PHP, allow me to
                        create highly functional, visually stunning websites and
                        applications. If you want to hear more, feel free to get
                        in contact!
                    </Paragraph>
                </Half>
                <Half>
                    <ImgContainer>
                        <ImgBorder>
                            <ProfileImg src="profile.jpg"></ProfileImg>
                        </ImgBorder>
                    </ImgContainer>
                </Half>
            </Container>
        </PageBlock>
    );
}
