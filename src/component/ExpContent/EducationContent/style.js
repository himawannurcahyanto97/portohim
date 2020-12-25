import styled from "styled-components";

export const EduPart = styled.div`
    flex-basis: ${(props) => (props.contain ? "80%" : "25%")};
    align-self: center;
    text-align: ${(props) => (props.contain ? "left" : "center")};
    margin-top: ${(props) => (props.contain ? "0" : "20px")};
    @media screen and (max-width: 642px) {
        text-align:center;
    }
`;