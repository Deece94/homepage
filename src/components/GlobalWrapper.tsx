import styled from "styled-components";

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.colors.dark};
`;

export default function GlobalWrapper(props) {
	return <Wrapper>{props.children}</Wrapper>;
}
