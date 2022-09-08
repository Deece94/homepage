import styled from "styled-components";
import PageBlock from "./PageBlock";
import Header from "./styles/Header";
import Link from "./styles/Link";

const Paragraph = styled.p`
	color: ${(props) => props.theme.colors.white};
	font-size: 18px;
`;

const Container = styled.div`
	padding: 100px;
	display: flex;
`;

const Half = styled.div`
	width: 50%;
`;

const ImgBorder = styled.div`
	position: relative;
	&:after {
		content: "";
		border: 2px solid ${(props) => props.theme.colors.primary};
		top: 20px;
		left: 20px;
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;

const ImgPlaceholder = styled.div`
	display: block;
	height: 200px;
	width: 200px;
	background-color: ${(props) => props.theme.colors.white};
`;

export default function About() {
	return (
		<PageBlock id="about">
			<Header>About Me</Header>
			<Container>
				<Half>
					<Paragraph>
						Hello! My name is Dylan. I'm a fullstack web developer from
						Newcastle, Australia. I first found an interest in programming
						during high school building games with GameMaker and Flash and
						pulling apart others to see how they ticked. Now I love building
						products that enhance your experience on the web.
					</Paragraph>
					<Paragraph>
						Currently I work for{" "}
						<Link href="https://www.4dcontrols.com">4D Controls</Link>, one of
						Australia's largest suppliers of automation equipment. I focus on
						designing, building and maintaining applications that improve the
						way we run on a day to day basis.
					</Paragraph>
				</Half>
				<Half>
					<ImgBorder>
						<ImgPlaceholder></ImgPlaceholder>
					</ImgBorder>
				</Half>
			</Container>
		</PageBlock>
	);
}
