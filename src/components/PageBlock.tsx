import styled from "styled-components";

const Block = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function PageBlock(props) {
	const id = props.id;

	return (
		<Block id={id}>
			<div>{props.children}</div>
		</Block>
	);
}
