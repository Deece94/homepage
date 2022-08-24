import styled from "styled-components";
import Typewriter from "react-ts-typewriter";

const Block = styled.div`
	min-height: 100vh;
	margin: 0px;
	padding: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.black};
`;

const Center = styled.div``;

const Introduction = styled.p`
	margin: 0;
	font-size: 150%;
`;

const Greeting = styled(Introduction)`
	color: ${(props) => props.theme.colors.primary};
`;

const NameTitle = styled.h1`
	font-size: 350%;
	font-weight: normal;
	margin: 0;
	color: ${(props) => props.theme.colors.white};
`;

export default function Home() {
	return (
		<Block id="home">
			<div>
				<Greeting>Hi, I'm</Greeting>
				<TypewriterHeader />
				<Introduction>
					A fullstack web developer from Newcastle, Australia.
				</Introduction>
			</div>
		</Block>
	);
}

function TypewriterHeader() {
	return (
		<NameTitle>
			<Typewriter speed={70} text="Dylan Collar " />
		</NameTitle>
	);
}