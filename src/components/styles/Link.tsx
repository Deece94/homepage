import styled from "styled-components";

const Link = styled.a`
	color: ${(props) => props.theme.colors.primary};
	text-decoration: none;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

export default Link;
