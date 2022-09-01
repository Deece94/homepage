import styled from "styled-components";

const Block = styled.div<{ backgroundColor: string }>`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.black};
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
			<div>{props.children}</div>
		</Block>
	);
}
