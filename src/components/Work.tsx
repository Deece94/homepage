import styled from "styled-components";
import PageBlock from "./PageBlock";

const Header = styled.h1`
	text-decoration: underline;
`;

export default function About() {
	return (
		<PageBlock id="work" backgroundColor={(props) => props.theme.colors.white}>
			<Header>My Work</Header>
			<p>information</p>
			<p>Git hub source for projects</p>
		</PageBlock>
	);
}
