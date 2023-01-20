import styled from "styled-components";

export default styled.a`
    color: ${(props) => props.theme.colors.primary_500};
    text-decoration: none;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.secondary};
    }
`;
