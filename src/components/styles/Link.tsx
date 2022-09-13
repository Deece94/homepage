import styled from "styled-components";

export default styled.a`
	color: ${(props) => props.theme.colors.primary};
	text-decoration: none;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;
