import styled from "styled-components";

export const HomeContent = styled.div`
    display: flex;
`;
export const IntroPart = styled.div`
    flex-basis: 60%;
    flex-direction: column;
    padding: 5px;
    align-self:center;
    margin-top: 50px;
`;

export const Intro = styled.p`
    font-weight: ${props => props.big ? 'bold' : 500};
    font-size: ${props => props.big ? "30px" : "14px"};
    line-height: ${props => props.big ? "45px" : "21px"};
    letter-spacing: ${props => props.normal ? "0.07em" : "0.54em"};
    margin-top: ${props => props.jobs ? "15px" : "0px"};
`;
export const Homebtn = styled.button`
    border-radius: 30px;
    margin-top: 50px;
    background: #1054D9;
    padding: 10px 30px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 80%;
    }
`;

export const ImgPart = styled.div`
    flex-basis: 40%;
    padding: 5px;
    margin: 0 auto;
    align-items: center;
`;

export const Img = styled.img`
    max-width: 414px
`;