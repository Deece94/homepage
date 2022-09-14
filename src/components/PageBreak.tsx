import styled from "styled-components";

const BreakDiv = styled.div`
    height: 20px;
`;

const Line = styled.hr`
    border: 0.5px solid ${(props) => props.theme.colors.dark_accent};
`;

export default function PageBreak() {
    return (
        <BreakDiv>
            <Line />
        </BreakDiv>
    );
}
