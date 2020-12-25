import styled from "styled-components";

export const WorkContain = styled.div`
    flex-basis: ${(props) => (props.companypict ? "25%" : "75%")};
    align-self: center;
    text-align: ${(props) => (props.companypict ? "center" : "left")};
    margin-top: ${(props) => (props.companypict ? "20" : "0px")};
    padding: 5px;
    @media screen and (max-width: 642px) {
        text-align:center;
    }
`;

export const CompPict = styled.img`
    max-width: 155px;
`;

export const AddedPictWork = styled.img`
    display: inline-block;
    margin: 5px;
    max-width: 172px;
    padding: 5px;
`;