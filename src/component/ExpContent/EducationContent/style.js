import styled from "styled-components";

export const StudContain = styled.div`
    display: grid;
    grid-auto-columns: 100%;
    margin-bottom: 32px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    &:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
        }
`;

export const BoxStudContain = styled.div`
    display: flex;
    margin: 24px 17px 44px 27px;
`;

export const EduPart = styled.div`
    flex-grow: ${(props) => (props.contain ? "49%" : "25%")};
    align-self: center;
    margin-top: ${(props) => (props.contain ? "0" : "20px")};
`;

export const EduTitle = styled.h6`
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    padding: 10px;
`;

export const EduWrite = styled.p`
    padding: 5px 10px;
    font-size: ${(props) => (props.desc ? "14px" : "16px")};
    line-height: ${(props) => (props.desc ? "21px" : "14px")};
    color: ${(props) => (props.year ? "#5A5A5A" : "#333333")};
`;