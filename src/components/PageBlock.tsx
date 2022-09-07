import styled from "styled-components";

const Block = styled.section<{ backgroundColor: string }>`
	min-height: 100vh;
	width: 100%;
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : props.theme.colors.dark};
`;

export default function PageBlock(props: {
	id: string;
	backgroundColor?: any;
	children: any;
}) {
	const id = props.id;
	const backgroundColor = props.backgroundColor;
	return (
		<Block id={id} backgroundColor={backgroundColor}>
			{props.children}
		</Block>
	);
}
