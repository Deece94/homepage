import styled from "styled-components";
import PageBlock from "./PageBlock";

const Header = styled.h1`
	text-decoration: underline;
	color: ${(props) => props.theme.colors.white};
`;

const Paragraph = styled.p`
	color: ${(props) => props.theme.colors.white};
`;

const Link = styled.a`
	color: ${(props) => props.theme.colors.white};
	text-decoration: none;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

const Container = styled.div`
	display: flex;
`;

const Half = styled.div`
	width: 50%;
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
				<Half>Img</Half>
			</Container>
		</PageBlock>
	);
}
