import styled from "styled-components";

export const WorkContain = styled.div`
    flex-basis: ${(props) => (props.companypict ? "25%" : "75%")};
    align-self: ${(props) => (props.companypict ? "none" : "center")};
    text-align: ${(props) => (props.companypict ? "center" : "left")};
    margin-top: ${(props) => (props.companypict ? "40px" : "0px")};
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
    max-width: 244px;
    padding: 5px;
`;