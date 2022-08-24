import styled from "styled-components";
import PageBlock from "./PageBlock";

const Header = styled.h1`
	text-decoration: underline;
	color: ${(props) => props.theme.colors.primary};
`;

const Paragraph = styled.p`
	color: ${(props) => props.theme.colors.white};
`;

export default function About() {
	return (
		<PageBlock id="about">
			<Header>About Me</Header>
			<hr />
			<Paragraph>
				Hello! My name is Dylan. I build things on the internet.
			</Paragraph>
			<Paragraph>
				Currently I work for{" "}
				<a href="https://www.4dcontrols.com">4D Controls</a>.
			</Paragraph>
		</PageBlock>
	);
}
