import styled from "styled-components";
import PageBlock from "./PageBlock";
import Link from "./styles/Link";

const Header = styled.h1`
	text-decoration: underline;
	color: ${(props) => props.theme.colors.white};
	width: 100%;
	text-align: center;
`;

const Paragraph = styled.p`
	color: ${(props) => props.theme.colors.white};
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
`;

const ImgBorder = styled.div`
	border: 4px solid ${(props) => props.theme.colors.primary};
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
						Hello! My name is Dylan. I'm a fullstack web developer from
						Newcastle, Australia. I love building products that improve your
						experience on the web.
					</Paragraph>
					<Paragraph>
						Currently I'm working for{" "}
						<Link href="https://www.4dcontrols.com">4D Controls</Link>{" "}
						engineering and maintaining applications that assist our internal
						workflow and processes.
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
