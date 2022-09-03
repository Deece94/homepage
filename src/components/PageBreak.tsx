import styled from "styled-components";

const BreakDiv = styled.div`
	height: 150px;
	background-color: ${(props) => props.theme.colors.white};
`;

export default function PageBreak() {
	return <BreakDiv></BreakDiv>;
}
