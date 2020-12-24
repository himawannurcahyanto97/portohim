import styled from "styled-components";

export const Banner = styled.div`
    display: flex;
`;

export const ImgPart = styled.div`
    flex-basis: 40%;
    padding: 5px;
    margin: 0 auto;
    align-items: center;
`;

export const Img = styled.img`
    max-width: 414px;
    margin-top: 40px;
`;
export const IntroPart = styled.div`
    flex-basis: 60%;
    flex-direction: column;
    padding: 5px;
    align-self:center;
    margin-top: 50px;
`;

export const Intro = styled.p`
    font-weight: ${props => props.big ? 900 : 500};
    font-size: ${props => props.big ? "30px" : "14px"};
    line-height: ${props => props.big ? "45px" : "21px"};
    letter-spacing: ${props => props.normal ? "0.07em" : "0.54em"};
    margin-top: ${props => props.jobs ? "15px" : "0px"};
`;