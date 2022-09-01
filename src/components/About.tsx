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

export default function About() {
	return (
		<PageBlock id="about">
			<Header>About Me</Header>
			<Paragraph>
				Hello! My name is Dylan. I build things on the internet.
			</Paragraph>
			<Paragraph>
				Currently I work for{" "}
				<Link href="https://www.4dcontrols.com">4D Controls</Link> engineering
				and maintaining applications to assist .
			</Paragraph>
		</PageBlock>
	);
}
