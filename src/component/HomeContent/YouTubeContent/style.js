import styled from "styled-components";

export const YTContainer = styled.div`
    display: flex;
    margin: 0 50px;
    @media screen and (max-width: 1015px) {
        display: block;
        margin: 0 auto;
    }
`;

export const YTProfile = styled.div`
    margin: 2px 2px 2px 50px;
    flex-basis: 40%;
    align-self:center;
    text-align:center;
    @media screen and (max-width: 1015px) {
        margin: 0 auto;
    }
`;
export const YouTube = styled.iframe`
    width: 400px;
    height: 231px;
    @media screen and (max-width: 1015px) {
        width: 100%;
        height: 200px;
        margin: 0 auto;
`;

export const YTPictPart = styled.div`
    flex-basis: 40%;
`;

export const YTPict = styled.img`
    width: 117px;
    border-radius: 50%;
    justify: center;
    @media screen and (max-width: 1015px) {
        width:70px;
    }
`;

export const YTName = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.1em;
`;

export const Visit = styled.a`
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #5A5A5A;
    text-decoration: none;
    width: 100%;
`;