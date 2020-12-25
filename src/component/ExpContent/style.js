import styled from "styled-components";

export const TitleContent = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.07em;
    color: #111111;
    margin-bottom: 22px;
    @media screen and (max-width: 740px) {
        font-weight: 700;
    }
`;

export const WrapperContent = styled.div`
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

export const BoxExpContain = styled.div`
    display: flex;
    margin: 24px 17px 44px 27px;
    @media screen and (max-width: 642px) {
        display: block;
    }
`;

export const ExpTitle = styled.h6`
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    padding: 0 5px;
    
`;

export const ExpWrite = styled.p`
    font-size: ${(props) => (props.desc ? "14px" : "16px")};
    line-height: ${(props) => (props.desc ? "21px" : "17px")};
    color: ${(props) => (props.year ? "#5A5A5A" : "#333333")};
    padding: 2px 5px;
    @media screen and (max-width: 642px) {
        padding: 5px;
    }
`;